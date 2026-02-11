---
title: ".cursorrules"
description: "Cursor's AI coding rules format — project, user, and team-level configuration"
---

## What is .cursorrules?

`.cursorrules` is Cursor's configuration format for customizing AI behavior. It defines coding rules, style preferences, and project context.

**Owner**: Anysphere ([Cursor](/agents/cursor/))
**Docs**: [Cursor Rules](https://cursor.com/docs/context/rules)

## Types of Rules

### 1. Project Rules (`.cursor/rules/`)
```markdown
<!-- .cursor/rules/frontend.md -->
---
description: "Frontend coding guidelines"
globs: ["src/components/**", "src/pages/**"]
---

Use React functional components with TypeScript.
Prefer Tailwind CSS for styling.
```

### 2. User Rules
Global rules in Cursor settings.

### 3. .cursorrules (Legacy)
Single file in project root:

```markdown
You are an expert TypeScript developer.

## Stack
- Next.js 15 with App Router
- TypeScript strict mode
- Tailwind CSS v4
```

## Community Resources

- [awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) — Community collection

Cursor now also reads [AGENTS.md](/formats/agents-md/) for universal instructions.

---

