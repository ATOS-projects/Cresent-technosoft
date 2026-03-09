from app.core.config import get_settings
from app.domain.models.chat import ChatMessage


class PromptBuilder:

    @staticmethod
    def build(messages: list[ChatMessage], summary: str | None = None):
        settings = get_settings()

        context = messages[-settings.max_context_messages:]

        formatted = []

        if summary:
            formatted.append({
                "role": "system",
                "content": f"Previous conversation summary: {summary}"
            })

        for msg in context:
            formatted.append({
                "role": msg.role,
                "content": msg.content
            })

        return formatted