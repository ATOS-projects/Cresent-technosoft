from datetime import datetime
from typing import Optional
from motor.motor_asyncio import AsyncIOMotorDatabase
from app.domain.models.chat import ChatSession, ChatMessage


class ChatRepository:

    def __init__(self, db: AsyncIOMotorDatabase):
        self.collection = db["chats"]

    async def get_by_session_id(self, session_id: str) -> Optional[ChatSession]:
        document = await self.collection.find_one({"session_id": session_id})
        if not document:
            return None
        return ChatSession(**document)

    async def create_session(self, session: ChatSession):
        await self.collection.insert_one(session.model_dump())

    async def update_session(
        self,
        session_id: str,
        messages: list[ChatMessage],
        summary: Optional[str] = None,
    ):
        await self.collection.update_one(
            {"session_id": session_id},
            {
                "$set": {
                    "messages": [m.model_dump() for m in messages],
                    "summary": summary,
                    "updated_at": datetime.utcnow(),
                }
            },
        )