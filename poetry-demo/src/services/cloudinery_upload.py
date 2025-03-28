from fastapi import HTTPException
import src.services 
import cloudinary.uploader
from io import BytesIO
from PIL import Image
import asyncio 
import os
from dotenv import load_dotenv
import cloudinary

load_dotenv()  # Load .env variables

cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET"),
    secure=True
)
async def upload_image(public_id: str, image_input) -> str:
    try:
       
        if isinstance(image_input, Image.Image):  
            image = image_input 
        elif isinstance(image_input, bytes):  
            image = Image.open(BytesIO(image_input)) 
        else:
            raise ValueError("Invalid image format. Expected PIL.Image or bytes.")

        img_byte_array = BytesIO()
        image.save(img_byte_array, format="JPEG") 
        img_byte_array.seek(0)

        upload_result = await asyncio.to_thread(
            cloudinary.uploader.upload,
            img_byte_array,
            public_id=public_id,
            overwrite=True
        )
        print(upload_result["secure_url"])
        return upload_result["secure_url"]

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
