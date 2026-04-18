---
layout: post
title:  "A new direction"
date:   2014-02-27 13:21:00
categories: meta
comments: true
---

1 week ago I landed back in Sydney after a few years living in London. Since I am now unemployed and have fairly low living expenses I decided that it’s a great opportunity to spend some time working on my own personal project.

Since I’ve always wanted to make games and I have experience in mobile development I reasoned that a game for mobile was my best bet. Initially I had been toying around with building my entire game in objective-C targeting iOS only and then converting core pieces to C so that I could use it with other platforms. While this was fun and I learnt a lot it was ultimately leading to very slow development. I was essentially having to rewrite a new 3D engine and I just can’t do that quick enough to develop a game at what I would call a reasonable pace. And then at the end of that I would have to do an engine rewrite to move to other platforms and then have to separate out all the iOS specific code.

So I started looking into using a third party library or engine. First up of course was [Unity] since it has the biggest following. I had a bit of a play but felt it was targeted too much at designers instead of developers. Too much was defined in the UI and not in code which just isn’t how I like to work. The next thing I found was [libgdx]. Unlike Unity the library was free and open source and let me have a familiar “main” method where my program starts. The language is java which I am slightly apprehensive about using for a game but the library has ways to minimise garbage collection to prevent hiccups and for what I want I don’t need extreme performance.

So today I’m trying to create a new project that can be deployed to multiple platforms. Hoping not too much time is wasted in the various setup bugs I imagine encountering.

[Unity]: https://unity3d.com/
[libgdx]: https://libgdx.badlogicgames.com/