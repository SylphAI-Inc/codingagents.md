---
title: "Agent SDKs"
description: "The frameworks and SDKs powering AI coding agents — from AdalFlow to LangGraph, OpenAI Agents SDK, and beyond"
---

Agent SDKs are the **building blocks** behind every AI coding agent. While agents like Claude Code, Cursor, and AdaL CLI are the products developers interact with, SDKs are the libraries and frameworks used to **build** those agents.

## Coding-Focused SDKs

These SDKs are optimized for building AI agents that write, debug, and reason about code.

| SDK | By | Language | Key Strength | Used By |
|-----|----|----------|-------------|---------|
| [**AdalFlow**](/sdks/adalflow/) | Sylph.AI | Python | Self-evolving agents, auto-optimization | AdaL CLI |
| [**LangGraph**](/sdks/langgraph/) | LangChain | Python/JS | Graph-based state machines, complex workflows | Many custom agents |
| [**OpenAI Agents SDK**](/sdks/openai-agents-sdk/) | OpenAI | Python | Native OpenAI integration, simple API | Codex, custom agents |
| [**CrewAI**](/sdks/crewai/) | CrewAI | Python | Role-based multi-agent teams | Enterprise workflows |
| [**Microsoft Agent Framework**](/sdks/microsoft-agent-framework/) | Microsoft | Python/.NET | AutoGen + Semantic Kernel unified | Enterprise agents |
| [**Pydantic AI**](/sdks/pydantic-ai/) | Pydantic | Python | Type-safe, model-agnostic | Production APIs |
| [**Smolagents**](/sdks/smolagents/) | Hugging Face | Python | Lightweight, code-first agents | HF ecosystem |

## Non-Coding Agent SDKs

These frameworks target general-purpose AI agents beyond code — customer support, research, data analysis, and automation.

| SDK | By | Focus | Notes |
|-----|----|-------|-------|
| **Semantic Kernel** | Microsoft | Enterprise AI orchestration | Now part of Microsoft Agent Framework |
| **LlamaIndex Agents** | LlamaIndex | RAG + agent workflows | Strong on data retrieval |
| **Agno** | Agno | Lightweight multi-modal agents | Fast, model-agnostic |
| **Mastra** | Mastra | TypeScript-first agents | JS/TS ecosystem native |
| **Google ADK** | Google | Gemini-native agents | Deep Google Cloud integration |

## How to Choose

```
Need to build a coding agent?
├── Want auto-optimization? → AdalFlow
├── Need complex multi-step workflows? → LangGraph
├── Building on OpenAI models? → OpenAI Agents SDK
├── Want role-based agent teams? → CrewAI
├── Enterprise .NET stack? → Microsoft Agent Framework
├── Type-safe production API? → Pydantic AI
└── Lightweight + HF models? → Smolagents
```

## What's Next

We're expanding each SDK profile with:
- Architecture deep-dives
- Code examples
- Performance benchmarks
- Migration guides between frameworks

---

*[Edit this page](https://github.com/SylphAI-Inc/coding_agent/edit/main/src/content/docs/sdks/overview.md)*
