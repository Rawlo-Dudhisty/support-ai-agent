from sqlalchemy import text
from app.database.database import SessionLocal


def save_ticket(
    description,
    category,
    priority,
    user_email
):

    db = SessionLocal()

    db.execute(
        text("""
        INSERT INTO tickets
        (
            title,
            description,
            category,
            priority,
            status,
            user_email
        )
        VALUES
        (
            :title,
            :description,
            :category,
            :priority,
            :status,
            :user_email
        )
        """),
        {
            "title": "Support Ticket",
            "description": description,
            "category": category,
            "priority": priority,
            "status": "Open",
            "user_email": user_email
        }
    )

    db.commit()
    db.close()