from datetime import datetime
from typing import Optional
from motor.motor_asyncio import AsyncIOMotorDatabase
from app.domain.models.user import User


class UserRepository:

    def __init__(self, db: AsyncIOMotorDatabase):
        self.collection = db["users"]

    async def get_by_email(self, email: str) -> Optional[User]:
        document = await self.collection.find_one({"email": email})
        if not document:
            return None
        return User(**document)

    async def create_user(self, email: str) -> User:
        user = User(
            email=email,
            created_at=datetime.utcnow(),
        )
        await self.collection.insert_one(user.model_dump())
        return user