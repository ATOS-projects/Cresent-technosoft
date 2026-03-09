from motor.motor_asyncio import AsyncIOMotorDatabase
from app.domain.models.form import FormSubmission


class FormRepository:

    def __init__(self, db: AsyncIOMotorDatabase):
        self.collection = db["forms"]

    async def create_submission(self, form: FormSubmission):
        await self.collection.insert_one(form.model_dump())

    async def count_recent_by_ip(self, ip_address: str, seconds: int):
        from datetime import datetime, timedelta

        threshold = datetime.utcnow() - timedelta(seconds=seconds)

        return await self.collection.count_documents(
            {
                "ip_address": ip_address,
                "created_at": {"$gte": threshold},
            }
        )