---
title: "The search for a good domain name"
description: "How hunting for a short .com led me to build a Swift domain scanner, check about 20,000 options, and land on duskroute.com."
pubDatetime: 2026-07-16T00:00:00.000Z
ogImage: images/2026-07-16-the-search-for-a-good-domain-name-og.png
tags:
  - swift
  - domains
  - tools
draft: false
---

Working on a new project, I hit the point where I needed a domain and decided I wanted a `.com`. Finding a short one turned out to be much harder than expected.

## The .com swamp

The `.com` space is extremely congested, which is hardly a surprise. Coming up with random ideas and checking them one by one gets time-consuming fast.

There are existing tools, but I couldn't find one which fit how I wanted to search nor would give me the volume of lookups I needed.

With `.com`, the job is basically to invent as many candidates as you can until you find one that is both available and makes some sort of sense.

## Building a scanner

So I built a [domain scanner in swift](https://github.com/skorulis/domain-scanner) that generates options and then checks whether they are available.

The approach was conceptually simple: feed it a few keywords that resonated with the product, then mash those words together in as many combinations as possible. The goal was to surface names nobody would have thought to type in by hand.

That does produce a lot of available domains. The downside is that most of them are gibberish. I added a best-effort readability check to weed out some of the noise. It is not perfect, but it helps.

After each run I could see what new options it found and record any that weren't terrible.

## After 20,000 tries

I ended up going through about 20,000 domains before settling on [duskroute.com](https://duskroute.com). I am not sure I love it, but it is nicely readable and works for a happy hour bar finder.
