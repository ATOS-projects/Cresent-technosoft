from datetime import datetime, timedelta
from jose import jwt, JWTError
from fastapi import Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from app.core.config import get_settings
from app.core.exceptions import ApplicationException


security = HTTPBearer()


def create_jwt(payload: dict):
    settings = get_settings()
    expire = datetime.utcnow() + timedelta(minutes=settings.jwt_exp_minutes)
    payload.update({"exp": expire})
    return jwt.encode(payload, settings.jwt_secret, algorithm=settings.jwt_algorithm)


def verify_jwt(
    credentials: HTTPAuthorizationCredentials = Depends(security),
):
    settings = get_settings()
    try:
        return jwt.decode(
            credentials.credentials,
            settings.jwt_secret,
            algorithms=[settings.jwt_algorithm],
        )
    except JWTError:
        raise ApplicationException("Invalid authentication token", 401)