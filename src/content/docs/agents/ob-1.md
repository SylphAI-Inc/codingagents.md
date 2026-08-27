---
title: OB-1
description: "Free, multi-agent, self-correcting terminal coding agent — no account, no card, no API key"
sidebar:
  order: 24
---

## Overview

| | |
|---|---|
| **Company** | Overbrilliant |
| **Type** | Terminal CLI |
| **Pricing** | Free ($0) + Starter $9/mo, Pro $49/mo, Max $99/mo |
| **Protocol** | MCP |
| **Config Formats** | AGENTS.md |
| **License** | Apache-2.0 |
| **Website** | [overbrilliant.com](https://overbrilliant.com) |
| **GitHub** | [Overbrilliant/ob-1](https://github.com/Overbrilliant/ob-1) |
| **Install** | `npm i -g @overbrilliant/ob1`, then run `ob1` |

## What It Does

OB-1 is an open-source terminal coding agent from Overbrilliant. Its default path runs with no setup credentials: a free-models router is embedded in the CLI process and calls keyless third-party free tiers, so `ob1` answers the first message without an Overbrilliant account, a card, or an API key.

Beyond the free default it is provider-neutral. You can point it at your own keys (OpenRouter, OpenAI, Gemini, Groq), any OpenAI-compatible endpoint, or local models via Ollama, LM Studio, llama.cpp, or vLLM. An optional paid hosted tier routes frontier models through Overbrilliant's own server instead.

Work is fanned out rather than run in a single line: independent sub-tasks go to parallel read-only subagents, and harder changes escalate to Fusion, which generates N candidate solutions in separate copies of the project and keeps the one that passes the project's real checks. After a file-changing turn, a self-correction loop re-runs those checks and fixes failures — up to three rounds by default — rather than reporting success it has not verified.

## Key Strengths

- **Runs without credentials**: The in-process free-models router works over keyless free tiers, so there is nothing to sign up for
- **Bring your own model**: Keys, custom endpoints, and local/LAN models are first-class alternatives to the free path
- **Parallel subagents and Fusion**: Read-only subagents for independent work, best-of-N candidate selection for hard changes
- **Self-correction loop**: Re-runs the project's checks and iterates until they pass, up to three rounds
- **Persistent project memory**: Facts, revisions, relationships, and a graph stored in SQLite and inspectable from the CLI
- **No client telemetry**: Network traffic only goes to the model route or tool you configured

## Trade-offs

- The keyless free tier is a bootstrap path with variable quality and shared limits; your own keys give more predictable capacity
- Newly released free models reach free users after 30 days, while hosted plans get them immediately
- Autopilot with the OS sandbox off is the default posture, so approvals and sandboxing are opt-in
- The npm package requires Bun at runtime

## Configuration

OB-1 reads `AGENTS.md` for project instructions, and `/agents regen` refreshes its memory index in that file while leaving human-written notes intact.

MCP servers are configured with the same `mcpServers` shape as Claude Code — OB-1 reads `.ob1/.mcp.json`, `.mcp.json`, `.ob1/mcp.json`, or `mcp.json`, in that precedence order — so an existing `.mcp.json` works without a second file. stdio, Streamable HTTP, and SSE servers are all supported.

## Some useful Commands

| Command | Description |
|---------|-------------|
| `/models` | Choose the free-models route or a subscription-backed model |
| `/free` | Manage the free-models pool — keys, routing strategy, health |
| `/mode` | Switch between `auto`, `act`, and read-only `plan` |
| `/fusion` | Force best-of-N candidate generation for future turns |
| `/memory` | Inspect stored project memory and the relationship graph |
| `/map` | Inspect the ranked repository map |

## Best For

- Developers who want a working terminal agent without signing up or supplying an API key
- Tasks where the agent should verify its own work against real project checks
- Privacy-bound work on local or self-hosted models

---
