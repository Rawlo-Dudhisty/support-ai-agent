from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import tickets
from app.auth.auth import router as auth_router

from app.database.database import engine
from app.database.models import Base
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    tickets.router,
    prefix="/tickets",
    tags=["Tickets"]
)

app.include_router(
    auth_router,
    prefix="/auth",
    tags=["Authentication"]
)

@app.get("/")
def home():
    return {
        "message": "Enterprise Support AI Running"
    }