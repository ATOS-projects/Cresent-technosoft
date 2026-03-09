from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import get_settings

_client: AsyncIOMotorClient | None = None


async def connect_to_mongo():
    global _client
    settings = get_settings()

    _client = AsyncIOMotorClient(
        settings.mongo_uri,
        tls=True,
        maxPoolSize=100,
        minPoolSize=5,
    )


async def close_mongo_connection():
    global _client
    if _client:
        _client.close()


def get_database():
    if not _client:
        raise RuntimeError("Mongo client not initialized")
    settings = get_settings()
    return _client[settings.mongo_db_name]

async def init_indexes(db):
    await db["chats"].create_index("session_id")
    await db["chats"].create_index("user_id")
    await db["chats"].create_index("created_at")

    await db["forms"].create_index("form_type")
    await db["forms"].create_index("ip_address")
    await db["forms"].create_index("created_at")

    await db["users"].create_index("email", unique=True)