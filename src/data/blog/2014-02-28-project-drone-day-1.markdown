---
layout: post
title:  "Project Drone: Day 1"
date:   2014-02-28 11:21:00
categories: java
comments: true
---
In my [previous post]({{site.baseurl}}/2014/02/27/getting-started-with-libgdx.html) I setup a [libgdx] project that rendered a simple model to the screen. The next piece I want to work on is creating some units for my game. I could find someone to help me with the modelling and may do this in the future but I want to be able to do this myself so I can better explain what I need if I decide I want to hire someone to do modelling work.

Since I know very little about modelling this means spending a lot of time watching tutorials. It’s strange moving into a completely new domain. Usually with programming even when moving to a new language I understand what tools are available so I look for tutorials or examples specific to what I want to accomplish. But doing that here may mean I miss out on something that will make my life easier so it’s back to basics.

After a small amount of work I had created a very simple and untextured base that I could use for one of my units. I know it doesn’t look like much but it’s a place to get started.

![Up and running]({{ site.baseurl }}/assets/base1.png)

The next step was to build a turret piece that could be placed on top of this base. This too I made as a very simple model to get things up and running quickly.

![Up and running]({{ site.baseurl }}/assets/turret1.png)

So now that I had some basic models my next task was to join them together. At this point I really wanted to jump in and start creating my class hierarchy but first I needed to read through the libgdx docs a bit more so I didn’t make some major design issues.  I found out about the AssetManager class which greatly reduced the need to manage model loading and after that it was a matter of being able to put the turret on top of the base. I’ve managed to do this despite there not being any concept of a scene graph in libgdx. Currently I’m updating child positions when the parent moves but I think this will cause me lots of problems later on. As you can see scaling the turret has messed up the lighting but I’m not sure why. Below is where the game is at by the end of day 1.

![Up and running]({{ site.baseurl }}/assets/combined1.png)

[libgdx]: : http://libgdx.badlogicgames.com/