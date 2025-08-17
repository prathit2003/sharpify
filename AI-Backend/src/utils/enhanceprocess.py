from fastapi import HTTPException, UploadFile
from src.services.s3_upload import upload_to_s3
from PIL import Image
from io import BytesIO
import numpy as np

async def process_enhance_image(file: UploadFile, upsampler) -> str:
    try:
        
        contents = await file.read()
        image = Image.open(BytesIO(contents)).convert("RGB")

       
        image_np = np.array(image)

        
        output_np, _ = upsampler.enhance(image_np, outscale=4)
        output_image = Image.fromarray(output_np)

        
        img_bytes = BytesIO()
        output_image.save(img_bytes, format="PNG")
        img_bytes.seek(0)

       
        final_url = await upload_to_s3(img_bytes.getvalue())
        return final_url

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Enhancement failed: {str(e)}")
