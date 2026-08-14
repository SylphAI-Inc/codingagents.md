---
title: OpenCode
description: "Provider-agnostic open-source terminal coding agent — bring your own model"
sidebar:
  order: 12
---

## Overview

| | |
|---|---|
| **Company** | SST |
| **Type** | Terminal CLI (TUI) |
| **Pricing** | Free — bring your own API key |
| **Protocol** | MCP |
| **Config Formats** | AGENTS.md |
| **License** | MIT |
| **Website** | [opencode.ai](https://opencode.ai) |

## What It Does

OpenCode is a terminal coding agent built around one idea: the harness should not be tied to a model vendor. You bring the provider — Anthropic, OpenAI, Google, or a local model — and the agent, the TUI, and the workflow stay the same.

It runs as a full terminal UI rather than a line-by-line REPL, with a client/server split that lets the agent run somewhere other than the terminal you are watching it from.

## Key Strengths

- **Provider-agnostic**: Switch models without switching tools or relearning the workflow
- **MIT licensed**: Fork it, audit it, run it in environments that forbid closed agents
- **Terminal-native TUI**: Built for people who live in the terminal, not a stripped-down chat box
- **Client/server split**: Drive a remotely running agent from a local terminal
- **Local models**: Works with self-hosted and open-weight models for privacy-bound work

## Trade-offs

- Quality tracks whichever model you point it at, so a weak provider produces a weak agent
- No first-party cloud agent or managed sandbox
- Bring-your-own-key means you handle cost control yourself

## Where to find skills for OpenCode

A skill is a `SKILL.md` file, so it does not belong to a model vendor any more than OpenCode does. The same skill folder keeps working when you switch providers.

The largest open catalogue is [atskills.one](https://atskills.one), with 60,000+ agent skills. See [@skills](/protocols/atskills/) for how referencing and saving work.

## Best For

- Teams that want one agent workflow across several model providers
- Privacy-sensitive work on local or self-hosted models
- Developers who want an open-source harness they can audit and modify

---
