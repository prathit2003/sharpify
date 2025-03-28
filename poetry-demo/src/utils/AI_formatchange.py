# from io import BytesIO
# from src.services.cloudinery_retrive import get_image_url
# from src.services.cloudinery_upload import upload_image
# from fastapi import HTTPException
# from PIL import Image
# from src.services.downloadImage import download_image

# def convert_format(image: Image.Image, output_format="JPEG") -> bytes:
#     img_bytes = BytesIO()
#     image.convert("RGB").save(img_bytes, format=output_format)
#     return img_bytes.getvalue()


# async def process_image(public_id: str) -> str: 
#   try: 
#     image_url = get_image_url(public_id)
#     print("successfully got image url")
#     image = download_image(image_url)
#     final_image = convert_format(image, "JPEG")
#     new_image_url = await upload_image(public_id, final_image)
#     return new_image_url
#   except Exception as e:
#       raise HTTPException(status_code=500, detail=str(e))  
from PIL import Image

def change_image_format(input_path, output_path, format="PNG"):
    """
    Converts an image to a different format (JPEG, PNG, JPG).
    
    :param input_path: Path to the input image.
    :param output_path: Path to save the formatted image.
    :param format: Desired format (default PNG).
    """
    image = Image.open(input_path)
    image.save(output_path, format=format.upper())
    
    print(f"Image converted to {format} and saved as {output_path}")

change_image_format("tests\pexels-frank-cone-140140-2230796.jpg", "tests\output.png", format="PNG")  