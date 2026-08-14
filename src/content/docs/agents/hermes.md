---
title: Hermes Agent
description: "Nous Research's self-improving agent — persistent memory, autonomous skill creation, runs as a daemon on your own box"
sidebar:
  order: 14
---

## Overview

| | |
|---|---|
| **Company** | Nous Research |
| **Type** | Terminal TUI + messaging gateway + desktop |
| **Pricing** | Free — open source, bring your own model |
| **License** | MIT |
| **Protocol** | MCP, ACP, agent skills |
| **Config Formats** | AGENTS.md, SKILL.md |
| **Repository** | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) |
| **Website** | [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/) |

## What It Does

Hermes is a self-hosted agent built around a closed learning loop. Where most agents start each session from nothing but your repo, Hermes keeps what it learns: it curates its own memory, searches its past conversations, and builds a model of how you work across sessions.

It is not tied to a terminal. Hermes runs as a persistent daemon on a VPS, a GPU box, or serverless infrastructure, and you talk to it from Telegram, Discord, Slack, WhatsApp, Signal, or the CLI through a single gateway process.

## The Learning Loop

This is the part worth paying attention to, and it is unusual.

- **Autonomous skill creation**: after a complex task, Hermes writes the procedure down as a skill — the steps, the pitfalls it hit, and how to verify the result
- **Skills that improve during use**: a skill is revised as the agent works with it, rather than frozen at the moment it was written
- **Memory with nudges**: the agent is periodically prompted to persist what matters instead of losing it at the end of a session
- **Cross-session recall**: full-text search over past conversations, with summarization for retrieval

The premise matches the case for skills generally. The first run of a new task is expensive because the agent has to work everything out; the second should not be. A skill is where that first run gets stored.

## Key Strengths

- **Model-agnostic**: Nous Portal, OpenRouter, NVIDIA NIM, z.ai/GLM, Moonshot, MiniMax, Hugging Face, OpenAI, or your own endpoint — switch with `hermes model`
- **Lives where you do**: 16+ messaging platforms from one gateway, with voice memo transcription and continuity across them
- **Runs anywhere**: a $5 VPS is enough; it costs nearly nothing when idle on serverless
- **Real terminal interface**: multiline editing, slash-command autocomplete, interrupt-and-redirect, streaming tool output
- **Scheduled work**: cron tasks, so the agent does things without being asked

## Trade-offs

- Self-hosting is the model, so you own the deployment, the keys, and the upgrades
- Broader in scope than a pure coding agent — strong at long-running personal and operational work, less specialized than a harness built only for repositories
- The learning loop needs time to be worth anything; on day one it knows nothing about you

## Where to Find Skills

Hermes writes its own skills, but it does not have to start from a blank file. The largest open catalogue is [atskills.one](https://atskills.one), with 60,000+ skills — see [@skills](/protocols/atskills/) for how referencing and saving work.

## Best For

- Long-running assistants that should get better at your work over time
- Teams that want the agent reachable from chat rather than only a terminal
- Self-hosted and privacy-bound setups
- Anyone who wants the agent to capture procedures instead of rediscovering them

---
