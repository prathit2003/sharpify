# from src.services.cloudinery_upload import upload_image
from fastapi import FastAPI
from fastapi import HTTPException
# import torch
# import numpy as np
# import cv2
# from PIL import Image
# from src.services.downloadImage import download_image
# from realesrgan import RealESRGAN

# MODEL_PATH = ""

# def enhance_image(image: Image.Image) -> Image.Image:
#     device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
#     model = RealESRGAN(device, scale=4)
#     model.load_weights(MODEL_PATH)

#     image = np.array(image)
#     image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
#     enhanced_image = model.predict(image)

#     return Image.fromarray(cv2.cvtColor(enhanced_image, cv2.COLOR_BGR2RGB))

# async def process_image(image_url: str) -> str:
#     try:
#         image = download_image(image_url)
#         enhanced_image = enhance_image(image)
#         new_image_url = await upload_image(enhanced_image)
#         return new_image_url

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))
