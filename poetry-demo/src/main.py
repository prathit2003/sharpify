from fastapi import FastAPI
from router import colorize, backgroundremove, enhance, formatchange, sizereducer

app = FastAPI()

app.include_router(colorize.router, prefix="/api/colorize")
app.include_router(backgroundremove.router, prefix="/api/backgroundremove")
app.include_router(enhance.router, prefix="/api/enhance")
app.include_router(formatchange.router, prefix="/api/formatchange")
app.include_router(sizereducer.router, prefix="/api/sizereducer")


@app.get("/")
def read_root():
    return {"message": "Welcome to FastAPI"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
