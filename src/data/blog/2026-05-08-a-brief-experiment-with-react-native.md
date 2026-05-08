---
title: "A brief experiment with React Native"
description: "Trying cross-platform with a daily facts app, and why I went back to SwiftUI for polish."
pubDatetime: 2026-05-08T00:00:00.000Z
ogImage: images/a-brief-experiment-with-react-native-og.png
tags:
  - ios
  - react-native
  - swift
draft: false
---

I am pretty entrenched in Swift. I love the language and the ecosystem, and I reach for it without thinking. The one thing that nags at me is Android. I like shipping software people can use, and picking Swift means quietly accepting that a whole platform is off the table.

So I decided to try React Native. React is already my default for websites, which made the jump feel smaller than learning Kotlin or Flutter from scratch. In theory I could keep one mental model for UI, share a bunch of logic, and stop treating Android as the thing I'll get around to in the future.

## A tiny app, a high bar

For the experiment I wanted something with almost no product design overhead: a daily facts app. One idea per day, vote if you liked it, move on. Because the concept was so simple, I felt the only way it could stand out was polish: calm typography, lots of whitespace, and interactions that feel intentional rather than “good enough.”

I used Cursor for the first pass. It came back with something that worked but looked rough. After a few more prompts the layout matched what I had in my head, which was encouraging right up until I used it for real. Something was wrong but I couldn't put my finger on it. It just didn't feel like an iOS app I would ship.

## What SwiftUI made obvious

Rebuilding the same screen in SwiftUI turned the vague feeling into a checklist. The vote buttons had a selected state with a border that looked jaggy instead of smooth. Transitions between states felt stiff compared with what I expect from native controls. Opening and closing settings lagged just enough to notice when I wanted it to feel instant. Touches on buttons did not give the little bit of feedback I am used to on iOS, so taps felt uncertain.

I am sure most of that is fixable in React Native if you dig into the right libraries, timing, and platform APIs. When I asked Cursor to chase the settings delay, the “fix” path ended with Expo crashing on my machine, which was a good reminder that “solvable” and “pleasant afternoon” are not the same thing.

## What I am optimizing for

The larger issue is not whether those problems can be solved. It is that I do not want to spend energy auditing every control to make sure it behaves the way my finger expects. On iOS with SwiftUI, a lot of that comes almost for free, or at least feels familiar out of the box. Trading that for parity work across two platforms did not feel like a win for how I like to build.

So for now I am back to iOS-only side projects. I would rather ship one app that feels excellent on the hardware I care about most than two apps that are fine but never quite disappear into the background the way a great native UI does.

## Same screen, two stacks

<div class="not-prose my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4">
  <figure class="m-0 flex flex-col">
    <img src="/images/daily-facts-react-native.png" alt="Daily facts app built in React Native" class="m-0 w-full border border-border" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-center text-sm text-foreground opacity-75">React Native prototype</figcaption>
  </figure>
  <figure class="m-0 flex flex-col">
    <img src="/images/daily-facts-swiftui.png" alt="Daily facts app rebuilt in SwiftUI" class="m-0 w-full border border-border" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-center text-sm text-foreground opacity-75">SwiftUI rebuild</figcaption>
  </figure>
</div>
