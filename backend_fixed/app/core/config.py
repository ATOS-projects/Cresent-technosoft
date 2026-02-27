from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    app_env: str
    mongo_uri: str
    mongo_db_name: str

    redis_url: str | None = None

    ai_api_key: str
    ai_base_url: str

    jwt_secret: str
    jwt_algorithm: str = "HS256"
    jwt_exp_minutes: int = 30

    allowed_origin: str

    rate_limit_per_minute: int = 20
    max_context_messages: int = 8
    max_input_tokens: int = 3000
    max_output_tokens: int = 800

    class Config:
        env_file = ".env"
        case_sensitive = False


@lru_cache
def get_settings() -> Settings:
    return Settings()