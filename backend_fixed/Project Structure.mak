backend/
│
├── app/
│   ├── main.py
│   │
│   ├── core/
│   │   ├── config.py
│   │   ├── logging.py
│   │   ├── security.py
│   │   ├── rate_limiter.py
│   │   └── exceptions.py
│   │
│   ├── domain/
│   │   ├── models/
│   │   │   ├── chat.py
│   │   │   ├── user.py
│   │   │   └── form.py
│   │   └── services/
│   │       ├── chat_domain_service.py
│   │       └── form_domain_service.py
│   │
│   ├── application/
│   │   └── triggers/
│   │       ├── chat_trigger.py
│   │       ├── ai_trigger.py
│   │       ├── form_trigger.py
│   │       └── storage_trigger.py
│   │
│   ├── infrastructure/
│   │   ├── database/
│   │   │   ├── mongo.py
│   │   │   ├── chat_repository.py
│   │   │   ├── user_repository.py
│   │   │   └── form_repository.py
│   │   ├── ai/
│   │   │   ├── ai_client.py
│   │   │   └── prompt_builder.py
│   │   └── cache/
│   │       └── redis_client.py
│   │
│   ├── interfaces/
│   │   └── api/
│   │       ├── deps.py
│   │       ├── routes_chat.py
│   │       ├── routes_form.py
│   │       └── routes_health.py
│
├── requirements.txt
├── .env.example
└── logging.yaml