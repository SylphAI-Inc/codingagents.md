---
title: "copilot-instructions.md"
description: "GitHub Copilot's custom instruction format for project-specific AI guidance"
---

## What is copilot-instructions.md?

`copilot-instructions.md` is GitHub Copilot's project-specific configuration file.

**Owner**: Microsoft / GitHub
**Location**: `.github/copilot-instructions.md`

## Template

```markdown
<!-- .github/copilot-instructions.md -->

## Project
This is a Python FastAPI backend.

## Stack
- Python 3.12, FastAPI, SQLAlchemy 2.0
- PostgreSQL database
- pytest for testing

## Conventions
- Use async/await for all database operations
- Type hints on all functions
- Pydantic models for API schemas
```

GitHub Copilot now also reads AGENTS.md files.

---

*[Edit this page](https://github.com/SylphAI-Inc/coding_agent/edit/main/src/content/docs/formats/copilot-instructions.md) · Managed by [Sylph.AI](https://sylph.ai)*
