from app.agents.classifier_agent import classify_ticket
from app.agents.knowledge_agent import get_knowledge
from app.agents.reply_agent import generate_reply

ticket = "I paid for premium but my account is still not upgraded"

classification = classify_ticket(ticket)

category = classification["category"]

article = get_knowledge(category)

reply = generate_reply(category, article)

print("Classification:")
print(classification)

print("\nKnowledge:")
print(article)

print("\nReply:")
print(reply)