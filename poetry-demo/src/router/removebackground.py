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
        return {"url" : "implement"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))