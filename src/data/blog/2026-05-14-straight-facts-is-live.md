---
title: "Straight Facts is live"
description: "Shipping a calm daily facts app for iOS, and how I ended up with 1,000 hand-checked facts (with sources)."
pubDatetime: 2026-05-14T00:00:00.000Z
ogImage: images/straight-facts-is-live-og.png
tags:
  - ios
  - apps
  - swift
draft: false
---

I just shipped a new iOS app called [Straight Facts](https://apps.apple.com/us/app/straight-facts-daily-trivia/id6767988129). The pitch is simple: a low-stress way to read something interesting once in a while. No hype voice, no “you will not believe what happens next.” I tried to keep the copy straight to the point and to steer clear of the sensational “urban legend” stuff that sounds exciting until you go looking for evidence.

## One fact at a time

The product side is intentionally minimal. You get one fact at a time, you can dig into links if you want more, and that is more or less it. The hard part was not the UI. It was lining up enough content to hit my launch goal of **1,000 facts** without turning the app into a random fact generator.

## Plan A: Ask the model for facts

My first instinct was to have an AI write the facts. It starts out fine, then the novelty drops off fast. You keep nudging it for “more” and you get variations on the same handful of themes. Worse, it is surprisingly bad at **links**. It will happily invent plausible-looking URLs or point at pages that do not say what the fact claims. For something that is supposed to be trustworthy, that was a non-starter.

## Plan B: AI as fact-checker, not author

So I flipped the shape of the problem. Instead of generating facts from scratch, I built a small ingestion pipeline: I feed in candidate facts, and the pipeline tries to fact-check them and surface sources. I still use that setup today.

It helps, but it is not magic. A lot still ends up on my desk for manual verification. Search engines and scrapers do not love automated queries, so “find a good primary source” sometimes comes back empty even when the underlying claim is fine. The model can suggest a direction; it cannot replace actually reading the page.

## Plan C: Start from something humans already wrote well

Eventually I leaned on [the public JSON feed for r/todayilearned](https://www.reddit.com/r/todayilearned.json) as a seed. It is a goldmine: titles are already written to be clear, punchy, and factual-ish. Everything still goes through the same pipeline for verification and deduping, but the starting material is unusually good. Even when I was injesting via other mechanisms I often found that there was already a TIL post with the same content which shows that there is a lot of overlap.

If any of that sounds like your kind of rabbit hole, [Straight Facts is on the App Store](https://apps.apple.com/us/app/straight-facts-daily-trivia/id6767988129). Free, no ads, no subscription. I would love to hear what you think.
