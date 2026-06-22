from app.services.gemini_service import model

def generate_reply(
    ticket: str,
    category: str,
    article: str
):

    prompt = f"""
Customer Ticket:
{ticket}

Category:
{category}

Knowledge Base:
{article}

Generate a professional customer support response.
"""

    response = model.generate_content(prompt)

    return response.text