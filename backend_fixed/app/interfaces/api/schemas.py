from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    session_id: str = Field(..., min_length=4, max_length=100)
    message: str = Field(..., min_length=1, max_length=8000)


class ChatResponse(BaseModel):
    reply: str


class FormRequest(BaseModel):
    form_type: str
    payload: dict


class GenericResponse(BaseModel):
    status: str