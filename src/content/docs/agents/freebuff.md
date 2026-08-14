---
title: Freebuff
description: "A free terminal coding agent funded by in-CLI ads instead of subscriptions"
sidebar:
  order: 22
---

## Overview

| | |
|---|---|
| **Company** | Codebuff (YC) |
| **Type** | Terminal CLI + web app |
| **Pricing** | Free — funded by text ads in the CLI |
| **Models** | DeepSeek V4, MiMo 2.5 Pro, GLM-5.2, MiniMax M3 |
| **Repository** | [CodebuffAI/freebuff](https://github.com/CodebuffAI/freebuff) |
| **Website** | [freebuff.com](https://freebuff.com/) |

## What It Does

Freebuff is a coding agent that runs in your terminal and costs nothing. You describe what you want and it edits your code.

The business model is the unusual part. Instead of a subscription or your own API key, Freebuff shows text ads in the CLI and covers inference itself. That makes it one of the few genuinely free paths to an agentic coding workflow, and it also explains the model lineup: it leans on cost-efficient open-weight models rather than frontier ones.

There is also FreeBuff Web for building full-stack apps in the browser.

## Key Strengths

- **Free, with no key required**: no subscription and no BYO API key
- **Sub-agents**: nine specialists, including a file picker, a code reviewer, and browser use
- **Model variety**: different models handle different stages of the workflow
- **Terminal ergonomics**: file mentions, bash mode, and web research built in
- **Optional deep thinking**: can hand harder reasoning to a ChatGPT account

## Trade-offs

- **Ads in your terminal** are the price, and that is a real one for some teams
- **Cloud backend**: your prompts and code context go through Freebuff's service, so it is a poor fit for restricted codebases
- **Model privacy**: some of the supported DeepSeek models collect data for training — check before pointing it at anything sensitive
- **Limited country availability**
- Cost-efficient models are not frontier models, so the hardest multi-file work goes better elsewhere

## Where to Find Skills

Skills are ordinary files, so a free agent can use the same ones a paid agent does. The largest open catalogue is [atskills.one](https://atskills.one), with 60,000+ skills — see [@skills](/protocols/atskills/) for how referencing works.

## Best For

- Trying an agentic coding workflow without paying for one
- Students, hobby projects, and side work
- Open-source code where a cloud backend is not a concern

---
