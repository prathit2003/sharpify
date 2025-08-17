
from fastapi import APIRouter, UploadFile, File, Form
from typing import Optional
from src.utils.formatchangeprocess import process_image

router = APIRouter()


@router.post("/changeformat")
async def change_format(file: UploadFile = File(...),
    format: str = Form(...)):
    contents = await file.read()
    processed_url = await process_image(contents,format)
    return {"url":processed_url}