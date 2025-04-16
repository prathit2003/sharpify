from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from src.utils.enhanceprocess import process_enhance_image_from_url

router = APIRouter()

class ImageRequest(BaseModel):
    image_url: str

@router.post("/enhanceimage")
async def enhance_image(request: ImageRequest):
    try:
        
        if not request.image_url.strip():
            raise HTTPException(status_code=400, detail="Image URL is required.")

       
        processed_url = await process_enhance_image_from_url(request.image_url)
        
        if not processed_url:
            raise HTTPException(status_code=500, detail="Failed to process and enhance the image.")
        
        return {"url": processed_url}

    except HTTPException as http_exc:
        
        raise http_exc

    except Exception as e:
       
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")
