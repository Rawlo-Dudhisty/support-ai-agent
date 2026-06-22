from typing import TypedDict

class TicketState(TypedDict):
    description: str

    category: str
    priority: str

    article: str

    reply: str