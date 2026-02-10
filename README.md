<div align="center">

<img src="public/logo.png" alt="codingagent.md" width="80">

# codingagent.md

**The Aggregator Hub for the AI Coding Agent Ecosystem**<br>
Every agent. Every format. One place.

[![Visit Site](https://img.shields.io/badge/🌐_codingagent.md-live-00FF88?style=for-the-badge)](https://codingagent.md)
[![Built with AdaL](https://img.shields.io/badge/Built_with-AdaL_CLI-blueviolet?style=for-the-badge)](https://sylph.ai)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## Why?

The coding agent ecosystem is fragmenting fast. Developers need a single source of truth.

| 📊 | The Landscape |
|----|--------------|
| **10+ agents** | AdaL CLI · Claude Code · Cursor · Copilot · Codex · Gemini CLI · Devin · Windsurf · Amp |
| **5+ formats** | AGENTS.md · CLAUDE.md · .cursorrules · copilot-instructions.md · SKILL.md |
| **2 protocols** | MCP (Model Context Protocol) · ACP (Agent Client Protocol) |
| **7+ SDKs** | AdalFlow · LangGraph · OpenAI Agents SDK · CrewAI · Pydantic AI · Smolagents |
| **60K+ repos** | Already shipping AGENTS.md files across open source |

## 📖 Content

| Section | Description |
|---------|-------------|
| [**Coding Agents**](https://codingagent.md/agents/claude-code/) | Deep-dive profiles of every major AI coding agent |
| [**Config Formats**](https://codingagent.md/formats/agents-md/) | How to write AGENTS.md, CLAUDE.md, .cursorrules, and more |
| [**Protocols**](https://codingagent.md/protocols/mcp/) | MCP vs ACP — what they do and how they compare |
| [**Benchmarks**](https://codingagent.md/benchmarks/models-for-coding/) | LLM coding benchmarks — SWE-bench rankings, updated weekly |
| [**Agent SDKs**](https://codingagent.md/sdks/overview/) | AdalFlow, LangGraph, OpenAI Agents SDK, CrewAI, and the frameworks behind the agents |
| [**Guides**](https://codingagent.md/guides/getting-started/) | Getting started, choosing an agent, multi-agent setups |

## 🛠 Tech Stack

[Astro](https://astro.build) + [Starlight](https://starlight.astro.build) · Hosted on [Vercel](https://vercel.com) · Domains: [codingagent.md](https://codingagent.md) & [codingagents.md](https://codingagents.md)

## 🤝 Contributing

We'd love your help! Here's how to get involved:

- **Add a new agent** — Create a file in `src/content/docs/agents/` following existing patterns
- **Improve existing pages** — Fix errors, add examples, update benchmarks
- **Add a config format** — Document a new agent config format in `src/content/docs/formats/`
- **Report issues** — [Open an issue](https://github.com/SylphAI-Inc/coding_agent/issues) for bugs, suggestions, or missing agents

### Quick Start

```bash
git clone https://github.com/SylphAI-Inc/coding_agent.git
cd coding_agent
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

Subscribe to weekly ecosystem updates at [codingagent.md](https://codingagent.md) — new agents, format changes, and benchmark results.

## License

MIT
