from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, Field


class ChatMessage(BaseModel):
    role: str = Field(..., pattern="^(user|assistant|system)$")
    content: str = Field(..., min_length=1, max_length=8000)
    timestamp: datetime


class ChatSession(BaseModel):
    user_id: Optional[str] = None
    session_id: str
    messages: List[ChatMessage] = []
    summary: Optional[str] = None
    created_at: datetime
    updated_at: datetime