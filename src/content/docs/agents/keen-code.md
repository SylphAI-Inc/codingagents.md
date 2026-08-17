---
title: Keen Code
description: "Open-source, context-aware terminal coding agent written in Go"
sidebar:
  order: 23
---

## Overview

| | |
|---|---|
| **Maintainer** | Open source (mochow13) |
| **Type** | Terminal CLI (TUI) |
| **Pricing** | Free — bring your own API key; Codex also supports ChatGPT OAuth |
| **Protocol** | MCP |
| **Config Formats** | JSON |
| **Language** | Go |
| **License** | MIT |
| **Repository** | [github.com/mochow13/keen-code](https://github.com/mochow13/keen-code) |
| **Website** | [mochow13.github.io/keen-code](https://mochow13.github.io/keen-code/) |

## What It Does

Keen Code is a context-aware terminal coding agent focused on useful capabilities for everyday software engineering tasks without a heavy harness. It can inspect repositories, make hash-anchored edits, run commands, use skills and MCP servers, delegate work to subagents, and retain sessions across runs.

It supports Anthropic, OpenAI, Codex through ChatGPT OAuth, Gemini, DeepSeek, Kimi, GLM, MiniMax, OpenCode Go, Amazon Bedrock, and arbitrary OpenAI-compatible endpoints.

## Key Strengths

- **Turn Memory**: Multi-turn conversations default to lean context by retaining selected tool-interaction signals rather than every raw tool output. Users can control tool-output retention for future turns. See the [Turn Memory documentation](https://mochow13.github.io/keen-code/docs/turn-memory.html).
- **Skill-driven MCP**: Connected MCP servers generate Agent Skills and per-tool schema files. The model discovers and loads the relevant instructions on demand instead of receiving every MCP tool definition upfront. See the [skill-driven MCP documentation](https://mochow13.github.io/keen-code/docs/mcp-skills.html).
- **Hashline edits**: File reads and searches return line-number/hash anchors, allowing targeted edits that reject stale local anchors without requiring a file-wide hash.
- **Subagents**: Configurable child agents can use different models, permissions, and thinking effort, with concurrent delegation for multi-agent workflows.
- **Provider choice**: Switch among hosted providers, Bedrock, ChatGPT OAuth, and custom OpenAI-compatible endpoints.
- **Terminal-native and open source**: A Go-based TUI distributed under the MIT license.

## Trade-offs

- Bring-your-own-provider usage means model quality, privacy terms, and API cost depend on the selected provider.
- Keen runs on the user's machine and does not provide a first-party managed cloud sandbox.
- Subagents are separate model runs and can increase token usage and cost, especially when tasks run concurrently.
- Generated MCP skills reduce upfront tool-schema context, but the model may need to load the relevant skill and schema files before making a call.

## Configuration and Skills

Keen reads project instructions from `AGENTS.md`. Agent Skills can be installed at project, user, or bundled scopes using `SKILL.md` files. Provider configuration is stored in `~/.keen/configs.json`, while MCP servers are configured separately in `~/.keen/mcp/configs.json`.

The skills system is also how Keen exposes MCP servers: each connected server is represented by a generated `mcp:<server>` skill, and all calls go through a shared MCP tool after the relevant server instructions and tool schema are loaded.

## Best For

- Developers who want a lightweight, open-source terminal agent written in Go
- Multi-provider workflows that should not be tied to one model vendor
- Context-conscious multi-turn coding sessions with explicit control over tool-output retention
- MCP users who prefer on-demand, skill-based tool discovery over loading every tool schema upfront
- Teams experimenting with configurable subagents and multi-agent orchestration

---
