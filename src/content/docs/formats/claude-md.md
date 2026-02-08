---
title: "CLAUDE.md"
description: "Anthropic's project config format for Claude Code — persistent memory and instructions"
---

## What is CLAUDE.md?

CLAUDE.md is a Markdown file that provides persistent memory and project-specific instructions to Claude Code. It's read automatically at the start of every conversation.

**Owner**: Anthropic
**Used by**: Claude Code exclusively

## How It Works

Claude Code looks for CLAUDE.md files in a hierarchy:

1. **Global**: `~/.claude/CLAUDE.md` — applies to all projects
2. **Project root**: `./CLAUDE.md` — project-specific
3. **Subdirectory**: `./src/CLAUDE.md` — directory-specific overrides

## Template

```markdown
# CLAUDE.md

## Project Overview
Brief description of what this project does.

## Commands
- `npm install` — Install dependencies
- `npm run dev` — Start development server
- `npm test` — Run test suite

## Architecture
- `/src/app/` — Next.js App Router pages
- `/src/components/` — Shared React components
- `/src/lib/` — Business logic and utilities

## Coding Conventions
- TypeScript strict mode, no `any`
- Functional components with hooks
- Server components by default
```

## CLAUDE.md vs AGENTS.md

| Aspect | CLAUDE.md | AGENTS.md |
|--------|-----------|-----------|
| **Audience** | Claude Code only | All agents |
| **Hierarchy** | Global + Project + Dir | Project + Dir |
| **Best for** | Claude-specific tweaks | Universal context |

**Best practice**: Use both. AGENTS.md for universal instructions, CLAUDE.md for Claude-specific tweaks.

---

*[Edit this page](https://github.com/SylphAI-Inc/coding_agent/edit/main/src/content/docs/formats/claude-md.md) · Managed by [Sylph.AI](https://sylph.ai)*
