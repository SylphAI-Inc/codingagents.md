---
title: "@skills (AtSkills)"
description: "The filesystem protocol for agent skills — reference, save, or auto-trigger, with no install step"
---

## What It Is

`@skills:` is an open protocol for getting procedural knowledge into a coding agent. A skill is a `SKILL.md` file and its supporting files. A reference is a path.

There is no manifest, no lockfile, and no registry client. You publish a skill by pushing its folder to a repository.

| | |
|---|---|
| **Maintainer** | SylphAI |
| **License** | MIT |
| **Spec** | [github.com/SylphAI-Inc/atskills](https://github.com/SylphAI-Inc/atskills) |
| **Catalogue** | [atskills.one](https://atskills.one) — 60,000+ skills |
| **Explainer** | [What is @skills?](https://atskills.one/what-is-atskills) |
| **Integration guide** | [atskills.one/for-agents](https://atskills.one/for-agents) |
| **Reference client** | AdaL |

## The Problem It Solves

Installing a skill bundles three separate decisions into one act:

1. Use this skill for the task in front of you
2. Keep it, so the team can read and version it
3. Load its index into the system prompt, so it fires on its own

Most skills need one of the three. Installation charges them for all three, and the cost lands in the context window. Claude Code caps its skill listing at 1% of the context window, and drops the least-used descriptions when it overflows — including skills the agent has not yet had a chance to discover.

So people route around installation. They paste a GitHub link for external knowledge, and they pile internal procedures into one large `AGENTS.md`. Both workarounds treat a skill as the file it already is.

## The Three Tiers

A reference states where it comes from, so resolution never guesses. A bare path is the project's own (`.atskills/<path>`) and never reaches the network. `gh:owner/repo/path` is GitHub.

**Reference** — load a skill for one task. Nothing is saved, nothing becomes resident.

```
@skills:gh:SylphAI-Inc/skills/skills/glowmotion
```

**Saved** — copy it into `.atskills/` in the project, tracked in git. Mention its path when someone needs it.

```
@skills:gh:SylphAI-Inc/skills/skills/glowmotion:save
```

**Auto-triggered** — add one `.gitignore`-style line to `.autotrigger`. Only now does the skill index enter the system prompt at session start.

```
@skills:gh:SylphAI-Inc/skills/skills/glowmotion:install
```

The suffixes are orthogonal, so `:save:install` does both.

Using a skill does not imply saving it. Saving does not imply auto-triggering.

## Project Layout

```
your-repo/
├── SKILLS.md              ← the protocol, written for an agent to read
└── .atskills/
    ├── .autotrigger       ← one line per resident skill
    └── glowmotion/
        ├── SKILL.md
        └── .source        ← two lines of provenance
```

## CLI

```bash
atskills get <path>      # use a skill — prints SKILL.md; a directory prints a menu
atskills save <path>     # copy to .atskills/<path>/ and write .source
atskills triggers        # what fires on its own, from .atskills/.autotrigger
atskills prompt          # the exact injected prompt, with the files it read
atskills skills          # interactive tree: toggle auto-trigger, view the prompt
```

Paths follow the same grammar as references: `owner/path` is the hub, `gh:owner/repo/path` is GitHub, and a local path always answers first.

## Adoption Levels

**Level 0 — one file, or one CLI.** The protocol asks nothing of the agent vendor. Drop `SKILLS.md` into a repository and any agent that reads files, runs shell commands, and fetches URLs is a full client. No SDK, no plugin.

**Level 1 — native `@` integration.** Reuse the `@` context system the agent already ships. The client computes the resident prompt block, and the serving layer splices that one string into the system prompt. The host needs no protocol logic at all.

## Agent Support

| Agent | Level | Notes |
|-------|-------|-------|
| [AdaL](/agents/adal/) | Native | Reference client — references, saves, auto-trigger, and `/skills` management |
| [Claude Code](/agents/claude-code/) | Level 0 | Reads `SKILLS.md` directly, or shell out to the `atskills` CLI |
| [OpenAI Codex](/agents/openai-codex/) | Level 0 | Saved skills travel with the checkout into the cloud sandbox |
| [Cursor](/agents/cursor/) | Level 0 | Reference `.atskills/` paths with Cursor's own `@` file mention |
| [Pi](/agents/pi/) | Level 0 | Minimal system prompt by design — the case on-demand loading was built for |
| [OpenCode](/agents/opencode/) | Level 0 | Provider-agnostic, so skills carry across models |
| [Google Antigravity](/agents/google-antigravity/) | Level 0 | Commit `SKILLS.md` to the repo |
| [GitHub Copilot](/agents/github-copilot/) | Level 0 | Point agent mode at a saved skill path |

Level 0 is a property of the agent's capabilities, not a vendor endorsement. Any agent that opens a file and runs a command reaches it.

## @skills vs MCP

They solve different halves of the same problem, and they compose.

| | [MCP](/protocols/mcp/) | @skills |
|---|---|---|
| **Delivers** | Tools and data — what the agent can *do* | Procedures — how your team does a thing |
| **Artifact** | A running server | A markdown file in a repo |
| **Transport** | JSON-RPC over stdio or HTTP | The filesystem |
| **Setup** | Configure and run a server | Reference a path |
| **Runtime cost** | A process | None until the skill is named |

An agent with MCP can call your deploy API. An agent with the matching skill knows your team's deploy procedure. Most real work needs both.

## @skills vs AGENTS.md

[`AGENTS.md`](/formats/agents-md/) is loaded every session, so it should hold only what applies broadly. @skills covers the rest: knowledge that matters sometimes, loaded when it is named.

The failure mode is well documented. One team's `AGENTS.md` reached 1,109 lines and roughly 27,000 tokens across 46 procedures, all of it entering context on every request.

## Security

Remote skills are untrusted instructions and may include scripts. The protocol has no signatures or immutable pins today.

Read consequential skills before you rely on them, and save them into your own git history so that changes upstream cannot change what your agent does.

Skills are already a service-integration channel: across 54,929 analysed public skills, 15,542 connect to accounts spanning 1,774 external services. On-demand references keep those integrations reachable without forcing every provider into every prompt.

## Learn More

- [What is @skills? — the full explanation, with video](https://atskills.one/what-is-atskills)
- [Browse 60,000+ agent skills](https://atskills.one)
- [Integrate @skills into your agent](https://atskills.one/for-agents)
- [Protocol spec on GitHub](https://github.com/SylphAI-Inc/atskills)

---
