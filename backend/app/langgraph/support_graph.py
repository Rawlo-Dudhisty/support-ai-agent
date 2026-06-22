from langgraph.graph import StateGraph

from app.langgraph.state import TicketState

from app.langgraph.nodes import (
    classifier_node,
    knowledge_node,
    reply_node
)

graph = StateGraph(TicketState)

graph.add_node(
    "classifier",
    classifier_node
)

graph.add_node(
    "knowledge",
    knowledge_node
)

graph.add_node(
    "reply",
    reply_node
)

graph.set_entry_point(
    "classifier"
)

graph.add_edge(
    "classifier",
    "knowledge"
)

graph.add_edge(
    "knowledge",
    "reply"
)

support_graph = graph.compile()