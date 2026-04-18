---
layout: post
title:  "Overview of the Forplay Library"
date:   2011-06-03 13:21:00
categories: forplay
comments: true
---

In my [previous post]({% post_url 2011-05-25-head-first-into-gwt-game-development %}) I built a simple helicopter game using the [Google Web Toolkit]. In the end I was not 100% satisfied with the process or the end result so after watching a [Google IO video about forplay] I decided to switch over to the [forplay library] and see if that suited me better. The library is only just getting started but so far I really like the abstraction and simplicity of it. As the game logic was already in place I wont be discussing much about the actual game except where I had to make changes to the original code.
You can play the [game here] and view the [source code here]

Installation
------------

Install the forplay library by simply checking out all the code from SVN into a directory and then use eclipse’s import function to get all the forplay projects. There are a few sample projects in there as well which were great for getting started and seeing how everything works.

Creating a New Project
------------------------

I simply created a new web application project. Turned app engine off and unchecked generate source.

![Forplay - New project]({{ site.baseurl }}/assets/blog11.png)

I then added forplay as a dependant project in Properties->Java build path and set up all my packages. Like GWT all my code is under the root package com.skorulis.heli2 so that they can be easily referenced.

![Forplay - package setup]({{ site.baseurl }}/assets/blog12.png)

You don’t need all these packages but I have followed the convention that images are in resources.images and html,java,flash are reserved for platform specific code. You will only need the platform specific packages if you plan to deploy to the platform.
At the least your game needs a class that implements Game and a class that implements one of the platform Game classes. I started with java and it was very easy to get going, the only hiccup I had was that I copied the java specific code from the hello project and forgot to change the resource directory. Once I had these 2 classes I was able to run the project and see a blank screen.
From here I pretty much copied and pasted all the original code from Heli and just fixed up the compile errors which for the most part didn’t require that much effort as my design was pretty compatible with the forplay library.

Problems Coming From GWT
--------------------------

Some classes that I was using in GWT don’t seem to exist in java when running as a java build and give link errors . The 2 that I found were CssColor and Random. CssColor I replaced with int colours and I built a replacement for the Random class to save me refactoring my code. I’m sure there are many more but these are the 2 that I found. Make sure when you convert your colours you make them argb otherwise nothing will draw. Also I no longer had access to the HTML buttons that I was using so I had to design my own button class, it’s pretty simple but does the job I needed.
With these problems solved I was able to run my game exactly as before but as a java app.

![Up and running]({{ site.baseurl }}/assets/blog13.png)

Making Your Game into a Web App
-------------

To make your app compatible as a web app you have to do a few extra things. Firstly you need a web.gwt file like in any GWT project. On top of this you need  a java class that extends HTMLGame  and a html file that calls the generated nocache.js file.  It was pretty easy to copy these files across from the Hello project.
It took a few goes to get the project to compile and I had to restart eclipse a few times but eventually I got the project up and running in firefox. At 8 frames a second.  This wasn’t particularly unexpected, the API did say that canvas was slow so the next step was to move over to a surface and see if I could get some cheap performance gains. Unfortunately this really didn’t help at all. I also tried changing from using one huge canvas that is redrawn every frame to using canvas slivers that are only redrawn when required. This also didn’t help much. In the end I gave up and just deployed and got a perfect 50 frames a second. Luckily it appears the bad performance was only caused by the debugger being attached. This is surprising as I didn’t notice as much of a problem when developing the game in GWT. The current recommendation is to do all your debugging in the java mode and then test the HTML version in production mode.
I had additional issues with my buttons when porting to web, the basic problem being that in java the resources are available immediately so the code was working without any callbacks. In HTML when the image was first drawn it was not ready so nothing was drawn. This was an easy problem to fix but took me a while to realise the cause.

Networking
----------
I thought since this was a new version I should add something new. I wanted to give the networking a go so I figured a high score table was in order. The concept is pretty simple, send your best score to the server and get an id along with a rank back. This was a lot more difficult than it should of been. I’m not going to go into detail here, but currently if you plan on making a game that is network heavy I would wait a bit for the API to solidify.

Integrating Into my Website
------------

In my original GWT game I was unable to find a way to separate the HTML display page from the images that the game required meaning I had to put the game at a non ideal URL. I was able to fix this issue with forplay as the resource path is specified in the HTMLGame path.

Round up
---------

All in all the Forplay library has simplified my game in some ways but also added new problems most of which I feel will diminish as time goes on. Developing in pure java is far more productive than always compiling to javascript but causes a bigger hiccup when it comes time to deploy. I believe this will diminish over time as the library matures. The library has a lot of potential if you are prepared to wait for the library to mature as you develop (I am) but otherwise you might want to look at something more stable and complete. The community behind it are also really helpful and you never have to wait long for someone to answer your question or give you feedback on your feature request.

What’s next
-----------

Forplay is designed to be able to distribute to Android and Flash, but the current status of the library indicates that this may not work so I decided to get the java/HTML versions up and running first before concentrating on other platforms. I’ll have details of my experience with these two in my next post.

[Google Web Toolkit]: http://code.google.com/webtoolkit/
[Google IO video about forplay]: https://www.youtube.com/watch?v=F_sbusEUz5w
[forplay library]: http://code.google.com/p/forplay/
[game here]: http://www.skorulis.com/flash/gwtgame/1
[source code here]: https://github.com/skorulis/heli2