---
layout: post
title:  "Project Drone: Day 2"
date:   2014-03-02 16:21:00
categories: java
comments: true
---

After getting things started yesterday my goal today was to be able to have 2 drones which were able to target and face their turrets at each other. For now I’m not going to deal with building a scene graph to see if I can get away without one, later on I’ll probably take the code I put in my DroneUnit class and generalise it for use in other places.

Adding a second unit was easy as expected, which at least lets me know that my design isn’t broken yet. Initially I tried using the setToLookAt method in Matrix4 to point but this caused quite a few problems. Luckily I had done the same thing in another project and the code was fairly easy to transfer. One thing that caused me problems was the order of operations. Rotation then scale was causing problems but rotation then multiplying by a scale matrix was fine. In the end I stuck with scaling then rotating which for now looks ok.

So a pretty small amount of changes but at least I completed what I set out to. And also got a start of a node based system for scene management.

![Up and running]({{ site.baseurl }}/assets/facing1.png)
