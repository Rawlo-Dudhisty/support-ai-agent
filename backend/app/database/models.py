from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.orm import declarative_base
from datetime import datetime

Base = declarative_base()


class Ticket(Base):
    __tablename__ = "tickets"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    description = Column(Text)
    category = Column(String)
    priority = Column(String)
    status = Column(String)
    user_email = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True)
    email = Column(String, unique=True)
    password = Column(String)