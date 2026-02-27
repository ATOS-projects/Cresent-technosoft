from fastapi import Request
from fastapi.responses import JSONResponse
from fastapi import status
import structlog

logger = structlog.get_logger()


class ApplicationException(Exception):
    def __init__(self, message: str, status_code: int = 400):
        self.message = message
        self.status_code = status_code


async def application_exception_handler(request: Request, exc: ApplicationException):
    logger.warning("application_error", path=request.url.path, detail=exc.message)
    return JSONResponse(
        status_code=exc.status_code,
        content={"error": exc.message},
    )


async def generic_exception_handler(request: Request, exc: Exception):
    logger.error("unhandled_exception", path=request.url.path, error=str(exc))
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={"error": "Internal server error"},
    )