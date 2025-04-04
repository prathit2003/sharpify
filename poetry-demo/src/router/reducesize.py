from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from src.utils.reducesizeprocess import process_image
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
    format: Optional[str] = "JPEG"

@router.post("/reducesize")
async def reduce_size(request: ImageRequest):
  try : 
    final_img = await process_image(request.image_url, request.format)
    response =  await asyncio.to_thread(
            cloudinary.uploader.upload,
            final_img,
            folder="enhanced_images"
        )
    secure_url = response.get("secure_url")
    if not secure_url:
        raise ValueError("Failed to retrieve secure URL from Cloudinary response")

    return {"url":secure_url}
  except HTTPException as http_err:
        raise http_err  

  except cloudinary.exceptions.Error as cloud_err:
        raise HTTPException(status_code=500, detail=f"Cloudinary upload failed: {str(cloud_err)}")

  except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")