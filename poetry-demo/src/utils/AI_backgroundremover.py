from src.services.cloudinery_retrive import get_image_url
from src.services.cloudinery_upload import upload_image
from fastapi import HTTPException
from rembg import remove
from PIL import Image
from io import BytesIO
from src.services.downloadImage import download_image
MODEL_PATH = "src/model/u2net.pth"



def remove_background(image):
    return remove(image)
  
async def process_image(public_id: str) -> str: 
  try: 
    image_url = get_image_url(public_id)
    image = download_image(image_url)
    Image = remove_background(image)
    new_image_url = await upload_image(public_id, Image)
    return new_image_url
  except Exception as e:
      raise HTTPException(status_code=500, detail=str(e))  
    
    








    