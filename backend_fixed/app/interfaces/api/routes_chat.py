from fastapi import APIRouter, Depends, Request
from app.interfaces.api.schemas import ChatRequest, ChatResponse
from app.interfaces.api.deps import get_chat_trigger
from app.application.triggers.chat_trigger import ChatTrigger
from app.core.rate_limiter import enforce_rate_limit


router = APIRouter()


@router.post("/", response_model=ChatResponse)
async def chat_endpoint(
    payload: ChatRequest,
    request: Request,
    trigger: ChatTrigger = Depends(get_chat_trigger),
):
    client_ip = request.client.host

    # Rate limiting per IP
    await enforce_rate_limit(f"chat:{client_ip}")

    reply = await trigger.handle(
        session_id=payload.session_id,
        user_input=payload.message,
    )

    return ChatResponse(reply=reply)