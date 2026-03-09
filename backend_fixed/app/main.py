from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import get_settings
from app.core.logging import configure_logging
from app.core.exceptions import (
    application_exception_handler,
    generic_exception_handler,
    ApplicationException,
)
from app.infrastructure.database.mongo import (
    connect_to_mongo,
    close_mongo_connection,
    get_database,
    init_indexes,
)
from app.infrastructure.cache.redis_client import (
    connect_redis,
    close_redis,
)
from app.interfaces.api.routes_chat import router as chat_router
from app.interfaces.api.routes_form import router as form_router
from app.interfaces.api.routes_health import router as health_router


configure_logging()
settings = get_settings()

app = FastAPI(title="Production Backend", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.allowed_origin],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Authorization", "Content-Type"],
)

app.add_exception_handler(ApplicationException, application_exception_handler)
app.add_exception_handler(Exception, generic_exception_handler)


# FIX: Removed duplicate @app.on_event("startup") that appeared before app was
# defined (NameError), and merged init_indexes call into the single handler.
@app.on_event("startup")
async def startup():
    await connect_to_mongo()
    await connect_redis()

    db = get_database()
    await init_indexes(db)


@app.on_event("shutdown")
async def shutdown():
    await close_mongo_connection()
    await close_redis()


app.include_router(chat_router, prefix="/api/chat", tags=["chat"])
app.include_router(form_router, prefix="/api/forms", tags=["forms"])
app.include_router(health_router, prefix="/health", tags=["health"])
