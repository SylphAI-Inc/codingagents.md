# Contributing to CodingAgents.md

Thanks for your interest in contributing! This is a community project and we welcome all contributions.

## Ways to Contribute

### Add a New Agent
1. Create a file in `src/content/docs/agents/` (e.g., `new-agent.md`)
2. Follow the template structure (see existing files)
3. Include: overview table, features, pricing, config format support

### Add a Config Format
1. Create a file in `src/content/docs/formats/`
2. Explain what it is, who owns it, and provide a template
3. Link to relevant agents that use it

### Improve Existing Content
- Fix outdated information
- Add missing details
- Improve explanations
- Add code examples

### Report Issues
- [Open an issue](https://github.com/SylphAI-Inc/codingagents.md/issues) for bugs or suggestions
- Include as much detail as possible

## Development Setup

```bash
git clone https://github.com/SylphAI-Inc/codingagents.md.git
cd codingagents.md
npm install
npm run dev    # http://localhost:4321
```

## File Structure

```
src/content/docs/
├── agents/          # Agent profiles
├── formats/         # Config format guides
├── protocols/       # Protocol documentation
├── sdks/            # SDK comparisons
├── benchmarks/      # Benchmark data
└── guides/          # How-to guides
```

## Page Template

```markdown
---
title: "Page Title"
description: "Brief description"
---

## Overview

| Field | Value |
|-------|-------|
| **Key** | Value |

## Main Content
...
```

## Pull Request Guidelines

1. Keep changes focused
2. Update related pages if needed (cross-links)
3. Test locally before submitting
4. Describe what you changed and why

## Questions?

Open an issue or start a discussion. We're happy to help!
