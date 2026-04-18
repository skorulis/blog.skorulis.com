---
title: "1 month with Cursor"
description: "A practical month-in-review using Cursor as the primary AI coding tool on a SwiftUI iOS game."
pubDatetime: 2026-03-27T00:00:00.000Z
tags:
  - tools
  - ai
  - gamedev
  - swiftui
draft: false
---

I've been using Cursor as my primary AI tool for the last month while building an [iOS game in SwiftUI](https://github.com/skorulis/ios-items).

Overall, the experience has been positive. Cursor's logs say it is writing around 1500 accepted lines of code per day for me, which lines up with how productive the month has felt. I am not using it to vibe code, I still read what it generates and I often make manual edits when quality drops in specific areas. Most days, my bottleneck is not typing code, it is deciding what the next feature should be.

I have set up a few rules in my codebase, but honestly the AI usually picks up on existing patterns without much help. That said, I think I should lean harder into rules. Right now I am often too eager to jump in and fix things manually, which is faster in the short term and probably slower in the long term.

I am also using Cursor for inspiration. A lot of the ideas it gives me feel flat, but the randomness still has value. Even when a suggestion is not good, it often nudges my brain toward a better direction.

In total I have used about 320 million tokens, and Cursor estimates that at $123.84 of usage. I do not have on-demand enabled, so it is still staying inside the $20 plan from my perspective.

I have seen occasional periods where Cursor becomes very slow to respond. I am not sure whether that is deliberate throttling or technical issues on the service side. It is not a huge blocker because I can shift to another task while waiting, but it is frustrating not knowing what is happening.

A bigger issue is that twice I have seen auto model selection appear to switch what model is being used under the hood. The output quality suddenly drops and the generated code becomes unusable. LLMs are non-deterministic, but I can usually predict prompt behavior well enough to work quickly. When this model shift happens, I have to relearn how to prompt, which is expensive context switching.

I am sticking with Cursor for another month. The upside is still strong enough that I want to keep investing in the workflow, especially if I can get more disciplined about rules and reduce manual patching.
