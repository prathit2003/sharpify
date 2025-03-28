import src.services 
import cloudinary  
from fastapi import HTTPException
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
def get_image_url(public_id: str) -> str:
    try:
        cloud_name = cloudinary.config().cloud_name
        if not cloud_name:
            raise HTTPException(status_code=500, detail="Cloudinary is not configured properly.")
        
        image_url = f"https://res.cloudinary.com/{cloud_name}/image/upload/v1740765240/uploaded_images/{public_id}"
        return image_url

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

