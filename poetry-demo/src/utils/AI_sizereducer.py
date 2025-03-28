# from io import BytesIO
# from src.services.cloudinery_retrive import get_image_url
# from src.services.cloudinery_upload import upload_image
# from fastapi import HTTPException
# from PIL import Image
# from src.services.downloadImage import download_image

# def compress_image(image, quality=70):
#     img_bytes = BytesIO()
#     image.save(img_bytes, "JPEG", quality=quality)
#     return img_bytes.getvalue() 

# async def process_image(public_id: str) -> str: 
#   try: 
#     image_url = get_image_url(public_id)
#     image = download_image(image_url)
#     final_image = compress_image(image, quality=70)
#     new_image_url = await upload_image(public_id, final_image)
#     return new_image_url
#   except Exception as e:
#       raise HTTPException(status_code=500, detail=str(e))

from PIL import Image

def reduce_image_size(input_path, output_path, scale_factor=0.5):
    """
    Reduces the size of an image by the given scale factor.
    
    :param input_path: Path to the input image.
    :param output_path: Path to save the resized image.
    :param scale_factor: Factor by which to reduce the image size (default 0.5).
    """
    image = Image.open(input_path)
    new_size = (int(image.width * scale_factor), int(image.height * scale_factor))
    resized_image = image.resize(new_size, Image.LANCZOS)

    resized_image.save(output_path)
    
    print(f"Image size reduced and saved as {output_path}")

# Example Usage
reduce_image_size("tests\pexels-frank-cone-140140-2230796.jpg", "reduced_output.jpg", scale_factor=0.5)
 