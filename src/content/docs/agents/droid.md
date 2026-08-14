---
title: Droid (Factory)
description: "Factory's enterprise terminal agent — specialized droids, model routing, headless CI runs"
sidebar:
  order: 16
---

## Overview

| | |
|---|---|
| **Company** | Factory |
| **Type** | Terminal CLI + IDE integrations |
| **Pricing** | Commercial, with a free tier |
| **Protocol** | MCP |
| **Config Formats** | AGENTS.md |
| **Website** | [factory.ai](https://factory.ai) |

## What It Does

Droid is Factory's terminal-native coding agent, aimed at engineering organizations rather than individual developers. It holds the top score on Terminal-Bench at 58.75%, a benchmark built specifically for agentic terminal work rather than isolated code generation.

Instead of one agent doing everything, Factory ships specialized droids for different jobs: Code Droid implements, Knowledge Droid handles research and documentation, Reliability Droid triages production incidents, and Product Droid manages backlogs and writes specs.

## Key Strengths

- **Model-agnostic**: multi-model routing, with `/model` to switch providers mid-session
- **Specialized droids**: the agent for incident triage is not the agent for writing a feature
- **Headless CI execution**: run it in a pipeline, not just interactively
- **Browser automation** built in
- **Terminal-Bench leader**: the strongest published score on agentic terminal tasks

## Trade-offs

- Enterprise-oriented, so the pricing and onboarding suit teams more than solo developers
- Proprietary — you cannot read or fork the harness

## Where to Find Skills

Droid reads `AGENTS.md` and project files, so skills reach it the same way they reach any file-aware agent. The largest open catalogue is [atskills.one](https://atskills.one), with 60,000+ skills — see [@skills](/protocols/atskills/).

## Best For

- Engineering organizations standardizing on one agent across many repos
- Incident response and reliability work, not just feature development
- CI pipelines that need an agent running without a human at the keyboard

---
