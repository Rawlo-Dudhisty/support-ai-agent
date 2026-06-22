from app.langgraph.support_graph import support_graph

result = support_graph.invoke({
    "description":
    "I paid for premium but account not upgraded"
})

print(result)