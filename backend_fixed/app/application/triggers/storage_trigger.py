from datetime import datetime
from typing import List
from app.domain.models.chat import ChatSession, ChatMessage
from app.infrastructure.database.chat_repository import ChatRepository


class StorageTrigger:

    def __init__(self, repository: ChatRepository):
        self.repository = repository

    async def persist_chat(
        self,
        session: ChatSession,
        updated_messages: List[ChatMessage],
        assistant_message: ChatMessage,
    ):
        # FIX: Removed re-appending of user_message and assistant_message here.
        # Previously this method received user_message and assistant_message
        # separately and appended them to session.messages — but chat_trigger
        # had already appended the user message via ChatDomainService, causing
        # duplicate entries. Now we receive the already-correct messages list
        # and only append the assistant reply before persisting.
        final_messages = updated_messages + [assistant_message]
        session.updated_at = datetime.utcnow()

        await self.repository.update_session(
            session.session_id,
            final_messages,
            session.summary,
        )
