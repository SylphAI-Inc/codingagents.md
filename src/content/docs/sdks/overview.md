---
title: "Agent SDKs"
description: "The frameworks and SDKs purpose-built for coding agents — from AdalFlow to OpenHands, SWE-agent, and beyond"
---

Agent SDKs are the **engines** behind AI coding agents. This section focuses on SDKs **purpose-built for coding** — frameworks designed to help LLMs read, write, debug, and ship code.

## Coding Agent SDKs

These SDKs are specifically built for **software engineering agents** — they understand codebases, file systems, git, and development workflows.

| SDK | By | Focus | Powers |
|-----|----|-------|--------|
| [**AdalFlow**](/sdks/adalflow/) | SylphAI | Self-evolving agents, auto-optimization | AdaL CLI |
| [**OpenHands SDK**](/sdks/openhands/) | OpenHands | Cloud coding agent platform | OpenHands (formerly OpenDevin) |
| [**SWE-agent**](/sdks/swe-agent/) | Princeton NLP | Autonomous issue fixing | SWE-bench SOTA |
| [**Aider**](/sdks/aider/) | Paul Gauthier | Terminal pair programming | Aider CLI |

### What makes a coding agent SDK different?

Unlike general-purpose agent frameworks, coding agent SDKs provide:

- **Code-aware context** — AST parsing, repo maps, dependency graphs
- **Edit formats** — Structured diff/patch generation (search-replace, unified diff)
- **Sandbox execution** — Safe code execution in containers
- **Git integration** — Branch, commit, PR workflows built-in
- **SWE-bench tested** — Validated on real GitHub issues

## General-Purpose Agent Frameworks

These are **general agent frameworks** that can be used to build coding agents, but aren't coding-specific.

| Framework | By | Key Strength | Best For |
|-----------|----|-------------|----------|
| [**LangGraph**](/sdks/langgraph/) | LangChain | Graph-based state machines | Complex multi-step workflows |
| [**OpenAI Agents SDK**](/sdks/openai-agents-sdk/) | OpenAI | Native OpenAI integration | OpenAI-only agents |
| [**CrewAI**](/sdks/crewai/) | CrewAI | Role-based multi-agent teams | Team-based automation |
| [**Microsoft Agent Framework**](/sdks/microsoft-agent-framework/) | Microsoft | AutoGen + Semantic Kernel | Enterprise .NET |
| [**Pydantic AI**](/sdks/pydantic-ai/) | Pydantic | Type-safe, model-agnostic | Production APIs |
| [**Smolagents**](/sdks/smolagents/) | Hugging Face | Lightweight, code-first | Prototyping |
| [**Strands Agents**](/sdks/strands-agents/) | AWS | Model-driven, provider-agnostic | Multi-agent systems |

## Non-Coding Agent SDKs (Brief)

| SDK | By | Focus |
|-----|----|-------|
| **Semantic Kernel** | Microsoft | Enterprise AI orchestration |
| **LlamaIndex Agents** | LlamaIndex | RAG + agent workflows |
| **Agno** | Agno | Lightweight multi-modal agents |
| **Mastra** | Mastra | TypeScript-first agents |
| **Google ADK** | Google | Gemini-native agents |

## How to Choose

```
Building a coding agent?
├── Want self-evolving + auto-optimization? → AdalFlow
├── Need cloud sandbox execution? → OpenHands SDK
├── Fixing GitHub issues autonomously? → SWE-agent
├── Terminal pair programming? → Aider
│
├── Need general agent orchestration?
│   ├── Complex graph workflows → LangGraph
│   ├── OpenAI models only → OpenAI Agents SDK
│   ├── Multi-agent teams → CrewAI
│   └── Enterprise .NET → Microsoft Agent Framework
│
└── Lightweight / research → Smolagents or Pydantic AI
```

---

