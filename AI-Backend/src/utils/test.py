import torch

model_path = "src/models/ColorizeArtistic_gen.pth"

try:
    model = torch.load(model_path, map_location="cpu")  # Load model normally
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")
