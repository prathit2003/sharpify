from io import BytesIO
from src.services.cloudinery_upload import upload_image
from fastapi import HTTPException
from PIL import Image
from src.services.downloadImage import download_image

def convert_format(image: Image.Image, output_format:str) -> bytes:
    img_bytes = BytesIO()
    image.convert("RGB").save(img_bytes, format=output_format)
    
    return img_bytes.getvalue()


async def process_image(image_url: str , typeofformat:str) -> str: 
  try: 
    image = download_image(image_url)
    final_image = convert_format(image, typeofformat)
    new_image_url = await upload_image(final_image , typeofformat)
    return new_image_url
  except Exception as e:
      raise HTTPException(status_code=500, detail=str(e))  
 