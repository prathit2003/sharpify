from fastapi import Request, HTTPException
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse
import jwt
from jwt import PyJWTError
from dotenv import load_dotenv
import os

load_dotenv()

SECRET_KEY = os.getenv("NEXTAUTH_SECRET")
ALGORITHM = "HS256"


PROTECTED_PREFIXES = ["/api/removebackground", "/api/reducesize", "/api/enhanceimage"]

class JWTAuthMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        path = request.url.path
       
        if any(path.startswith(prefix) for prefix in PROTECTED_PREFIXES):
            auth_header = request.headers.get("Authorization")
            if not auth_header or not auth_header.startswith("Bearer "):
                return JSONResponse(status_code=401, content={"detail": "Authorization header missing or invalid"})
            token = auth_header.split(" ")[1]

            try:
                payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
                request.state.user = payload
            except PyJWTError:
                return JSONResponse(status_code=403, content={"detail": "Invalid or expired token"})

        return await call_next(request)
