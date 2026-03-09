import httpx
from tenacity import retry, stop_after_attempt, wait_exponential
from app.core.config import get_settings
from app.core.exceptions import ApplicationException


class AIClient:

    def __init__(self):
        self.settings = get_settings()

    @retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=1, max=5))
    async def generate(self, messages: list[dict]) -> str:
        headers = {
            "Authorization": f"Bearer {self.settings.ai_api_key}",
            "Content-Type": "application/json",
        }

        payload = {
            "model": "your-model-name",
            "messages": messages,
            "max_tokens": self.settings.max_output_tokens,
            "temperature": 0.7,
        }

        # FIX: Moved response parsing inside the `async with` block so the
        # connection is still open when we read the response body. Previously,
        # response.json() was called after the context manager closed, which
        # could raise or silently fail depending on httpx version. Keeping
        # everything inside the block also ensures retry logic covers parse errors.
        async with httpx.AsyncClient(timeout=15.0) as client:
            response = await client.post(
                self.settings.ai_base_url,
                headers=headers,
                json=payload,
            )

            if response.status_code != 200:
                raise ApplicationException("AI service unavailable", 503)

            data = response.json()

        try:
            return data["choices"][0]["message"]["content"]
        except Exception:
            raise ApplicationException("Malformed AI response", 500)
