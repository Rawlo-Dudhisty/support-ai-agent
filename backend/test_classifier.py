from app.agents.classifier_agent import classify_ticket

result = classify_ticket(
    "I paid for premium but my account is still not upgraded"
)

print(result)