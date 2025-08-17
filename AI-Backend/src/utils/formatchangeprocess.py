from io import BytesIO
from PIL import Image
from fastapi import HTTPException
from src.services.s3_upload import upload_to_s3

def convert_format(image: Image.Image, output_format: str) -> bytes:
    img_bytes = BytesIO()
    
    if output_format.lower() == "jpeg":
        image.convert("RGB").save(img_bytes, format="JPEG", quality=95)
    elif output_format.lower() == "webp":
        image.convert("RGB").save(img_bytes, format="WEBP", quality=95)
    else:
        image.save(img_bytes, format=output_format.upper())

    return img_bytes.getvalue()

async def process_image(image_bytes: bytes, output_format: str) -> str:
    try:
        image = Image.open(BytesIO(image_bytes))
        original_format = image.format.lower()
        target_format = output_format.lower()

        if original_format == target_format:
            final_image_bytes = image_bytes
        else:
            final_image_bytes = convert_format(image, target_format)

        new_image_url = await upload_to_s3(final_image_bytes, target_format)
        return new_image_url

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Image processing failed: {str(e)}")
