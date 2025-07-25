from fastapi import FastAPI
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from src.router.formatchange import router as formatchange_router
from src.router.reducesize import router as reducesize_router
from src.router.removebackground import router as rmbg_router
from src.router.enhanceimage import router as enhance_image_router
from src.utils.model_loader import load_upsampler
app = FastAPI()
origins = ["http://localhost:3000"]  
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True, 
    allow_methods=["*"],  
    allow_headers=["*"], 
)

@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.upsampler = load_upsampler()
    yield 

app = FastAPI(lifespan=lifespan)
    
@app.get("/health")
def root():
    return {"message": "Hello World"}

app.include_router(formatchange_router, prefix="/api")
app.include_router(reducesize_router, prefix="/api")
app.include_router(rmbg_router, prefix="/api")
app.include_router(enhance_image_router, prefix="/api")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
