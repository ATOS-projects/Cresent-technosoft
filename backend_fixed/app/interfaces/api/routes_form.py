from fastapi import APIRouter, Depends, Request
from app.interfaces.api.schemas import FormRequest, GenericResponse
from app.interfaces.api.deps import get_form_trigger
from app.application.triggers.form_trigger import FormTrigger
from app.core.rate_limiter import enforce_rate_limit


router = APIRouter()


@router.post("/", response_model=GenericResponse)
async def submit_form(
    payload: FormRequest,
    request: Request,
    trigger: FormTrigger = Depends(get_form_trigger),
):
    client_ip = request.client.host

    await enforce_rate_limit(f"form:{client_ip}")

    await trigger.handle(
        form_type=payload.form_type,
        payload=payload.payload,
        ip=client_ip,
    )

    return GenericResponse(status="submitted")