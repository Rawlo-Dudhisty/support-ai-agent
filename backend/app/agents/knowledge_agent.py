from sqlalchemy import text
from app.database.database import SessionLocal

def get_knowledge(category: str):

    db = SessionLocal()

    result = db.execute(
        text(
            """
            SELECT article
            FROM knowledge_base
            WHERE category = :category
            LIMIT 1
            """
        ),
        {"category": category}
    )

    row = result.fetchone()

    db.close()

    if row:
        return row[0]

    return "No knowledge article found."