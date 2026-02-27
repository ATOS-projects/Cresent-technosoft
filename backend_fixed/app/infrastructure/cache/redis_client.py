import redis.asyncio as redis
from app.core.config import get_settings

_redis: redis.Redis | None = None


async def connect_redis():
    global _redis
    settings = get_settings()
    if settings.redis_url:
        _redis = redis.from_url(settings.redis_url, decode_responses=True)


async def close_redis():
    global _redis
    if _redis:
        await _redis.close()


def get_redis():
    return _redis