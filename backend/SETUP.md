# Django Backend Setup Guide

## 1. Install Dependencies
```bash
cd backend
python -m venv .venv
.venv\Scripts\activate  # On Windows
pip install -r requirements.txt
```

## 2. Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

## 3. Create a Superuser (Test User)
```bash
python manage.py createsuperuser
# Username: testuser
# Password: testpass123
```

## 4. Start the Development Server
```bash
python manage.py runserver
# Server runs at http://127.0.0.1:8000
```

## 5. Test the API

### Login (POST /api/token)
```bash
curl -X POST http://127.0.0.1:8000/api/token \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "testpass123"}'
```

**Response:**
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGc..."
}
```

### Get User (GET /api/user)
```bash
curl -X GET http://127.0.0.1:8000/api/user \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

**Response:**
```json
{
  "id": 1,
  "username": "testuser",
  "email": "",
  "first_name": "",
  "last_name": ""
}
```

## Project Structure
```
backend/
├── config/              # Django settings & URLs
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── api/                 # API app
│   ├── views.py         # Token & User endpoints
│   ├── models.py
│   └── apps.py
├── manage.py
└── requirements.txt
```

## API Endpoints
- **POST /api/token** - Login with username & password → returns access & refresh tokens
- **GET /api/user** - Get current user (requires Bearer token)

## Frontend & Backend Communication
- Frontend (Vite): `http://localhost:5173`
- Backend (Django): `http://127.0.0.1:8000`
- CORS is enabled for both localhost addresses
- Frontend sends `Bearer token` in `Authorization` header