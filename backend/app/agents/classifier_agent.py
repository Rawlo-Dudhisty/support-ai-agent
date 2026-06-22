import random

def classify_ticket(description: str):

    description = description.lower()

    if any(word in description for word in ["payment", "billing", "refund", "premium"]):
        return {
            "category": "billing",
            "priority": "high"
        }

    if any(word in description for word in ["login", "password", "signin"]):
        return {
            "category": "authentication",
            "priority": "medium"
        }

    return {
        "category": "technical",
        "priority": random.choice(["low", "medium"])
    }