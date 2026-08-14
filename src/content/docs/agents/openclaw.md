---
title: OpenClaw
description: "Open-source personal AI agent that runs locally and reaches you through 29 messaging channels"
sidebar:
  order: 15
---

## Overview

| | |
|---|---|
| **Maintainer** | OpenClaw Foundation (non-profit) — originally by Peter Steinberger |
| **Type** | Local daemon + messaging gateway |
| **Pricing** | Free — open source, bring your own model |
| **Platforms** | macOS, Linux, Windows |
| **Protocol** | MCP, agent skills |
| **Website** | [openclaw.ai](https://openclaw.ai/) |

## What It Does

OpenClaw is a personal AI assistant that runs on your own machine and reaches you wherever you already are. It controls a browser, reads and writes files, runs shell commands, and keeps memory across conversations.

The scope is wider than a coding agent. It organizes an inbox, sends email, manages a calendar, and checks you in for flights, and it happens to be able to write code as well. If you want a harness built only for repositories, a terminal coding agent is the closer fit; if you want one assistant that handles the rest of the job around the code, this is the shape of it.

## Install

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Or through npm:

```bash
npm i -g openclaw
```

A source checkout with pnpm works too.

## Key Strengths

- **29 messaging channels**: WhatsApp, Telegram, Discord, Slack, iMessage, Signal, and more — the agent is not stuck in a terminal
- **Runs locally**: your machine, your files, your keys
- **Writes its own skills**: skills can be created through ordinary conversation rather than authored by hand
- **Persistent memory**: context carries across conversations instead of resetting each session
- **Real computer access**: browser control, filesystem, and shell
- **Community maintained**: a foundation rather than a single vendor, which matters for something holding this much access

## Trade-offs

- Broad rather than specialized — a dedicated coding agent will go deeper on large refactors
- An agent with your inbox, calendar, and shell is a large amount of trust in one process, so review what you grant it
- Self-hosted, so the deployment and updates are yours

## Where to Find Skills

OpenClaw can write its own skills, and it can also use ones other people wrote. The largest open catalogue is [atskills.one](https://atskills.one), with 60,000+ skills — see [@skills](/protocols/atskills/) for how referencing and saving work.

## Best For

- One assistant across chat, browser, and shell rather than a tool per surface
- Personal and operational automation that surrounds the coding work
- Local-first setups where the agent should not be someone else's cloud

---
