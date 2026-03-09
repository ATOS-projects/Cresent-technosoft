from fastapi import APIRouter
from datetime import datetime

router = APIRouter()


@router.get("/")
async def health():
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow(),
    }