---
title: "AdalFlow"
description: "The open-source library powering AdaL CLI — auto-differentiable LLM pipelines with built-in optimization"
---

| Field | Value |
|-------|-------|
| **Developer** | [Sylph.AI](https://sylph.ai) |
| **Language** | Python |
| **License** | MIT |
| **GitHub** | [SylphAI-Inc/AdalFlow](https://github.com/SylphAI-Inc/AdalFlow) |
| **Stars** | 2.5K+ |
| **Used By** | [AdaL CLI](/agents/adal/) |

## Overview

AdalFlow is the open-source library that powers AdaL CLI. It provides auto-differentiable LLM pipelines — meaning you can define an agent workflow and the framework will automatically optimize prompts, tool selection, and reasoning chains.

Think of it as **PyTorch for LLM applications**: modular, composable, and optimizable.

## Key Features

- **Auto-optimization** — Built-in prompt tuning and pipeline optimization
- **Component architecture** — Generator, Retriever, Agent components that compose naturally
- **Multi-model support** — OpenAI, Anthropic, Google, local models
- **MCP integration** — Native Model Context Protocol support
- **Memory management** — Conversation history, compaction, session persistence
- **Skills system** — Reusable agent capabilities (SKILL.md format)

## Architecture

```
AdalFlow Stack
├── Components (Generator, Retriever, Agent)
├── Optimization (Auto-diff, prompt tuning)
├── Model Clients (OpenAI, Anthropic, Google, Groq)
├── Tools (MCP, file ops, web search)
└── Memory (conversation, vector store, compaction)
```

## When to Use AdalFlow

✅ Building a self-evolving coding agent
✅ Need automatic prompt optimization
✅ Want MCP-native tool integration
✅ Building production agents with multi-model support

## Quick Example

```python
from adalflow.core import Generator
from adalflow.components.model_client import OpenAIClient

generator = Generator(
    model_client=OpenAIClient(),
    model_kwargs={"model": "gpt-4o"},
    template="Answer the coding question: {{question}}"
)

response = generator(prompt_kwargs={"question": "How do I reverse a linked list?"})
```

---

*[Edit this page](https://github.com/SylphAI-Inc/coding_agent/edit/main/src/content/docs/sdks/adalflow.md)*
