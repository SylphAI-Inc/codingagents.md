---
title: AdaL CLI
description: "Coding agent by SylphAI — terminal, desktop IDE, and browser use, with worker agents and native @skills"
sidebar:
  order: 1
  badge:
    text: New
    variant: tip
---

## Overview

| | |
|---|---|
| **Company** | SylphAI |
| **Type** | Terminal CLI, desktop app, and web |
| **Pricing** | Free · Pro $20/mo · Max $100/mo · Max+ $200/mo |
| **Protocol** | MCP, [@skills](/protocols/atskills/) (native) |
| **Config Formats** | AGENTS.md, ADAL.md, SKILL.md |
| **Time to Market** | 12/2025 |
| **Website** | [adalagent.ai](https://adalagent.ai/?utm_source=codingagents.md&utm_medium=referral&utm_campaign=agent_adal) |

## What It Does

AdaL is a coding agent that runs in the terminal, in a desktop IDE, and in the browser. Rather than one general assistant, it delegates to specialized worker agents — coding, review, deep research, and browser use — each with its own tools and its own reviewable output.

It is built on [AdalFlow](https://github.com/SylphAI-Inc/AdalFlow), SylphAI's open-source agent library, and it is the reference client for the [@skills protocol](/protocols/atskills/).

## AdaL Engineer

AdaL Engineer takes a task end to end rather than turn by turn. You describe the outcome, and it plans the work, runs it, and comes back with something reviewable.

What makes it unusual is that it does not insist on its own agent for the work. Claude Code, Codex, and AdaL can each act as the worker underneath, so the harness that delegates is separate from the harness that writes the code. If your team already runs Claude Code, it stays in the loop as the executor.

- **Any agent as the worker** — Claude Code, Codex, or AdaL, whichever suits the task or the team's existing setup
- **End-to-end delivery** — plan, implement, verify, and hand back a diff, instead of stopping at each step for the next prompt
- **One review surface** — work from different underlying agents comes back through the same review flow
- **Native [@skills](/protocols/atskills/)** — the protocol is implemented in AdaL itself, so references, saves, and auto-triggering work the same whichever agent is doing the work underneath
- **Finds and writes its own skills** — it discovers which skills a task needs and pulls them in, and when it works something out that no skill covers, it writes one, so the next run starts from the answer instead of rediscovering it

## Worker Agents

| Agent | What it does |
|-------|--------------|
| **Coding** | Implementation, refactors, debugging, and tests, grounded in the repo and visible through plans, tool calls, and diffs |
| **Review** | Explains diffs, surfaces risk, clusters related changes, and helps a human sign off on AI work |
| **Deep Research** | Starts from your codebase, then searches outside sources, and returns a cited decision memo tied to your implementation |
| **Browser** | Navigates real web apps, inspects UI state, validates flows, and reports with screenshot evidence |

## Key Strengths

- **Native @skills**: The reference implementation — reference, save, auto-trigger, and a `/skills` surface showing what is resident and what it costs
- **Specialized workers**: Delegate to the agent built for the job instead of one agent doing everything
- **Three surfaces**: Terminal CLI, a desktop agentic IDE, and the web app
- **Browser use**: Real clicks, screenshots, console, and storage inspection, not just code generation
- **Multi-model**: Claude, GPT, Gemini, and open-weight models including GLM, DeepSeek, Kimi, and Qwen
- **Headless and SDK**: Run agents from CI, background jobs, and internal tools, or compose your own workers
- **MCP-native**: Full Model Context Protocol support
- **AdalFlow**: The open-source library underneath is public and usable on its own

## Skills

AdaL implements [@skills](/protocols/atskills/) directly, so the three tiers are first-class rather than emulated:

```
@skills:<path>           use it for this task, keep nothing
@skills:<path>:save      copy it into .atskills/, tracked in git
@skills:<path>:install   one line in .autotrigger, fires on its own
```

`/skills` shows the resident set, each skill's source, and its token cost. Browse the catalogue at [atskills.one](https://atskills.one).

Auto-discovery closes the loop. AdaL pulls in the skills a task calls for, and writes a new one when it solves something no existing skill covers — so the expensive first pass becomes a file the whole team gets for free.

## Best For

- Teams that want AI work to arrive reviewable, not just finished
- Developers who want the terminal and an IDE without switching agents
- Work that crosses code and the browser — building a flow and then validating it
- Anyone standardizing on an open skills protocol rather than a vendor registry

---

*[Learn more at adalagent.ai](https://adalagent.ai/?utm_source=codingagents.md&utm_medium=referral&utm_campaign=agent_adal_footer) · [View AdalFlow on GitHub](https://github.com/SylphAI-Inc/AdalFlow)*
