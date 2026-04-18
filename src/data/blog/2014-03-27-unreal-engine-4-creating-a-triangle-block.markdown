---
layout: post
title:  "Unreal Engine 4: Creating a triangle block"
date:   2014-03-27 16:21:00
categories:  ue4
comments: true
---

Today I was having a play around with [UE4] attempting to creating a fairly basic level. One of the pieces I wanted in the level was a triangle block like a cube chopped in half as below:

![Triangle 1]({{ site.baseurl }}/assets/triangle1.png)

This was my first attempt which I did by creating a cube brush and then using the geometry editing weld tool to join some of the top vertices together. After that I triangulated and optimized to get the shape I wanted. While this looked ok when I turned this into a static mesh I started getting a lighting error “Object has wrapping UVs”. Skipping the triangulate and optimize step stops this error occuring but then the shape ends up with texture artifacts

![Triangle 2]({{ site.baseurl }}/assets/triangle2.png)

I had one more idea which was to use a subtractive brush at a 45 degree angle

![Triangle 3]({{ site.baseurl }}/assets/triangle3.png)

Finally I got what I was after. But I like this method the least as I have to manually line up the brushes and in this case I think I took 1 extra pixel off which may not be noticeable but I like things to be mathematically correct. Since I’m creating static meshes I might try building them in maya and see if I get better results there. I’m pretty new at this so if anyone has any better ideas of how to do this then let me know.

[UE4]: https://www.unrealengine.com/blog/welcome-to-unreal-engine-4