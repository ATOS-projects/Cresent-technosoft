from datetime import datetime
from app.domain.models.chat import ChatSession, ChatMessage
from app.domain.services.chat_domain_service import ChatDomainService
from app.infrastructure.database.chat_repository import ChatRepository
from app.application.triggers.storage_trigger import StorageTrigger
from app.application.triggers.flow_engine import get_bot_response, MAIN_MENU
from app.core.config import get_settings
from app.core.exceptions import ApplicationException


class ChatTrigger:

    def __init__(self, repository: ChatRepository):
        self.repository = repository
        self.storage_trigger = StorageTrigger(repository)
        self.settings = get_settings()

    async def handle(self, session_id: str, user_input: str):

        if not user_input.strip():
            raise ApplicationException("Empty message", 400)

        session = await self.repository.get_by_session_id(session_id)

        if not session:
            # Brand new session — greet with main menu
            session = ChatSession(
                session_id=session_id,
                messages=[],
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow(),
            )
            await self.repository.create_session(session)
            reply = MAIN_MENU
            state = "main"
        else:
            # Get guided flow response based on user input + session history
            reply, state = get_bot_response(user_input, session.messages)

        user_message = ChatMessage(
            role="user",
            content=user_input,
            timestamp=datetime.utcnow(),
        )

        # Store state as a hidden assistant marker so flow_engine can track it
        state_marker = ChatMessage(
            role="assistant",
            content=f"__state__:{state}",
            timestamp=datetime.utcnow(),
        )

        assistant_message = ChatMessage(
            role="assistant",
            content=reply,
            timestamp=datetime.utcnow(),
        )

        updated_messages = ChatDomainService.append_message(
            list(session.messages),
            user_message,
            self.settings.max_context_messages,
        )
        updated_messages.append(state_marker)

        await self.storage_trigger.persist_chat(
            session,
            updated_messages,
            assistant_message,
        )

        return reply
