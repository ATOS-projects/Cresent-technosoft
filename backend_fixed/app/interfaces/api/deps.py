from fastapi import Depends
from app.infrastructure.database.mongo import get_database
from app.infrastructure.database.chat_repository import ChatRepository
from app.infrastructure.database.form_repository import FormRepository
from app.application.triggers.chat_trigger import ChatTrigger
from app.application.triggers.form_trigger import FormTrigger


def get_chat_repository():
    db = get_database()
    return ChatRepository(db)


def get_form_repository():
    db = get_database()
    return FormRepository(db)


def get_chat_trigger(
    repo: ChatRepository = Depends(get_chat_repository),
):
    return ChatTrigger(repo)


def get_form_trigger(
    repo: FormRepository = Depends(get_form_repository),
):
    return FormTrigger(repo)