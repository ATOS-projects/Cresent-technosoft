from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr


class User(BaseModel):
    email: EmailStr
    role: str = "user"
    created_at: datetime
    metadata: Optional[dict] = None