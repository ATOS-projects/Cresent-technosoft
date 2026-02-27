import time
from app.infrastructure.cache.redis_client import get_redis
from app.core.config import get_settings
from app.core.exceptions import ApplicationException


async def enforce_rate_limit(key: str):
    redis = get_redis()
    settings = get_settings()

    if not redis:
        return

    current = int(time.time())
    window_key = f"rate:{key}:{current // 60}"

    count = await redis.incr(window_key)
    if count == 1:
        await redis.expire(window_key, 60)

    if count > settings.rate_limit_per_minute:
        raise ApplicationException("Rate limit exceeded", 429)