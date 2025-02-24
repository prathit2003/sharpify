from fastapi import HTTPException
import src.services 
import cloudinary.uploader
from io import BytesIO
from PIL import Image
import asyncio 

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

        return upload_result["secure_url"]

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
