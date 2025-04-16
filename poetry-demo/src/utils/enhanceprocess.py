import uuid
import os
from fastapi import HTTPException
from src.services.downloadImage import download_image
from src.services.cloudinery_upload import upload_image
from PIL import Image
from io import BytesIO
import numpy as np
import torch

from basicsr.archs.rrdbnet_arch import RRDBNet
from realesrgan import RealESRGANer

current_dir = os.path.dirname(__file__)
model_path = os.path.abspath(os.path.join(current_dir, "..", "weights", "RealESRGAN_x4plus.pth"))

state_dict = torch.load(model_path, map_location=torch.device('cpu'))['params_ema']

model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64, num_block=23, num_grow_ch=32, scale=4)
model.load_state_dict(state_dict, strict=True)
upsampler = RealESRGANer(
    scale=4,
    model_path=model_path,
    model=model,
    tile=0,
    pre_pad=0,
    half=False,
)

async def process_enhance_image_from_url(image_url: str) -> str:
    try:
        # Step 1: Download image
        image: Image.Image = download_image(image_url)
        image = image.convert("RGB")
        image_np = np.array(image)

        # Step 2: Enhance image
        output_np, _ = upsampler.enhance(image_np, outscale=4)
        output_image = Image.fromarray(output_np)

        # Step 3: Save to bytes
        img_bytes = BytesIO()
        output_image.save(img_bytes, format="PNG")
        img_bytes.seek(0)

        # Step 4: Upload image
        final_url = await upload_image(img_bytes.getvalue(), "png")

        return final_url

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Enhancement failed: {str(e)}")
