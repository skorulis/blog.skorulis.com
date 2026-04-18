---
title: "Building an LLM-driven game playtester"
description: "Using an LLM to play a mobile game via a thin HTTP API instead of the UI, with minimal instructions, to get human-like feedback on pacing and clarity."
pubDatetime: 2026-03-10T00:00:00.000Z
tags:
  - gamedev
  - llm
  - tools
draft: false
ogImage: "images/llm-game-playtester-og.png"
---

I've been building a [mobile game centred on finding and collecting items](https://github.com/skorulis/ios-items). It's still very early, but I know one of the big challenges will be fine-tuning the pacing. I don't want to rely only on my own playthroughs or a handful of testers, so I set out to build an **LLM-backed playtester** that could run through the game and report back like a fresh player would. This isn't a repeatable unit test system, this is about getting qualitative feedback.

**Goal: play like a new user.** The system gets minimal explanation. The main instruction is to try to earn the achievements in the game. It doesn't get a design doc or a list of mechanics. It has to infer how things work from what it sees, the same way a new user would. That constraint is deliberate. If the game is confusing or repetitive, I want the AI to say so.

**HTTP API instead of the real UI.** I didn't want the LLM to interact with the app UI directly. Parsing screens, buttons, and layouts would add a lot of complexity and brittle, vision-heavy logic. So I added an HTTP server that exposes the same data and actions the human UI uses. The playtester talks to this API and receives semi-structured JSON. The AI gets state and choices in a clean form and responds with decisions (e.g. which action to take next). No screenshot analysis, no OCR, no UI tree parsing. Just request/response with JSON.

**Picking a model was tricky.** The first version used the OpenAI API. It worked, but I was worried about burning through credits with long or repeated runs. I switched to **Ollama** locally to remove cost. The downside was quality: the local model kept inventing outcomes. It would report progress or achievements that never happened, or describe actions it didn't take. For a playtester, that kind of fabrication is worse than useless.

I knew Open Router offered some free larger models, so I tried [Arcee's Trinity Large (preview)](https://openrouter.ai/arcee-ai/trinity-large-preview:free). That's been much more consistent. It follows the actual game state and reports what it did and what it saw, without the confabulation I got from the local setup.

**The kind of output I get** looks like this:

```
## What Did Not Work Well
- **Unclear item types**: No indication of what constitutes a "common" item for common1 achievement
- **Resource bottlenecks**: Unable to purchase final upgrade for upgrade5 achievement due to resource constraints
- **Missing mechanics**: Sacrifice system unlocked but not utilized due to unclear requirements
- **Slow progression**: Items100 requires creating 100 items, which becomes repetitive
- **No research initiation**: Research achievements unlocked but no clear way to start research
```

That's exactly what I was after. A lot of these points are because I haven't exposed those features through the HTTP service yet. The value is that the playtester is flagging the same gaps a human would: where things are unclear, where progression feels slow, and where mechanics exist but aren't discoverable. In theory I could pipe this feedback into a developer LLM; for now I stay in the loop and use it to prioritise what to fix or expose next.

**Scaling is an open question.** Right now the game has only a handful of concepts, and the AI doesn't always find everything I expect. As the game grows, there will be more systems, more achievements, and more branches. I'm not sure how well a single LLM playtester will cope when the option space gets large. I've already tuned the runner to cut down token usage, so it might come down to making the non-LLM side smarter (e.g. better summarisation of state, or breaking a run into focused sub-goals) so the model isn't overwhelmed. Something to revisit as the game expands.

I'll discuss the architecture in more detail in a follow up post.