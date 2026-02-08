# AI Coding Agent Ecosystem Landscape

**Last Updated**: 2026-02-07
**Managed by** [Sylph.AI](https://sylph.ai) · **Built with** [AdaL CLI](https://github.com/adal-cli/adal)

---

## TL;DR

The AI coding agent ecosystem in early 2026 consists of **10+ major agents**, **5+ config formats**, **2 dominant protocols**, and **3 registries/directories**. This document maps the entire landscape.

---

## 1. Coding Agents

### Tier 1: Market Leaders

| Agent | Company | Type | Pricing | Protocol | Config Format | Key Strength |
|-------|---------|------|---------|----------|--------------|-------------|
| [Claude Code](https://code.claude.com) | Anthropic | Terminal agent | Usage-based | MCP | CLAUDE.md, AGENTS.md, SKILL.md | Deep reasoning, agentic coding |
| [Cursor](https://cursor.com) | Anysphere | IDE | $20/mo+ | MCP | .cursorrules, AGENTS.md | IDE integration, composer |
| [GitHub Copilot](https://github.com/features/copilot) | Microsoft/GitHub | IDE plugin + Agent | $10-39/mo | Custom | copilot-instructions.md, AGENTS.md | GitHub ecosystem, ubiquity |
| [OpenAI Codex](https://openai.com/codex) | OpenAI | Cloud agent | Usage-based | Custom | AGENTS.md | Cloud sandboxing, parallel tasks |

### Tier 2: Strong Contenders

| Agent | Company | Type | Pricing | Protocol | Config Format | Key Strength |
|-------|---------|------|---------|----------|--------------|-------------|
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Google | Terminal agent | Free tier | MCP | AGENTS.md | Google ecosystem, free tier |
| [Windsurf](https://windsurf.com) | Cognition | IDE | $15/mo+ | Custom | AGENTS.md | Cascade flow, context engine |
| [Amp](https://amp.dev) | Sourcegraph | Terminal + Web | Usage-based | ACP | AGENTS.md | Codebase search, ACP native |
| [Devin](https://devin.ai) | Cognition | Autonomous agent | Enterprise | Custom | AGENTS.md | Full autonomy, browser use |

### Tier 3: Emerging & Specialized

| Agent | Company | Type | Pricing | Protocol | Config Format | Key Strength |
|-------|---------|------|---------|----------|--------------|-------------|
| [AdaL CLI](https://sylph.ai) | Sylph.AI | Terminal + Web | Free + Pro | MCP | AGENTS.md | Self-evolving, AdalFlow lib |
| [Factory.ai](https://factory.ai) | Factory | Autonomous | Enterprise | Custom | AGENTS.md | Enterprise workflows |
| [Cline](https://github.com/cline/cline) | Community | VS Code ext | Free (OSS) | MCP | AGENTS.md | Open source, VS Code native |
| [Aider](https://aider.chat) | Paul Gauthier | Terminal | Free (OSS) | Custom | Custom | Git-native, pair programming |
| [Continue](https://continue.dev) | Continue | IDE plugin | Free (OSS) | Custom | Custom | Open source, multi-IDE |
| [Roo Code](https://roocode.com) | Roo | VS Code ext | Free (OSS) | MCP | AGENTS.md | Fork of Cline, community |

---

## 2. Configuration Formats

### 2.1 AGENTS.md (Universal Standard)

- **Owner**: OpenAI → Agentic AI Foundation (Linux Foundation)
- **Adoption**: 60,000+ open-source repositories
- **Purpose**: Universal agent instructions — build commands, test workflows, coding conventions
- **Supported by**: Claude Code, Cursor, Copilot, Codex, Gemini CLI, Devin, Windsurf, Amp, AdaL, Factory, Cline, Roo Code
- **Website**: [agents.md](https://agents.md)
- **Spec**: Standard Markdown, no proprietary syntax
- **Key feature**: Nested files for monorepos

### 2.2 CLAUDE.md (Anthropic)

- **Owner**: Anthropic
- **Purpose**: Claude Code-specific project memory and instructions
- **Supported by**: Claude Code exclusively
- **Location**: Project root, `~/.claude/CLAUDE.md` (global), or nested
- **Key feature**: Hierarchical — global + project + directory level
- **Relationship to AGENTS.md**: Claude Code reads both; CLAUDE.md takes precedence for Claude-specific instructions

### 2.3 .cursorrules / Rules (Cursor)

- **Owner**: Anysphere (Cursor)
- **Purpose**: Cursor-specific coding rules and preferences
- **Supported by**: Cursor exclusively
- **Location**: `.cursorrules` file or `.cursor/rules/` directory
- **Key feature**: Project Rules, User Rules, Team Rules hierarchy
- **Relationship to AGENTS.md**: Cursor now also reads AGENTS.md

### 2.4 copilot-instructions.md (GitHub)

- **Owner**: Microsoft / GitHub
- **Purpose**: GitHub Copilot custom instructions
- **Supported by**: GitHub Copilot
- **Location**: `.github/copilot-instructions.md`
- **Key feature**: Integrated with GitHub repository settings
- **Relationship to AGENTS.md**: Copilot also reads AGENTS.md

### 2.5 SKILL.md / Skills Format (Vercel + Claude)

- **Owner**: Vercel (skills.sh), Anthropic (Claude skills)
- **Purpose**: Reusable agent capabilities — packaged instructions + scripts
- **Supported by**: Claude Code, Cursor, Copilot, Gemini, and others via skills.sh
- **Location**: `.claude/skills/` (Claude) or installed via `npx skills add`
- **Registry**: [skills.sh](https://skills.sh) — 35,000+ installs
- **Key feature**: NPM-like install, leaderboard, cross-agent compatibility

### Format Comparison Matrix

| Feature | AGENTS.md | CLAUDE.md | .cursorrules | copilot-instructions.md | SKILL.md |
|---------|-----------|-----------|-------------|------------------------|----------|
| Universal | ✅ | ❌ Claude only | ❌ Cursor only | ❌ Copilot only | ⚠️ Multi-agent |
| Nested/hierarchical | ✅ | ✅ | ✅ | ❌ | ❌ |
| Includes scripts | ❌ | ❌ | ❌ | ❌ | ✅ |
| Registry | ❌ | ❌ | Community (GitHub) | ❌ | ✅ skills.sh |
| Foundation-backed | ✅ Linux Foundation | ❌ | ❌ | ❌ | ❌ |
| Standard Markdown | ✅ | ✅ | ✅ | ✅ | ✅ + YAML |

---

## 3. Protocols

### 3.1 MCP — Model Context Protocol

- **Owner**: Anthropic
- **Purpose**: Standardized protocol for connecting AI models to external tools and data sources
- **Adoption**: Claude Code, Cursor, Gemini CLI, AdaL CLI, Cline, Roo Code, and more
- **Key feature**: Tool servers that any MCP-compatible client can use
- **Analogy**: "USB-C for AI" — one protocol, many tools
- **Website**: [modelcontextprotocol.io](https://modelcontextprotocol.io)

### 3.2 ACP — Agent Client Protocol

- **Owner**: Zed Industries + JetBrains
- **Purpose**: Open standard for AI coding agents to integrate with any editor
- **Adoption**: Amp, JetBrains AI, Zed, growing ecosystem
- **Key feature**: Agent Registry — register once, available everywhere
- **Registry**: [ACP Registry](https://zed.dev/acp)
- **Website**: [zed.dev/acp](https://zed.dev/acp)

### Protocol Comparison

| Feature | MCP | ACP |
|---------|-----|-----|
| Focus | Model ↔ Tool connection | Agent ↔ Editor connection |
| Initiated by | Anthropic | Zed + JetBrains |
| Registry | Community MCP servers | Official ACP Registry |
| Primary adopters | Claude, Cursor, Gemini | Amp, JetBrains, Zed |
| Open source | ✅ | ✅ |
| Complementary? | ✅ They solve different problems | ✅ |

---

## 4. Registries & Directories

### 4.1 skills.sh (Vercel)

- **URL**: [skills.sh](https://skills.sh)
- **What it is**: NPM-like directory for AI agent skills
- **Scale**: 35,000+ total installs, 200+ skills listed
- **Install**: `npx skills add <owner/repo>`
- **Features**: Leaderboard (all-time, trending, hot), cross-agent compatibility
- **Top skills**: vercel-react-best-practices (72K installs), seo-audit, marketing-strategy

### 4.2 ACP Registry (Zed/JetBrains)

- **URL**: [zed.dev/acp](https://zed.dev/acp) + [registry.coder.com](https://registry.coder.com)
- **What it is**: Directory of ACP-compatible coding agents
- **How to list**: Submit a PR to the registry repo
- **Integration**: Built into JetBrains IDEs and Zed editor

### 4.3 codingagent.md (Sylph.AI) — THIS PROJECT

- **URL**: [codingagent.md](https://codingagent.md)
- **What it is**: The aggregator hub — covers ALL agents, formats, protocols, and registries
- **Differentiator**: Neutral, comprehensive, content-first

---

## 5. Ecosystem Trends (Feb 2026)

### 5.1 Convergence on AGENTS.md
Nearly every agent now reads AGENTS.md files. The format has become the de facto standard for project-level agent instructions, with 60K+ repos adopting it. Agent-specific formats (CLAUDE.md, .cursorrules) continue to exist for fine-tuning but AGENTS.md provides the universal baseline.

### 5.2 Skills as the New Packages
Vercel's skills.sh has established the pattern of "npm for agents" — reusable, installable capabilities. Claude Code's native `.claude/skills/` directory follows the same pattern. Expect skills to become as fundamental as npm packages.

### 5.3 Protocol Coexistence
MCP and ACP solve different problems and are complementary. MCP connects models to tools; ACP connects agents to editors. Most agents will support both.

### 5.4 Autonomous Agents Rising
Devin, Factory.ai, and OpenAI Codex are pushing toward fully autonomous coding — agents that can work independently for hours. This shifts the paradigm from "AI-assisted coding" to "AI coding with human review."

### 5.5 Multi-Agent Workflows
57% of companies now run AI agents in production. The next frontier is orchestrating multiple agents — e.g., one for planning, one for coding, one for testing. codingagent.md will document these emerging patterns.

---

## Contributing

This landscape is community-maintained. To add or update an agent, format, or protocol:

1. Fork the [codingagent.md repo](https://github.com/SylphAI-Inc/coding_agent)
2. Edit the relevant file in `docs/`
3. Submit a Pull Request

---

*Managed by [Sylph.AI](https://sylph.ai) · Built with [AdaL CLI](https://github.com/adal-cli/adal)*
