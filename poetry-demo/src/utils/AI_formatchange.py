from services.cloudinery_retrive import get_image_url
from services.cloudinery_upload import upload_image
from fastapi import HTTPException

async def process_image(public_id: str) -> str: 
  try: 
    image_url = get_image_url(public_id)

    new_image_url = await upload_image(public_id)
    return new_image_url
  except Exception as e:
      raise HTTPException(status_code=500, detail=str(e))  