import requests
import cv2
import numpy as np
from io import BytesIO
from fastapi import HTTPException

def download_image(image_url: str) -> bytes:
    try:
        response = requests.get(image_url, timeout=10)
        response.raise_for_status()
        return response.content
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=400, detail=f"Failed to download image: {str(e)}")

def compress_with_opencv(image_bytes: bytes, format: str = "JPEG", quality: int = 70):
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_UNCHANGED)

    encode_param = [cv2.IMWRITE_JPEG_QUALITY, quality] if format.upper() == "JPEG" else [cv2.IMWRITE_PNG_COMPRESSION, 9]
    success, encoded_img = cv2.imencode(f".{format.lower()}", img, encode_param)

    if not success:
        raise ValueError("Image compression failed.")

    return BytesIO(encoded_img.tobytes())

async def process_image(image_url: str, format: str = "JPEG", quality: int = 50):
    image_bytes = download_image(image_url)
    compressed_image = compress_with_opencv(image_bytes, format=format, quality=quality)
    return compressed_image
