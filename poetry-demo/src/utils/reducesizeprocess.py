import cv2
import numpy as np
from io import BytesIO
from PIL import Image
from fastapi import HTTPException
from src.services.cloudinery_upload import upload_to_s3

def compress_with_opencv(image_bytes: bytes, format: str = "JPEG", quality: int = 70) -> BytesIO:
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_UNCHANGED)

    if img is None:
        raise ValueError("Invalid image data.")

    
    new_width = 800
    new_height = int((img.shape[0] / img.shape[1]) * new_width)
    img = cv2.resize(img, (new_width, new_height), interpolation=cv2.INTER_AREA)

    format = format.upper()
    if format == "JPEG":
        encode_param = [cv2.IMWRITE_JPEG_QUALITY, quality]
    elif format == "PNG":
        encode_param = [cv2.IMWRITE_PNG_COMPRESSION, 9]
    elif format == "WEBP":
        encode_param = [cv2.IMWRITE_WEBP_QUALITY, quality]
    else:
        raise ValueError("Unsupported format for compression.")

    success, encoded_img = cv2.imencode(f".{format.lower()}", img, encode_param)

    if not success:
        raise ValueError("Image compression failed.")

    return BytesIO(encoded_img.tobytes())

async def process_image(image_bytes: bytes, output_format: str, quality: int = 70) -> str:
    try:
        supported_formats = {"jpeg", "png", "webp"}
        output_format = output_format.lower()
        if output_format not in supported_formats:
            raise HTTPException(status_code=400, detail="Unsupported output format.")


        Image.open(BytesIO(image_bytes))

        compressed_io = compress_with_opencv(image_bytes, format=output_format, quality=quality)

        final_url = await upload_to_s3(compressed_io.getvalue(), output_format)
        return final_url

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Image processing failed: {str(e)}")
