---
title: Claude Code
description: "Anthropic's agentic coding tool — deep reasoning, MCP support, terminal-native"
sidebar:
  badge:
    text: Popular
    variant: tip
---

## Overview

| | |
|---|---|
| **Company** | Anthropic |
| **Type** | Terminal agent |
| **Pricing** | Usage-based (Claude Pro/Max subscription or API) |
| **Protocol** | MCP (Model Context Protocol) |
| **Config Formats** | CLAUDE.md, AGENTS.md, SKILL.md |
| **Website** | [code.claude.com](https://code.claude.com) |

## What It Does

Claude Code is Anthropic's agentic coding tool that runs in your terminal. It can read your entire codebase, edit files, run commands, search the web, and manage git operations — all through natural language conversation.

## Key Strengths

- **Deep reasoning**: Claude's extended thinking enables complex multi-step coding tasks
- **Agentic workflow**: Can autonomously plan, implement, test, and iterate
- **MCP support**: Connects to external tools via Model Context Protocol
- **Skills system**: Reusable `.claude/skills/` with SKILL.md files
- **Git-native**: Built-in git operations, PR creation, code review

## Config Formats

### CLAUDE.md
Project-specific memory and instructions. Claude Code reads this automatically on every conversation. See [CLAUDE.md format guide](/formats/claude-md/).

```markdown
# CLAUDE.md

## Project Overview
This is a React + TypeScript project using Vite.

## Commands
- `npm run dev` — Start dev server
- `npm test` — Run tests

## Coding Style
- Use functional components with hooks
- Prefer named exports
```

### AGENTS.md
Claude Code also reads the universal AGENTS.md format. See [AGENTS.md guide](/formats/agents-md/).

### SKILL.md
Skills are reusable capabilities stored in `.claude/skills/`. See [Skills format guide](/formats/skills/).

## Pricing

| Plan | Price | Includes |
|------|-------|---------|
| Claude Pro | $20/mo | Limited Claude Code usage |
| Claude Max | $100-200/mo | Extended Claude Code usage |
| API | Pay-per-token | Full programmatic access |

## Best For

- Developers who prefer terminal workflows
- Complex multi-file refactoring
- Projects needing deep reasoning about architecture
- Teams already using Anthropic's Claude models

---

