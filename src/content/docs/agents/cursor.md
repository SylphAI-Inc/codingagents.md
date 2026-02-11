---
title: Cursor
description: "The AI-first IDE with composer, agent mode, and deep codebase understanding"
sidebar:
  badge:
    text: Popular
    variant: tip
---

## Overview

| | |
|---|---|
| **Company** | Anysphere |
| **Type** | IDE (VS Code fork) |
| **Pricing** | Free tier / $20/mo Pro / $40/mo Business |
| **Protocol** | MCP |
| **Config Formats** | .cursorrules, AGENTS.md |
| **Website** | [cursor.com](https://cursor.com) |

## What It Does

Cursor is an AI-first code editor built as a fork of VS Code. It features Composer (multi-file editing), Agent Mode (autonomous task execution), and deep codebase indexing for context-aware AI assistance.

## Key Strengths

- **IDE-native**: Full VS Code experience with AI deeply integrated
- **Composer**: Multi-file editing in a single prompt
- **Agent Mode**: Autonomous task execution with tool use
- **Codebase indexing**: Understands your entire project
- **Multi-model**: Supports Claude, GPT-4, and custom models
- **MCP support**: Connect external tools

## Config Format: .cursorrules

```markdown
You are an expert TypeScript developer working on a Next.js 15 project.

## Stack
- Next.js 15 with App Router
- TypeScript strict mode
- Tailwind CSS v4

## Conventions
- Use server components by default
- Prefer named exports
```

See full [.cursorrules format guide](/formats/cursorrules/). Cursor also reads [AGENTS.md](/formats/agents-md/) (universal format).

## Pricing

| Plan | Price | Features |
|------|-------|---------|
| Free | $0 | 2000 completions, 50 slow premium requests |
| Pro | $20/mo | Unlimited completions, 500 fast premium requests |
| Business | $40/mo | Admin controls, enforce privacy mode |

## Best For

- Developers who want AI built into their editor
- Teams migrating from VS Code
- Multi-file refactoring workflows

---

