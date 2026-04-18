---
layout: post
title:  "First steps into unit testing"
date:   2011-03-29 12:11:05
categories: programming
comments: true
---
As much as I hate to admit it. I do have a lot of holes in my development experience. Of all these many realms I don’t think any gap is larger than my experience with unit testing. Which currently stands at none. I put this cause of this down to 3 simple things.

1. I ( like many developers) would much rather be writing code than writing tests.
2. While I was a university there were never any classes specifically about testing. All I got told was to run my code frequently while writing it.
3. (the big one) No company I’ve worked for has ever forced me to write unit tests.

So I haven’t really had anything pushing me to write unit tests, but lately I’ve been seeing more and more posts on the wonder of unit tests and TDD so I thought I would take the plunge and see what all the fuss is about.

This decision of course was a few months ago and so far nothing has come up that has made me want to actually start writing the tests. (Un)Luckily a bug was just been reported in one of my products from work. The product is an ad serving widget for iPhone that has caused me endless grief during my time working on it due to scope creep, bug reports that often only have 1 sentence and the fact that I’m not used to working on libraries that are used by people who can’t just come and talk to me if something goes wrong.

The bug came in late on Friday and I wasn’t in the mood for a rush to fix so I figured I would take it home over the weekend and see if some simple unit tests could flush out the bug.

Turns out this was possibly the worst project to get started on with unit tests. iPhone unit tests come in 2 varieties “Logic Tests” which work like normal unit tests but can only test certain things (and crashed as soon as I tried to test anything of use) and “Application Tests” which run alongside your application but can only run on the device. After reading through [this post] (and wasting 3 hours) I decided that for what I was doing it just wasn’t worth the effort. The post also mentions [Google toolbox for mac] which was also useless to me as I had just upgraded to xcode 4 which isn’t supported.

So in the end I gave up on frameworks completely and opted for just calling the tests directly. Not the ideal solution, but I figured that the result would be the same and I really wanted to see “PASSED” coming up in my log.

So I wrote a few tests all designed around flushing out the memory issues I was having. None of them took that much effort to write nor much in depth knowledge of the code which was the result I was after. After a few tests that passed I found a few of them that were causing crashes and managed to fix up some memory allocation bugs that I had introduced in the previous quick fix version.

End result:

* Did the unit tests find the bug I was after. **Yes**
* Did the unit tests flush out some additional less obvious bugs. **Yes**
* Do I feel safer about making changes to the code. **Yes**
* Will bugs be easier to track down in the future. **Probably**
* Did it save me time: Short term, **probably not**, long term, **hopefully**.
* Am I inspired to write unit tests for other projects. **A little**

Before my next round of changes to the library (and I’m sure there will be one) I will probably expand on the unit tests to check a few of the values that the library generates to make sure I don’t break anything else. After that I hope to move on and do the same for some android projects. I just hope the frameworks there are a little easier to deal with.

[this post]: http://www.cocoawithlove.com/2009/12/sample-iphone-application-with-complete.html
[Google toolbox for mac]:      https://github.com/google/google-toolbox-for-mac
