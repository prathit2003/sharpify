# from src.services.cloudinery_retrive import get_image_url
# from src.services.cloudinery_upload import upload_image
# import requests
# from io import BytesIO
# from PIL import Image
# import torch
# from fastai.vision.learner import create_cnn_model
# from fastai.vision.models import resnet34
# from torchvision import transforms
# from fastapi import HTTPException
# import numpy as np

# def load_deoldify_model(model_path="src/models/ColorizeArtistic_gen.pth"):
#     model = create_cnn_model(resnet34, n_out=3, pretrained=False)
#     model.load_state_dict(torch.load(model_path, map_location=torch.device("cpu")))
#     model.eval()
#     return model

# def preprocess_image(image):
#     transform = transforms.Compose([
#         transforms.Resize((256, 256)),
#         transforms.ToTensor(),
#     ])
#     return transform(image).unsqueeze(0)  


# def postprocess_image(output_tensor):
#     output = output_tensor.squeeze(0).permute(1, 2, 0).numpy()
#     output = (output * 255).astype(np.uint8)
#     return Image.fromarray(output)

# async def process_image(public_id: str) -> str:
#     try:
        
#         image_url = get_image_url(public_id)

#         response = requests.get(image_url)
#         if response.status_code != 200:
#             raise HTTPException(status_code=400, detail="Failed to fetch image from Cloudinary")

#         img = Image.open(BytesIO(response.content)).convert("RGB")

        
#         model = load_deoldify_model()
#         img_tensor = preprocess_image(img)

#         with torch.no_grad():
#             output_tensor = model(img_tensor)

#         processed_img = postprocess_image(output_tensor)

#         img_byte_array = BytesIO()
#         processed_img.save(img_byte_array, format="PNG") 
#         img_byte_array.seek(0)

#         new_public_id = f"processed_{public_id}"
#         new_image_url = await upload_image(new_public_id, img_byte_array.getvalue())  

#         return new_image_url

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))
import sys
import os
import torch
from deoldify.visualize import get_image_colorizer

# Ensure DeOldify is in the Python path
sys.path.append(os.path.abspath("../deoldify"))

# Set parameters
MODEL_PATH = "../deoldify/models/ColorizeArtistic_gen.pth"  # Adjust path if needed
INPUT_IMAGE = "tests/colorize.jpg"  # Replace with your image path
OUTPUT_IMAGE = "tests/output_colorized.jpg"
RENDER_FACTOR = 35  # Increase for better quality

def load_model():
    """Load the DeOldify model."""
    colorizer = get_image_colorizer(artistic=True)  # Artistic model
    colorizer.model.load_state_dict(torch.load(MODEL_PATH, map_location="cpu"))
    colorizer.model.eval()  # Set model to evaluation mode
    return colorizer

def colorize_image(colorizer):
    """Colorizes the input black-and-white image."""
    colorizer.plot_transformed_image(
        INPUT_IMAGE,
        render_factor=RENDER_FACTOR,
        results_dir=".",
        save_name=OUTPUT_IMAGE
    )
    print(f"Colorized image saved as: {OUTPUT_IMAGE}")

def main():
    """Main function to run DeOldify."""
    print("Loading model...")
    colorizer = load_model()
    print("Model loaded successfully!")

    print("Colorizing image...")
    colorize_image(colorizer)

if __name__ == "__main__":
    main()
