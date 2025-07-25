# src/utils/model_loader.py
import os
import torch
from basicsr.archs.rrdbnet_arch import RRDBNet
from realesrgan import RealESRGANer

def load_upsampler():
    current_dir = os.path.dirname(__file__)
    model_path = os.path.abspath(os.path.join(current_dir, "..", "weights", "RealESRGAN_x4plus.pth"))
    state_dict = torch.load(model_path, map_location=torch.device('cpu'))['params_ema']

    model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64,
                    num_block=23, num_grow_ch=32, scale=4)
    model.load_state_dict(state_dict, strict=True)

    return RealESRGANer(
        scale=2,
        model_path=model_path,
        model=model,
        tile=0,
        pre_pad=0,
        half=False,
    )
