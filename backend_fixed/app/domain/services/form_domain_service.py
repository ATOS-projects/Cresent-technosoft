class FormDomainService:

    @staticmethod
    def is_suspicious(payload: dict) -> bool:
        content = " ".join(str(v) for v in payload.values()).lower()

        spam_keywords = ["http://", "https://", "buy now", "free money"]

        for keyword in spam_keywords:
            if keyword in content:
                return True

        return False