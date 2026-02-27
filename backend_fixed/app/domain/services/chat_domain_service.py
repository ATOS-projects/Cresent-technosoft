from datetime import datetime
from typing import List
from app.domain.models.chat import ChatMessage


class ChatDomainService:

    @staticmethod
    def append_message(messages: List[ChatMessage], new_message: ChatMessage, max_messages: int):
        messages.append(new_message)

        if len(messages) > max_messages:
            messages = messages[-max_messages:]

        return messages

    @staticmethod
    def update_timestamp():
        return datetime.utcnow()