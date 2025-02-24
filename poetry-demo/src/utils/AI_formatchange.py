from io import BytesIO
from src.services.cloudinery_retrive import get_image_url
from src.services.cloudinery_upload import upload_image
from fastapi import HTTPException
from PIL import Image
from src.services.downloadImage import download_image

def convert_format(image: Image.Image, output_format="JPEG") -> bytes:
    img_bytes = BytesIO()
    image.convert("RGB").save(img_bytes, format=output_format)
    return img_bytes.getvalue()


async def process_image(public_id: str) -> str: 
  try: 
    image_url = get_image_url(public_id)
    image = download_image(image_url)
    final_image = convert_format(image, "JPEG")
    new_image_url = await upload_image(public_id, final_image)
    return new_image_url
  except Exception as e:
      raise HTTPException(status_code=500, detail=str(e))  