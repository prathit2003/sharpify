import os
import requests
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get API Key from .env
REPLICATE_API_KEY = os.getenv("REPLICATE_API_KEY")
if not REPLICATE_API_KEY:
    raise ValueError("Replicate API key not found. Please add it to your .env file.")

# Initialize FastAPI router
router = APIRouter()

# Request model
class ImageRequest(BaseModel):
    image_url: str

# Replicate API URL
REPLICATE_API_URL = "https://api.replicate.com/v1/predictions"

@router.post("/enhanceimage")
async def enhance_image(request: ImageRequest):
    try:
        headers = {
            "Authorization": f"Token {REPLICATE_API_KEY}",
            "Content-Type": "application/json"
        }
        data = {
            "version": "real-esrgan",
            "input": {"image": request.image_url}
        }

        # Call Replicate API
        response = requests.post(REPLICATE_API_URL, json=data, headers=headers)

        if response.status_code != 200:
            raise HTTPException(status_code=500, detail=f"Replicate API error: {response.text}")

        # Extract enhanced image URL
        response_json = response.json()
        enhanced_image_url = response_json.get("output")

        if not enhanced_image_url:
            raise HTTPException(status_code=500, detail="Failed to retrieve enhanced image URL")

        return {"enhanced_image_url": enhanced_image_url}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
