from datetime import datetime
from app.domain.models.form import FormSubmission
from app.domain.services.form_domain_service import FormDomainService
from app.infrastructure.database.form_repository import FormRepository
from app.core.exceptions import ApplicationException


class FormTrigger:

    def __init__(self, repository: FormRepository):
        self.repository = repository

    async def handle(self, form_type: str, payload: dict, ip: str):

        if FormDomainService.is_suspicious(payload):
            raise ApplicationException("Suspicious submission", 400)

        recent = await self.repository.count_recent_by_ip(ip, 60)

        if recent > 5:
            raise ApplicationException("Too many submissions", 429)

        form = FormSubmission(
            form_type=form_type,
            payload=payload,
            ip_address=ip,
            created_at=datetime.utcnow(),
        )

        await self.repository.create_submission(form)

        return {"status": "submitted"}