---
title: "ACP — Agent Client Protocol"
description: "Zed and JetBrains' open standard for AI coding agents to integrate with any editor"
---

## What is ACP?

The **Agent Client Protocol (ACP)** is an open standard by Zed Industries and JetBrains that enables any AI coding agent to integrate seamlessly with any editing environment.

**Owner**: Zed Industries + JetBrains
**Registry**: [ACP Registry](https://zed.dev/acp)

## How It Works

```
Editor (Client)    ←→  ACP Protocol  ←→  AI Agent (Server)
     Zed                                     Amp
     JetBrains                               Custom agents
```

Unlike MCP (which connects models to tools), ACP connects **agents to editors**.

## Agents in the ACP Registry

| Agent | ACP Support |
|-------|:-----------:|
| Amp | ✅ Native |
| JetBrains AI | ✅ |
| Community agents | Growing |

## How to Register Your Agent

1. Implement the ACP protocol
2. Open a PR to the [ACP Registry repo](https://github.com/zed-industries/acp-registry)
3. Once merged, your agent appears in all ACP-compatible editors

## ACP vs MCP

| | ACP | MCP |
|---|---|---|
| **Focus** | Agent ↔ Editor | Model ↔ Tools |
| **You register** | Your agent | Your tool server |
| **Initiated by** | Zed + JetBrains | Anthropic |

An agent can support **both** protocols.

---

*[Edit this page](https://github.com/SylphAI-Inc/coding_agent/edit/main/src/content/docs/protocols/acp.md) · Managed by [Sylph.AI](https://sylph.ai)*
