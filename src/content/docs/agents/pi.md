---
title: Pi
description: "Open-source TypeScript coding agent built around a deliberately minimal system prompt"
sidebar:
  order: 13
---

## Overview

| | |
|---|---|
| **Company** | Open source (earendil-works) |
| **Type** | Terminal CLI |
| **Pricing** | Free — bring your own API key |
| **Protocol** | MCP |
| **Config Formats** | AGENTS.md |
| **Language** | TypeScript |
| **Repository** | [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) |

## What It Does

Pi is a monorepo of tools for building and running AI agents. Its centerpiece is a terminal coding agent that reads files, writes code, runs shell commands, and iterates inside your project directory.

The design point is the system prompt. Where most harnesses ship thousands of tokens of instructions, Pi keeps its base prompt deliberately small and lets the model work from the repository instead. It ships as a set of npm packages, so the harness is readable and hackable rather than a black box.

## Key Strengths

- **Minimal system prompt**: A small base prompt leaves more of the context window for your actual code
- **Hackable architecture**: Plain TypeScript packages you can read end to end and fork
- **Provider-agnostic**: Bring your own key across providers
- **Composable**: The agent is one package among several, so you can build your own harness on the same parts
- **Open source**: No account, no telemetry gate, no seat

## Trade-offs

- Smaller ecosystem than Claude Code or Cursor — fewer integrations out of the box
- No managed cloud agent; it runs where you run it
- A lean prompt means the agent relies more on what your repository tells it, so `AGENTS.md` and skills matter more here than in a heavier harness

## Where to find skills for Pi

Pi has no built-in skills registry, so the skills you give it come from wherever you find them. A skill is a `SKILL.md` file, so a repository path or a downloaded folder is enough — point Pi at the file and it reads it like any other.

The largest open catalogue is [atskills.one](https://atskills.one), with 60,000+ agent skills you can read or copy into your project. See [@skills](/protocols/atskills/) for how referencing works.

This matters more with Pi than with a heavier harness: the lean base prompt means the agent leans on what your repository tells it.

## Best For

- Developers who want to read and modify their agent harness
- Token-conscious workflows where prompt overhead is the constraint
- Building a custom agent on top of an existing, small set of parts

---
