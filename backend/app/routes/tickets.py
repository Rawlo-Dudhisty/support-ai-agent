from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from app.langgraph.support_graph import support_graph
from app.services.ticket_service import save_ticket

from app.auth.dependencies import get_current_user

from sqlalchemy import text
from app.database.database import SessionLocal

router = APIRouter()


class TicketRequest(BaseModel):
    description: str


class StatusUpdate(BaseModel):
    status: str


@router.get("/")
def get_all_tickets(
    current_user=Depends(get_current_user)
):
    db = SessionLocal()

    result = db.execute(
        text("""
        SELECT *
        FROM tickets
        WHERE user_email = :user_email
        ORDER BY id DESC
        """),
        {
            "user_email": current_user
        }
    )

    tickets = []

    for row in result:
        tickets.append({
            "id": row.id,
            "title": row.title,
            "description": row.description,
            "category": row.category,
            "priority": row.priority,
            "status": row.status,
            "created_at": row.created_at
        })

    db.close()

    return tickets


@router.post("/process")
def process_ticket(
    ticket: TicketRequest,
    current_user=Depends(get_current_user)
):

    if not ticket.description.strip():
        raise HTTPException(
            status_code=400,
            detail="Ticket description cannot be empty"
        )

    result = support_graph.invoke({
        "description": ticket.description
    })

    save_ticket(
        ticket.description,
        result["category"],
        result["priority"],
        current_user
    )

    return {
        "classification": {
            "category": result["category"],
            "priority": result["priority"]
        },
        "knowledge": result["article"],
        "reply": result["reply"]
    }


@router.put("/{ticket_id}/status")
def update_ticket_status(
    ticket_id: int,
    status_data: StatusUpdate,
    current_user=Depends(get_current_user)
):
    db = SessionLocal()

    db.execute(
        text("""
        UPDATE tickets
        SET status = :status
        WHERE id = :ticket_id
        AND user_email = :user_email
        """),
        {
            "status": status_data.status,
            "ticket_id": ticket_id,
            "user_email": current_user
        }
    )

    db.commit()
    db.close()

    return {
        "message": "Ticket status updated successfully"
    }