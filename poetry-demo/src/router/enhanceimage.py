from fastapi import APIRouter, HTTPException, Request, UploadFile, File
from src.utils.enhanceprocess import process_enhance_image

router = APIRouter()

@router.post("/enhanceimage")
async def enhance_image(request: Request, file: UploadFile = File(...)):
    try:
        if not file:
            raise HTTPException(status_code=400, detail="No file uploaded.")

        if not file.filename.endswith(('.png', '.jpg', '.jpeg')):
            raise HTTPException(status_code=400, detail="Invalid file type. Only PNG, JPG, and JPEG are allowed.")
        
        upsampler = request.app.state.upsampler
        processed_url = await process_enhance_image(file, upsampler)

        if not processed_url:
            raise HTTPException(status_code=500, detail="Failed to process and enhance the image.")

        return {"url": processed_url}

    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")
