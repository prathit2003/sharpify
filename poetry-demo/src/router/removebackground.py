from fastapi import APIRouter
from fastapi import HTTPException
from pydantic import BaseModel
from typing import Optional
from dotenv import load_dotenv
import cloudinary
import cloudinary.uploader 
import os
import asyncio
load_dotenv()

cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET"),
    secure=True
)

router = APIRouter()

class ImageRequest(BaseModel):
    image_url: str
    format: Optional[str] = 'png'
@router.post("/removebackground")
async def remove_bg(request: ImageRequest):
    try:
        processed_url = await asyncio.to_thread(
            cloudinary.uploader.upload,
            request.image_url,
            asset_folder="enhanced_images",
            background_removal="cloudinary_ai"
        )
        secure_url = processed_url.get("secure_url")
        if not secure_url:
            raise ValueError("Failed to retrieve secure URL from Cloudinary response")
        
        return {"url" : secure_url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))