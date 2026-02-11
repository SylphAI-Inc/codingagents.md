---
title: "MCP — Model Context Protocol"
description: "Anthropic's open protocol for connecting AI models to external tools and data sources"
---

## What is MCP?

The **Model Context Protocol (MCP)** is an open standard by Anthropic for connecting AI models to external tools, data sources, and services. Think of it as **"USB-C for AI"** — one protocol that lets any AI model connect to any tool.

**Owner**: Anthropic
**Website**: [modelcontextprotocol.io](https://modelcontextprotocol.io)

## How It Works

```
AI Agent (Client)  ←→  MCP Protocol  ←→  MCP Server (Tool)
     Claude Code          JSON-RPC          File system
     Cursor                                 Database
     AdaL CLI                               API
     Gemini CLI                             Browser
```

MCP servers expose **tools** (functions the agent can call), **resources** (data the agent can read), and **prompts** (templates for common tasks).

## Agents That Support MCP

| Agent | MCP Support |
|-------|:-----------:|
| [Claude Code](/agents/claude-code/) | ✅ Native |
| [Cursor](/agents/cursor/) | ✅ |
| [Gemini CLI](/agents/gemini-cli/) | ✅ |
| [AdaL CLI](/agents/adal/) | ✅ |
| [Cline](/agents/cline/) | ✅ |
| Roo Code | ✅ |
| [Windsurf](/agents/windsurf/) | ✅ |

## Popular MCP Servers

- **Filesystem** — Read/write local files
- **GitHub** — Manage repos, issues, PRs
- **PostgreSQL** — Query databases
- **Brave Search** — Web search
- **Puppeteer** — Browser automation

## MCP vs ACP

| | MCP | ACP |
|---|---|---|
| **Connects** | Model ↔ Tools | Agent ↔ Editor |
| **Purpose** | Give models access to external capabilities | Let agents work in any IDE |
| **Analogy** | USB-C (one plug, many devices) | App Store (one agent, many editors) |

They're complementary — not competing. See [ACP protocol guide](/protocols/acp/) for more details.

---

