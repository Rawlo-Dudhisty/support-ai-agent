from app.agents.reply_agent import generate_reply

reply = generate_reply(
    "billing",
    "Ask customer to logout and login again."
)

print(reply)