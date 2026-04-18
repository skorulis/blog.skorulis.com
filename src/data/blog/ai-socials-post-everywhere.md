---
title: "Getting AI to do my social posts"
description: "AI-socials: an AI-driven system that posts my work across multiple channels so I can skip the part of the internet I like the least."
pubDatetime: 2026-03-01T00:00:00.000Z
tags:
  - tools
  - automation
  - social-media
draft: false
ogImage: "images/ai-socials-og.png"
---

Sharing my work on social channels is not my idea of a good time. It's useful, people find my projects, and I get feedback. But the actual act of posting is out of my comfort zone. So I built something that does it for me.

**[ai-socials](https://github.com/skorulis/ai-socials)** provides some basic hooks to allow posting across multiple channels. Then I can just point an AI agent at that project and tell it to make a post, and the system handles formatting and publishing. Having my own tool removes a lot of the friction and actually encourages me to put things out there instead of letting them sit in a draft folder forever.

The catch: getting _onto_ those platforms in the first place.

**Blue Sky** and **Mastodon** both had APIs hooked up to crosspost, which worked well for text but when I tried to post a video the system only accepted GIFs. I ended up adding specific handling for Bluesky and probably need to do the same for mastadon.

**Twitter** moved their API behind a paywall. Fair enough from their side, but I'm not paying to post. I'd rather not use the platform than subscribe just to automate a few updates. So Twitter isn't in the mix.

**Reddit** locked down their API too, understandable given abuse and bots. For legitimate, light-touch automation like "post my blog post to a couple of subreddits," it still stings. In the end I had to use a headless browser to submit posts. It works, but it's brittle and feels like the opposite of what an API is for. I get why platforms are locking things down; it's just painful when you're trying to do something simple.

So far, ai-socials is doing what I need: posting to multiple channels without me having to open a web browser. If that sounds useful, the project is [on GitHub](https://github.com/skorulis/ai-socials) and is pretty quick to get running. This isn't meant to be a solution for everyone. It's a bespoke system tied to my workflow. AI wrote all the code in a few hours, and I don't care if it all gets thrown away. What's important is having a system that lets me move quickly.
