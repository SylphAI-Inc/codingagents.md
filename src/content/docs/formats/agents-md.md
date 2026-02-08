---
title: "AGENTS.md"
description: "The universal open format for guiding AI coding agents — used by 60K+ repos"
sidebar:
  badge:
    text: Standard
    variant: success
---

## What is AGENTS.md?

AGENTS.md is a simple, open format for guiding AI coding agents. Think of it as a **README for agents** — a dedicated place in your repo to provide context and instructions that help AI coding agents work effectively on your project.

**Adoption**: 60,000+ open-source repositories
**Stewarded by**: Agentic AI Foundation (Linux Foundation)
**Website**: [agents.md](https://agents.md)

## Why Use It?

Your README.md is for humans. AGENTS.md is for AI agents. It tells them:
- How to build and test your project
- Your coding conventions and style rules
- What to watch out for
- How the project is structured

## Supported Agents

| Agent | Reads AGENTS.md |
|-------|:---:|
| Claude Code | ✅ |
| Cursor | ✅ |
| GitHub Copilot | ✅ |
| OpenAI Codex | ✅ |
| Gemini CLI | ✅ |
| Devin | ✅ |
| Windsurf | ✅ |
| Amp | ✅ |
| AdaL CLI | ✅ |
| Factory.ai | ✅ |
| Cline | ✅ |
| Roo Code | ✅ |

## How to Write One

Create an `AGENTS.md` file in your project root:

```markdown
# AGENTS.md

## Build & Test
- Install: `npm install`
- Dev: `npm run dev`
- Test: `npm test`
- Build: `npm run build`

## Code Style
- TypeScript strict mode
- Functional components with hooks
- Named exports preferred
- Use Zod for runtime validation

## Architecture
- `/src/components/` — React components
- `/src/lib/` — Utility functions
- `/src/api/` — API routes
```

## Advanced: Nested Files

For monorepos, place AGENTS.md files in subdirectories:

```
my-monorepo/
├── AGENTS.md           ← Root-level instructions
├── packages/
│   ├── frontend/
│   │   └── AGENTS.md   ← Frontend-specific
│   └── backend/
│       └── AGENTS.md   ← Backend-specific
```

## vs Other Formats

| Feature | AGENTS.md | CLAUDE.md | .cursorrules |
|---------|:---------:|:---------:|:------------:|
| Universal | ✅ | ❌ | ❌ |
| Foundation-backed | ✅ | ❌ | ❌ |
| Nested support | ✅ | ✅ | ✅ |

**Recommendation**: Use AGENTS.md as your base, then add agent-specific files for fine-tuning.

---

*[Edit this page](https://github.com/SylphAI-Inc/coding_agent/edit/main/src/content/docs/formats/agents-md.md) · Managed by [Sylph.AI](https://sylph.ai)*
