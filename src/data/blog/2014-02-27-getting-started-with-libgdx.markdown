---
layout: post
title:  "Getting started with libGDX"
date:   2014-02-27 10:21:00
comments: true
---
So today I created my first project with [LIBGDX]. Libgdx promised being able to deploy to iOS, android, desktop and webGL with the benefit that all the development is done on the desktop so no time is wasted deploying to devices or emulators. Once I installed all the [libgdx prerequisites] I tried to confirm that all platforms were building correctly. Desktop and HTML worked straight away, Android would not build initially because I had not downloaded the required version using the android SDK manager but worked afterwards. iOS built but would take some time to setup my provisioning so I decided to test it later. Since I had enough to test on the desktop and deploy anything I created to web for people to play with I decided to go straight to work and deal with android and iOS later.

Since I wanted to build the game around 3D graphics I found a tutorial for [drawing a cube on the screen] which gave me a good starting point. The performance in WebGL seemed terrible but I’m hoping this is simply because it is a debug version. I’m going to leave this issue until a later date.

But a cube was never going to be enough. The next thing I needed was to be able to load a custom model from a file. Luckily the [next tutorial in the series] covers that. One thing that wasn’t covered was where to put the assets. I found that the recommended way is to put the assets in the android assets directory which the desktop project links to so the files are not duplicated. So far this seems to be working.

This entire learning process has taken me a few hours, much less than the weeks it took me to write a model loader and create the openGL calls to display it so in that regard the library is looking pretty good. Now to sit down and start designing my game so I have something to work towards.

[LIBGDX]: http://libgdx.badlogicgames.com/
[libgdx prerequisites]: https://github.com/libgdx/libgdx/wiki/Prerequisites
[drawing a cube on the screen]: http://blog.xoppa.com/basic-3d-using-libgdx-2/
[next tutorial in the series]: http://blog.xoppa.com/loading-models-using-libgdx/