from fastapi import APIRouter, HTTPException, UploadFile, File, Form
from src.utils.reducesizeprocess import process_image

router = APIRouter()

@router.post("/reducesize")
async def reduce_size(
    file: UploadFile = File(...),
    format: str = Form(...)
):
    try:

        contents = await file.read()
        if not contents:
            raise HTTPException(status_code=400, detail="No file content provided")

        if len(contents) > 5 * 1024 * 1024:
            raise HTTPException(status_code=413, detail="File too large")

        final_img_url = await process_image(contents, format)
        if not final_img_url:
            raise ValueError("Failed to retrieve secure URL from S3")

        return {"url": final_img_url}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")
