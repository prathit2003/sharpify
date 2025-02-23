from fastapi import APIRouter, WebSocket, WebSocketDisconnect
import asyncio
from utils.AI_colorize import process_image

router = APIRouter()

@router.websocket("/")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    
    try:
        while True:
            data = await websocket.receive_text()
            print(f"Received public_id: {data}")

            try:
                new_url = await process_image(data)  
                await websocket.send_text(new_url)
            except Exception as e:
                await websocket.send_text(f"Error processing image: {str(e)}")
    
    except WebSocketDisconnect:
        print("Client disconnected")
