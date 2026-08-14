---
title: Best Models for Coding (2026)
description: "Which LLM to use for coding in 2026 — current frontier models compared by release date, context window, price, and what each is actually good at."
sidebar:
  order: 1
---

Which model should you point your coding agent at? This page tracks the current frontier, what each model costs, and what it is actually good for.

Context windows and pricing come from a live production model catalogue, so they are what you pay rather than what a launch post claimed. Release dates come from vendor announcements.

> **Last updated**: August 14, 2026

---

## Quick Recommendation

| Use Case | Best Model | Runner-Up |
|----------|-----------|-----------|
| Complex agentic coding | Claude Opus 5 | GPT-5.6 Sol |
| Everyday development | Claude Sonnet 5 | GPT-5.6 Terra |
| Coding on a Flash budget | Gemini 3.7 Flash | MiniMax M3 |
| Hardest professional work | GPT-5.6 Sol | Claude Fable 5 |
| Long-horizon coding | GLM-5.2 | Kimi K3 |
| High-volume, cost-sensitive | GPT-5.6 Luna | DeepSeek V4 Flash |
| Browser-use agents | MiniMax M3 | Gemini 3.7 Flash |
| Best value at the frontier | DeepSeek V4 Pro | GLM-5.2 |

---

## The Current Frontier

Newest first. Prices are per 1M tokens, input / output.

| Model | Provider | Released | Context | Price | Positioning |
|-------|----------|----------|---------|-------|-------------|
| Gemini 3.7 Flash | Google | 2026-08-13 | 1M | $1.50 / $7.50 | Most capable Flash for coding and agentic workflows |
| Claude Opus 5 | Anthropic | 2026-07-24 | 1M | $5 / $25 | Most capable Anthropic, complex agentic coding |
| GPT-5.6 Sol | OpenAI | 2026-07-09 | 922K | $5 / $30 | Frontier, complex professional work |
| GPT-5.6 Terra | OpenAI | 2026-07-09 | 922K | $2.50 / $15 | Balances intelligence and cost |
| GPT-5.6 Luna | OpenAI | 2026-07-09 | 922K | $1 / $6 | Cost-sensitive high-volume workloads |
| Claude Sonnet 5 | Anthropic | 2026-06-30 | 1M | $3 / $15 | Most capable Sonnet, coding and agents |

Anthropic versions each tier separately, so the 5 generation arrived in pieces rather than at one launch. OpenAI shipped GPT-5.6 as three models at once — Luna, Terra, and Sol, least to most capable.

---

## By Provider

### Anthropic

| Model | Context | Price | Notes |
|-------|---------|-------|-------|
| Claude Opus 5 | 1M | $5 / $25 | Most capable Anthropic for complex agentic coding |
| Claude Fable 5 | 1M | $10 / $50 | Next-gen flagship, knowledge work and coding |
| Claude Sonnet 5 | 1M | $3 / $15 | The default choice for day-to-day work |
| Claude Sonnet 4.6 | 1M | $3 / $15 | Proven all-rounder |
| Claude Opus 4.6 | 1M | $5 / $25 | Deep reasoning and production code |

### OpenAI

| Model | Context | Price | Notes |
|-------|---------|-------|-------|
| GPT-5.6 Sol | 922K | $5 / $30 | The hardest work |
| GPT-5.6 Terra | 922K | $2.50 / $15 | Balanced everyday work |
| GPT-5.6 Luna | 922K | $1 / $6 | Fast and cheap at volume |

### Google

| Model | Context | Price | Notes |
|-------|---------|-------|-------|
| Gemini 3.7 Flash | 1M | $1.50 / $7.50 | Coding and agentic workflows |
| Gemini 3.1 Pro | 1M | $2 / $12 | Best multimodal understanding |
| Gemini 3.6 Flash | 1M | $1.50 / $7.50 | Fast multimodal, large output budget |
| Gemini 3 Flash | 1M | $0.50 / $3 | Fast everyday multimodal |

### Open-weight and challenger models

| Model | Provider | Context | Price | Notes |
|-------|----------|---------|-------|-------|
| Kimi K3 | Moonshot | 917K | $3 / $15 | Frontier coding, deep reasoning |
| Kimi K2.7 Code | Moonshot | 214K | $0.95 / $4 | Coding and agentic, multimodal |
| GLM-5.2 | Z.ai | 1M | $1.40 / $4.40 | Flagship, long-horizon coding |
| GLM-5.1 | Z.ai | 200K | $1.40 / $4.40 | Previous-gen flagship |
| DeepSeek V4 Pro | DeepSeek | 616K | $0.44 / $0.87 | Frontier reasoning, remarkable value |
| DeepSeek V4 Flash | DeepSeek | 616K | $0.14 / $0.28 | Fast reasoning, cheapest on this page |
| Grok 4.6 | xAI | 500K | $2 / $6 | Strong agentic coding |
| MiniMax M3 | MiniMax | 1M | $0.30 / $1.20 | Good with browser use |
| MiniMax M2.7 | MiniMax | 200K | $0.30 / $1.20 | Lightweight agentic coding |
| Muse Spark 1.2 | Meta | 1M | $1.25 / $4.25 | Fast agentic coding |
| Qwen3.8 Max | Qwen | 991K | $2 / $6 | Multimodal long-context |
| Qwen3.7 Plus | Qwen | 991K | $0.80 / $3.20 | Balanced multimodal |

---

## A Note on Benchmark Scores

This page used to carry SWE-bench Verified percentages. It no longer does, and the reason is worth stating.

The scores that were here were real, but they described Opus 4.6, GPT-5.2-Codex, and Gemini 3 Flash — models that are now one or two generations behind. None of the models at the top of this page has a verified SWE-bench number we can cite, and publishing an unverified figure next to a verified one makes both worthless.

A stale number is worse than no number, because it looks current. We would rather tell you what a model costs, how much context it holds, and what its maker built it for — all of which we can check — than fill a column with figures we cannot stand behind.

When verified scores for the current frontier are published, they will go back in with sources attached.

### What the benchmarks measure

| Benchmark | What It Measures | Why It Matters |
|-----------|-----------------|----------------|
| **SWE-bench Verified** | Fix real GitHub issues end-to-end | The most realistic agentic coding measure |
| **SWE-bench Pro** | A harder subset of real-world issues | Tests frontier agent capability |
| **Terminal-Bench 2.0** | Agentic terminal tasks | Tests real development workflows |
| **Aider Polyglot** | Multi-language code editing accuracy | Tests edit-apply workflows |
| **LiveCodeBench Pro** | Competitive programming | Tests algorithmic reasoning |
| **HumanEval** | Function-level code generation | Classic, and now largely saturated |

For agentic work, SWE-bench Verified and Terminal-Bench 2.0 are the two worth watching. HumanEval no longer separates frontier models from each other.

---

## Choosing a Model

```
Hardest agentic work, cost secondary?
  → Claude Opus 5 or GPT-5.6 Sol

Everyday development, best balance?
  → Claude Sonnet 5 ($3/$15, 1M context)

Cheap but genuinely capable?
  → DeepSeek V4 Pro ($0.44/$0.87) or GLM-5.2 ($1.40/$4.40)

Enormous codebase in one session?
  → Anything at 1M — Sonnet 5, Opus 5, Gemini 3.7 Flash, GLM-5.2

Running an agent at high volume?
  → GPT-5.6 Luna or DeepSeek V4 Flash

Driving a browser?
  → MiniMax M3
```

Note how little separates the tiers on context now. A 1M window is close to standard at the frontier, so the deciding factors are price and how well a model holds a long task together.

---

## The Model Is Half the Answer

A better model does not know how your team deploys, reviews, or releases. That knowledge lives in your repo and in the skills you give the agent — see [@skills](/protocols/atskills/) for how procedures reach an agent without occupying its context on every request.

Pairing a mid-tier model with the right skill often beats a frontier model working from nothing.

---

*Built with [AdaL CLI](https://adalagent.ai/?utm_source=codingagents.md&utm_medium=referral&utm_campaign=benchmarks_models)*
