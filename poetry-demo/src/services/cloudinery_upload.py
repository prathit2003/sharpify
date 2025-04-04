from fastapi import HTTPException
import cloudinary.uploader
from io import BytesIO
from PIL import Image
import asyncio
import os
from dotenv import load_dotenv
import cloudinary

load_dotenv()

cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET"),
    secure=True
)

async def upload_image(image_input, format: str = "png") -> str:
    try:
        
        if isinstance(image_input, Image.Image):
            image = image_input  
        elif isinstance(image_input, bytes):
            image = Image.open(BytesIO(image_input))  
        else:
            raise ValueError("Invalid image format. Expected PIL.Image or bytes.")

        
        img_byte_array = BytesIO()
        image.save(img_byte_array, format=format.upper())
        img_byte_array.seek(0)

        
        upload_result = await asyncio.to_thread(
            cloudinary.uploader.upload,
            img_byte_array,
            asset_folder="enhanced_images",
            format=format
        )

        
        secure_url = upload_result.get("secure_url")
        if not secure_url:
            raise ValueError("Failed to retrieve secure URL from Cloudinary response")

        return secure_url  

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
