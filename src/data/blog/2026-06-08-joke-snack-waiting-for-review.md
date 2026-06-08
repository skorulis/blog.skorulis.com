---
title: "Joke Snack waiting for review"
description: "Three days after cloning Fact Snack into a joke app, Joke Snack is in App Store review. The refactor was trickier than expected, but the next Snack should be much faster."
pubDatetime: 2026-06-08T00:00:00.000Z
ogImage: images/2026-06-08-joke-snack-waiting-for-review-og.png
tags:
  - ios
  - apps
  - branding
draft: false
---

In [my last post](/2026/06/05/doubling-down-on-a-failing-app-idea/) I wrote about spinning up a clone of my facts app to show jokes instead. I said I expected it to take two or three days. I am happy to report that three days later, I have a new app ready for the store.

## Harder than it looked

The code changes were a little harder than I expected. On paper, the two apps are not that different. In practice, they use different core data types (`Fact` vs `Joke`), so I had to make everything generic.

I wasted some time trying to build the whole thing around views with type parameters. That sounded elegant in theory and turned into a pile of complexity I did not actually need. Lesson learned: reach for generics when they earn their keep, not when they make you feel clever.

## The upside

The great news is that if I wanted to do this again, it should take under a day. The hard work is already done. I could spin up a dirty jokes app or a riddle app and expand my reach.

Because I already had the Fact Snack landing page, creating [a Joke Snack version](https://www.skorulis.com/jokesnack/) was mostly copy and paste with a few word swaps. Same format, same structure, much less time.

## Building the Snack brand

I am sticking with the "Snack" brand for now. The idea is to carve out a little identity across the apps. I think one more sibling app and I will add links between them all for cross-promotion. Two lonely apps feels a bit early for that; three starts to feel like a family. I'm not completely wedded to this branding, I don't know if it has any user appeal, but it seemed like a better idea than having no umbrella branding at all.

## Now we wait

At this point it is just a matter of waiting for Apple to approve the submission. Then I get to watch the numbers roll in and find out whether this one performs as badly as the facts app.

I am cautiously optimistic, which is probably the wrong attitude given how Fact Snack has gone so far. But at least this time I will have a second data point to compare against. That was always the point.
