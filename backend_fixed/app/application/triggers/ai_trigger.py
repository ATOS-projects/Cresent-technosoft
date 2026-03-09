from datetime import datetime
from app.domain.models.chat import ChatMessage
from app.infrastructure.ai.ai_client import AIClient


class AITrigger:

    def __init__(self):
        self.client = AIClient()

    async def generate_response(self, prompt: list[dict]) -> ChatMessage:
        output = await self.client.generate(prompt)

        return ChatMessage(
            role="assistant",
            content=output,
            timestamp=datetime.utcnow(),
        )