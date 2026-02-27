from datetime import datetime
from pydantic import BaseModel, Field


class FormSubmission(BaseModel):
    form_type: str = Field(..., min_length=2, max_length=50)
    payload: dict
    ip_address: str
    created_at: datetime
    is_flagged: bool = False