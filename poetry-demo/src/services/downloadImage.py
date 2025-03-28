# import requests
# from PIL import Image
# from io import BytesIO

# def download_image(image_url):
#     headers = {
#         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
#     }
#     response = requests.get(image_url, headers=headers)
    
#     print(f"⚡ Response Status Code: {response.status_code}")
    
#     if response.status_code == 200:
#         return Image.open(BytesIO(response.content))
#     else:
#         print(f"❌ Failed to download image. Response: {response.text}")
#         raise Exception("Failed to download image")
import requests

def download_image(image_url, save_path):
    """
    Downloads an image from the given URL and saves it to a file.
    
    :param image_url: URL of the image to download.
    :param save_path: Local path to save the downloaded image.
    """
    response = requests.get(image_url, stream=True)

    if response.status_code == 200:
        with open(save_path, "wb") as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)
        print(f"Image downloaded and saved as {save_path}")
    else:
        print(f"Failed to download image. HTTP Status Code: {response.status_code}")

# Example Usage
image_url = "https://res.cloudinary.com/dyfs7xmgx/image/upload/v1739694406/uploaded_images/xbz45ehpo3jbdwezldwu.jpg"  
download_image(image_url, "downloaded_image.jpg")
