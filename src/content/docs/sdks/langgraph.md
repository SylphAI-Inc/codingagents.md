---
title: "LangGraph"
description: "Graph-based framework for building stateful, multi-step AI agent workflows"
---

| Field | Value |
|-------|-------|
| **Developer** | LangChain |
| **Language** | Python, JavaScript |
| **License** | MIT |
| **GitHub** | [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) |
| **Stars** | 10K+ |

## Overview

LangGraph is LangChain's framework for building stateful AI agents using a graph-based execution model. Each node in the graph represents an agent step (LLM call, tool use, decision), and edges define the flow between steps.

It's the most popular choice for complex, multi-step agent workflows where you need fine-grained control over execution flow.

## Key Features

- **Graph-based execution** — Define agent workflows as directed graphs
- **State management** — Built-in persistent state across steps
- **Checkpointing** — Save and resume agent execution
- **Human-in-the-loop** — Built-in approval/review steps
- **Multi-agent** — Orchestrate multiple agents in a single graph
- **LangSmith integration** — Observability and debugging

## When to Use LangGraph

✅ Complex multi-step agent workflows
✅ Need fine-grained control over execution
✅ Building multi-agent systems with handoffs
✅ Want built-in observability via LangSmith

❌ Simple single-step LLM calls (overkill)
❌ Want minimal boilerplate

---

*[Edit this page](https://github.com/SylphAI-Inc/coding_agent/edit/main/src/content/docs/sdks/langgraph.md)*
