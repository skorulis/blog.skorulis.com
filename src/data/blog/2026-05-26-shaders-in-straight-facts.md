---
title: "Shaders in Straight Facts"
description: "How a black hole effect from Max Idle turned into fifteen custom Metal backgrounds for tagged facts in my daily trivia app."
pubDatetime: 2026-05-26T00:00:00.000Z
ogImage: images/shaders-in-straight-facts-og.png
tags:
  - ios
  - apps
  - swift
  - shaders
draft: false
---

While building [Max Idle](https://max-idle.com/), I dropped in a [black hole shader](https://codepen.io/mathemartica/pen/EaxvqEK) as part of the game’s look. It worked well enough that I started wondering whether the same trick could fit [Straight Facts](https://www.skorulis.com/straightfacts/), my calm daily trivia app. The UI is intentionally plain. A little motion behind the text felt like a nice way to add delight without changing the product’s personality.

## From CodePen to Metal

The port was easier than I expected. With a bit of help from AI, the GLSL from the CodePen was converted to Metal, and I wrapped it in a small SwiftUI view so backgrounds could be dropped in like any other component. No grand architecture, just “here is a shader, show it full screen.”

Straight Facts already had a background system that cross-fades as you scroll between facts. That made the integration almost boring in a good way: I could register another background implementation and only activate it when certain conditions matched. No rewrite of the scroll stack, just one more participant in the cross-fade.

## Four black holes and a problem

There was one catch. I only had about four black-hole-related facts in the database. In production, almost nobody would ever see the effect.

The fix was obvious: add more shaders, and add rules that decide when each one appears. I did not want a single generic animated backdrop on every fact. The point was to reward specific topics with something that felt chosen, not random.

## Fifteen backgrounds (and counting)

Next came a [cloud shader](https://codepen.io/sujitkoji/pen/GgpbJdj) for weather facts, tweaked so it still looked good in dark mode. Then a custom music-note background (drawn in code rather than ported from the web). Then a [fire shader](https://codepen.io/elugens/pen/KwgGNpe). One shader led to another, and before long I had fifteen distinct backgrounds. The app still reads as minimal when you are just skimming facts, but every so often the screen quietly does something special.

<figure class="not-prose my-8 flex flex-col items-center">
  <video
    src="/videos/straight-facts-shader-example.mp4"
    class="m-0 w-full max-w-[280px] rounded-xl border border-border shadow-sm"
    controls
    playsinline
    preload="metadata"
    width="280"
    height="608"
    aria-label="Straight Facts shader backgrounds while scrolling between facts"
  >
    Your browser does not support the video tag.
  </video>
  <figcaption class="mt-3 max-w-[280px] text-center text-sm text-foreground opacity-75">Scrolling between facts with matching shader backgrounds</figcaption>
</figure>

## The hard part is pairing, not coding

The technical work was straightforward compared to the design work. The interesting question is what pairs well with a fact’s tags. I could flood the app with generic gradients and call it done. That would be easy to maintain and forgettable to use.

Instead I have been trying to match mood and subject: space facts get the black hole, weather gets clouds, music gets the notes, and so on. It takes more time per shader, and more time thinking about rules, but that is also what makes it feel like part of Straight Facts rather than a screensaver bolted onto a reader.

[You can see it in action in version 1.3 in the App Store](https://apps.apple.com/au/app/straight-facts-daily-trivia/id6767988129). Keep an eye out while you scroll. You might only notice the backgrounds on every tenth fact, which is roughly the point.
