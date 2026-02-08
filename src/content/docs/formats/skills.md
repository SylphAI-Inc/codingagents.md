---
title: "SKILL.md / Skills Format"
description: "Reusable agent capabilities — the 'npm for AI agents' from Vercel and Anthropic"
---

## What Are Skills?

Skills are reusable capabilities for AI agents — **npm packages for AI**. Install with a single command to give your agent new abilities.

**Registries**: [skills.sh](https://skills.sh) (Vercel), `.claude/skills/` (Anthropic)
**Install**: `npx skills add <owner/repo>`
**Scale**: 35,000+ installs across 200+ skills

## Structure

```
my-skill/
├── SKILL.md          ← Instructions + metadata
├── scripts/
│   └── lint.sh       ← Optional automation
└── templates/
    └── component.tsx  ← Optional templates
```

## SKILL.md Format

```markdown
---
name: react-best-practices
description: Best practices for React development
version: 1.0.0
---

## When to Use
Use this skill when creating React components.

## Instructions
- Use functional components with hooks
- Implement proper error boundaries
- Use React.memo for expensive renders
```

## Popular Skills

| Skill | Installs | Description |
|-------|----------|-------------|
| vercel-react-best-practices | 72K+ | React patterns |
| seo-audit | 15K+ | SEO optimization |
| accessibility-audit | 8K+ | A11y compliance |

## Skills vs AGENTS.md

AGENTS.md tells the agent about your project. Skills teach it new abilities. They're complementary.

---

*[Edit this page](https://github.com/SylphAI-Inc/coding_agent/edit/main/src/content/docs/formats/skills.md) · Managed by [Sylph.AI](https://sylph.ai)*
