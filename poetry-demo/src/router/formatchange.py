from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional
from src.utils.formatchangeprocess import process_image

router = APIRouter()

class ImageRequest(BaseModel):
    image_url: str
    format: Optional[str] = 'png'
    

@router.post("/changeformat")
async def change_format(request: ImageRequest):
    print(ImageRequest)
    processed_url = await process_image(request.image_url, request.format)
    return {"url":processed_url}