import requests
from io import BytesIO
from PIL import Image
from fastapi import HTTPException

def download_image(image_url: str) -> Image.Image:
    
    try:
        response = requests.get(image_url, timeout=10)
        response.raise_for_status() 
        print(BytesIO(response.content))
        return Image.open(BytesIO(response.content))
    
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=400, detail=f"Failed to download image: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

