<div align="center">

<img src="public/logo.png" alt="codingagents.md" width="80">

# CODINGAGENTS.md

**The open directory for everything coding agents.**

*agents.md guides agents. codingagents.md helps humans pick the right one.*

[![Visit Site](https://img.shields.io/badge/🌐_codingagents.md-live-00FF88?style=for-the-badge)](https://codingagents.md)
[![Built with AdaL](https://img.shields.io/badge/Built_with-AdaL_CLI-blueviolet?style=for-the-badge)](https://adalagent.ai/?utm_source=codingagents.md&utm_medium=referral&utm_campaign=readme_badge)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## Why?

The coding agent ecosystem is fragmenting fast. Developers need a single source of truth — for **agents, models, SDKs, benchmarks, tools, MCPs, skills, protocols, and research**.

| 📊 | The Landscape |
|----|--------------|
| **10+ agents** | AdaL CLI · Claude Code · Cursor · Copilot · Codex · Gemini CLI · Devin · Windsurf · Amp |
| **5+ formats** | AGENTS.md · CLAUDE.md · .cursorrules · copilot-instructions.md · SKILL.md |
| **2 protocols** | MCP (Model Context Protocol) · ACP (Agent Client Protocol) |
| **8+ SDKs** | AdalFlow · LangGraph · OpenAI Agents SDK · CrewAI · Pydantic AI · Smolagents · Strands Agents |
| **60K+ repos** | Already shipping AGENTS.md files across open source |

## 📖 Content

| Section | Description |
|---------|-------------|
| [**Coding Agents**](https://codingagents.md/agents/claude-code/) | Deep-dive profiles of every major AI coding agent |
| [**Config Formats**](https://codingagents.md/formats/agents-md/) | How to write AGENTS.md, CLAUDE.md, .cursorrules, and more |
| [**Protocols**](https://codingagents.md/protocols/mcp/) | MCP vs ACP — what they do and how they compare |
| [**Benchmarks**](https://codingagents.md/benchmarks/models-for-coding/) | LLM coding benchmarks — SWE-bench rankings, updated weekly |
| [**Agent SDKs**](https://codingagents.md/sdks/overview/) | AdalFlow, LangGraph, OpenAI Agents SDK, CrewAI, and the frameworks behind the agents |
| [**Guides**](https://codingagents.md/guides/getting-started/) | Getting started, choosing an agent, multi-agent setups |

## 🛠 Tech Stack

[Astro](https://astro.build) + [Starlight](https://starlight.astro.build) · Hosted on [Vercel](https://vercel.com) · Domains: [codingagent.md](https://codingagent.md) & [codingagents.md](https://codingagents.md)

## 🤝 Contributing

We'd love your help! Here's how to get involved:

- **Add a new agent** — Create a file in `src/content/docs/agents/` following existing patterns
- **Improve existing pages** — Fix errors, add examples, update benchmarks
- **Add a config format** — Document a new agent config format in `src/content/docs/formats/`
- **Report issues** — [Open an issue](https://github.com/SylphAI-Inc/codingagents.md/issues) for bugs, suggestions, or missing agents

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Quick Start

```bash
git clone https://github.com/SylphAI-Inc/codingagents.md.git
cd codingagents.md
npm install
npm run dev    # → http://localhost:4321
```

Content lives in `src/content/docs/` — add or edit Markdown files and they appear in the sidebar automatically. No build config needed.

### Page Template

Every agent/format page follows a simple structure:

```markdown
---
title: "Agent Name"
description: "One-line description"
---

| Field | Value |
|-------|-------|
| **Company** | ... |
| **Pricing** | ... |

## Overview
...

## Key Features
...
```

## 📬 Stay Updated

Subscribe to weekly ecosystem updates at [codingagents.md](https://codingagents.md) — new agents, format changes, and benchmark results.

## License

MIT
