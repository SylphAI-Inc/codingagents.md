---
title: "AdaL SDK & Headless"
description: "Embed AdaL's agent runtime in your own application, or drive it from CI with one flag"
sidebar:
  order: 1
---

| Field | Value |
|-------|-------|
| **Developer** | [SylphAI](https://adalagent.ai/?utm_source=codingagents.md&utm_medium=referral&utm_campaign=sdk_adal) |
| **Language** | Python 3.10+ |
| **Requires** | AdaL CLI with `--sdk-runtime`, `anyio>=4.0` |
| **Agent** | [AdaL CLI](/agents/adal/) |
| **Docs** | [docs.sylph.ai/sdk/overview](https://docs.sylph.ai/sdk/overview) |

There are two ways to run AdaL without a person at the keyboard. Headless mode is a flag on the CLI you already have. The SDK embeds the runtime in your own application.

## Headless Mode

Pass a prompt, get a result. No interactive UI.

```bash
adal -q "explain this codebase"
```

Piped input is treated as a query, so the agent slots into an ordinary shell pipeline:

```bash
cat bug_report.txt | adal
```

### Flags

| Flag | Purpose |
|------|---------|
| `-q, --query` | Run a prompt and trigger headless mode |
| `-o, --output` | `text` (default), `json`, or `stream-json` |
| `-m, --model` | Override the model |
| `-r, --resume` | Continue a previous session by ID |
| `-p, --prompt` | Override the system prompt |
| `--yolo` | Auto-approve every tool call |
| `--enabled-default-tools` | Whitelist tools, e.g. `"Read,Search"` |
| `--disabled-default-tools` | Blacklist tools, e.g. `"Bash"` |

The tool flags matter more than they look. An agent reviewing a pull request in CI has no business running `Bash`, and `--enabled-default-tools "Read,Search"` is how you say so.

### Output

`text` returns the final answer alone, which is what you want when piping to another command.

`json` returns the answer with metadata:

```json
{
  "success": true,
  "answer": "...",
  "model": "claude-sonnet-4-20250514",
  "session_id": "a1b2c3d4-...",
  "exit_code": 0
}
```

`stream-json` emits NDJSON — one object per line, with `tool_call`, `tool_result`, `answer`, `error`, and `complete` events. Use it when you want to show progress rather than wait for a result.

Exit code `0` means success. `1` covers authentication, model, and agent errors, so CI can branch on it.

Headless mode needs a prior interactive login; credentials are cached after that.

## SDK

The SDK embeds the full agent runtime in your own application.

```bash
# macOS, Linux, WSL
curl -fsSL https://adal.sylph.ai/install.sh | bash

# Windows PowerShell
irm https://adal.sylph.ai/install/windows | iex
```

Two entry points:

- **`query()`** — one-shot requests
- **`AdalAgentClient`** — a persistent client for multi-query sessions

What it gives you over shelling out to the CLI:

- Stream events as they happen rather than parsing stdout
- **Approve, deny, or modify any tool call programmatically** — your code decides what the agent is allowed to do, per call
- Resume sessions across client instances
- Orchestrate multi-step workflows

The permission hook is the reason to reach for the SDK. Headless mode gives you a blunt allow-list; the SDK lets you inspect a specific call and decide.

## Which One

Use **headless** for CI jobs, git hooks, log analysis, and anything that fits in a shell pipeline. It is one flag on a binary you already installed.

Use the **SDK** when the agent is part of a product — when you need per-call approval logic, event streams in your own UI, or sessions that outlive a process.

For parallel work, `adal worktree create` and `adal worktree remove` isolate concurrent agent tasks so they do not fight over the same checkout.

## Related

- [AdaL CLI](/agents/adal/) — the agent itself
- [Headless mode docs](https://docs.sylph.ai/features/headless-mode)
- [SDK docs](https://docs.sylph.ai/sdk/overview)
- [Cloud agents](https://docs.sylph.ai/cloud-agents/overview)
- [@skills](/protocols/atskills/) — giving the agent procedures it can load on demand

---
