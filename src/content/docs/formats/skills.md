---
title: "SKILL.md / Skills Format"
description: "Reusable agent capabilities — the SKILL.md format, where to find skills, and how they reach an agent"
sidebar:
  order: 3
---

## What Are Skills?

A skill is procedural knowledge an agent can read: domain expertise, how to operate a service, or how your team does a thing. It ships as a `SKILL.md` file, along with any scripts and templates it needs.

The first time an agent does something new, it has to work the whole thing out. A skill is how you keep that discovery, so the second run does not start from zero.

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

The description matters more than it looks. When a skill is resident, this is the line the agent reads to decide whether to open the file at all.

## Where to Find Skills

[atskills.one](https://atskills.one) is the largest open catalogue, with 60,000+ skills published against the [@skills](/protocols/atskills/) standard. Vercel runs [skills.sh](https://skills.sh), and Anthropic ships its own in `.claude/skills/`.

## Getting One Into Your Agent

The format is simple. Delivery is where the designs disagree.

Installing a skill decides three things at once: use it now, keep it, and load its description into the system prompt so it can fire on its own. Most skills need one of the three. The third is the expensive one, because it costs context on every request — Claude Code caps its skill listing at 1% of the context window and evicts the least-used descriptions when it overflows, including skills the agent has never had the chance to use.

This is why so many people skip installation and paste a GitHub link instead.

### Install it

The skill lands in an agent-specific directory and stays there, with its description in the system prompt.

```
npx skills add <owner>/<repo>
```

### Reference it

[@skills](/protocols/atskills/) separates the three decisions instead of bundling them. It is a filesystem protocol: a reference is a path, and there is no manifest, lockfile, or registry client.

```
@skills:<path>                use it once, keep nothing
@skills:<path>:save           copy it into .atskills/<path>/, tracked in git
@skills:<path>:install        add one line to .autotrigger, make it resident
@skills:<path>:save:install   both — the suffixes are orthogonal
```

A bare path is the project's own and never reaches the network. `gh:owner/repo/path` is GitHub:

```
@skills:gh:SylphAI-Inc/skills/skills/glowmotion:save
```

Any agent that reads files and runs shell commands is already a client, so this works today in Claude Code, Codex, Cursor, Pi, OpenCode, and the rest — no plugin required.

- [How the protocol works](/protocols/atskills/)
- [What is @skills? — with video](https://atskills.one/what-is-atskills)
- [Browse 60,000+ agent skills](https://atskills.one)

## Skills vs AGENTS.md

[AGENTS.md](/formats/agents-md/) is loaded every session, so it should hold only what applies broadly. Skills cover the rest: knowledge that matters sometimes, read when it is needed. They are complementary, and the common failure is putting the second kind in the first place.

---
