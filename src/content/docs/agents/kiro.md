---
title: Kiro (AWS)
description: "AWS's spec-driven agent — requirements and design before code, as a CLI and an IDE"
sidebar:
  order: 17
---

## Overview

| | |
|---|---|
| **Company** | AWS |
| **Type** | CLI + IDE (Code OSS based) |
| **Pricing** | Commercial, with a free tier |
| **Protocol** | MCP |
| **Config Formats** | AGENTS.md, spec files |
| **Website** | [kiro.dev](https://kiro.dev) |

## What It Does

Kiro is AWS's entry into agentic coding, and its distinguishing idea is spec-driven development. Rather than going from a prompt straight to a diff, Kiro converts what you asked for into structured requirements, writes a design, and breaks the work into tasks before it edits anything.

Requirements come out in EARS notation, a controlled syntax for writing testable requirements. The effect is that vague prompts get pushed back on instead of quietly guessed at, which is where most agent output goes wrong.

It ships as both a CLI and an IDE built on Code OSS.

## Key Strengths

- **Specs before code**: requirements, design, then implementation tasks — the plan is a reviewable artifact
- **EARS notation**: requirements written in a form you can actually test against
- **Pushes back on vague prompts**: the structure is the point, not overhead
- **Both surfaces**: a CLI and a full IDE
- **AWS integration**: fits teams already in that ecosystem

## Trade-offs

- The ceremony costs time, and it is overkill for a one-line fix
- Newer than the established agents, so the ecosystem around it is smaller
- Strongest inside AWS-shaped workflows

## Where to Find Skills

A spec-driven agent still benefits from procedures it did not have to derive. The largest open catalogue is [atskills.one](https://atskills.one), with 60,000+ skills — see [@skills](/protocols/atskills/).

## Best For

- Teams that want the plan reviewed before code is written
- Regulated or safety-relevant work where requirements must be traceable
- Larger features where jumping straight to a diff usually goes wrong

---
