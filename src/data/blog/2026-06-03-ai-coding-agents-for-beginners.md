---
title: "AI coding agents for beginners"
description: "A quick walkthrough of Cursor (or similar tools) for building a landing page without leaving your project folder."
pubDatetime: 2026-06-03T00:00:00.000Z
ogImage: images/ai-coding-agents-for-beginners-og.png
tags:
  - ai
  - cursor
  - programming
draft: false
---

A lot of people hesitate to try AI tools beyond ChatGPT because it sounds like a big leap. This post is meant to show how small the jump actually is, and why it is worth making.

## Pick a tool (they all have a free tier)

For this walkthrough I am using [Cursor](https://cursor.com) as my editor of choice, but there are plenty of alternatives that work the same way: Claude Code, Codex in your IDE, Windsurf, and others. The free tier will not carry you through heavy daily use, but it is more than enough to mess around and see if the workflow clicks for you.

## Open a project folder

Once your tool is installed, create a new folder for whatever you want to build and open that folder inside the app. Cursor makes this especially painless: you can stay in the GUI and skip the command line for the steps below.

<figure class="not-prose my-6">
  <img src="/images/ai-coding-agents-open-project.png" alt="Opening a new project folder in Cursor" class="m-0 w-full border border-border" loading="lazy" decoding="async" />
  <figcaption class="mt-2 text-center text-sm text-foreground opacity-75">Open your project folder in the editor</figcaption>
</figure>

## Ask for something concrete

Then you ask it to do something. For this example I used the prompt below. I ran it in **Plan** mode, though **Agent** mode works too. Plan mode tends to ask a few clarifying questions and show you a short brief of what it intends to do before it starts changing files.

```
Create me a new landing page for an exercise app that I'm developing.
Use placeholders for the screenshots which I can replace later. Also use some placeholder copy.
Make sure the page looks professional and use a dark theme.
```

<figure class="not-prose my-6">
  <img src="/images/ai-coding-agents-prompt.png" alt="Entering a prompt in Cursor chat" class="m-0 w-full border border-border" loading="lazy" decoding="async" />
  <figcaption class="mt-2 text-center text-sm text-foreground opacity-75">Paste a prompt and send</figcaption>
</figure>

<figure class="not-prose my-6">
  <img src="/images/ai-coding-agents-plan.png" alt="Cursor plan mode showing steps before execution" class="m-0 w-full border border-border" loading="lazy" decoding="async" />
  <figcaption class="mt-2 text-center text-sm text-foreground opacity-75">Plan mode summarizes the approach before it runs</figcaption>
</figure>

When it finishes, I usually follow up with something like: “Load the webpage so I can see the result.” Cursor can open the page in a built-in browser so you can check the layout without hunting for files on disk.

<figure class="not-prose my-6">
  <img src="/images/ai-coding-agents-result.png" alt="Preview of a dark-themed exercise app landing page in Cursor" class="m-0 w-full border border-border" loading="lazy" decoding="async" />
  <figcaption class="mt-2 text-center text-sm text-foreground opacity-75">Preview the landing page inside the app</figcaption>
</figure>

## Why this beats copy-paste from ChatGPT

You can get similar output from ChatGPT, but the workflow often feels disconnected. You copy code out of the chat, paste it into files, and when you want another change you copy context back into the chat by hand.

Coding agents work inside your project folder. When you start a new chat, you do not need to re-explain the whole codebase; the tool can read what it already generated and apply the next change you ask for. That small difference compounds fast once you are iterating on a real page or app.

If you have been curious but unsure where to start, pick one tool, make an empty folder, and try the prompt above. You will have a dark landing page to tweak in minutes, and a clearer picture of whether you want this to be part of how you build things.
