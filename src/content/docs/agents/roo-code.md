---
title: Roo Code
description: "Archived VS Code agent with Code, Architect, and Debug modes — succeeded by Kilo Code"
sidebar:
  order: 23
  badge:
    text: Archived
    variant: caution
---

## Overview

| | |
|---|---|
| **Company** | Roo Code Inc |
| **Type** | VS Code extension |
| **Status** | **Archived May 2026 — no longer developed** |
| **Successor** | [Kilo Code](/agents/kilo-code/) |
| **Pricing** | Free — bring your own key |
| **Repository** | [RooCodeInc/Roo-Code](https://github.com/RooCodeInc/Roo-Code) |

## Status: Archived

Roo Code is no longer under active development. There are no security patches, no support for newly released model providers, and no bug fixes.

If you are choosing an agent today, choose something else. [Kilo Code](/agents/kilo-code/) began as a community fork of Roo and is where the work continued, so it is the natural migration path if you want to stay in your editor.

Existing installs keep working. That is not the same as being safe to build on.

## What It Did

Roo Code was a VS Code extension for agentic coding, built around explicit modes rather than one general assistant:

- **Code** — implementation
- **Architect** — design and planning
- **Debug** — diagnosing failures

It supported bring-your-own-key across 50+ providers, and reached roughly 24,200 GitHub stars and 1.56 million VS Code installs before archival.

The mode idea outlived the project. Splitting an agent by the job it is doing, rather than making one prompt cover everything, is now common across the field.

## Migrating

[Kilo Code](/agents/kilo-code/) carries the same editor-centric approach forward, under Apache 2.0, with zero-markup BYOK and 500+ models. [Cline](/agents/cline/) is the other well-supported VS Code option.

---
