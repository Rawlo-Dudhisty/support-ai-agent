from app.agents.classifier_agent import classify_ticket

def classifier_node(state):

    result = classify_ticket(
        state["description"]
    )

    state["category"] = result["category"]

    state["priority"] = result["priority"]

    return state

from app.agents.knowledge_agent import get_knowledge

def knowledge_node(state):

    state["article"] = get_knowledge(
        state["category"]
    )

    return state

from app.agents.reply_agent import generate_reply

def reply_node(state):

    state["reply"] = generate_reply(
        state["description"],
        state["category"],
        state["article"]
    )

    return state