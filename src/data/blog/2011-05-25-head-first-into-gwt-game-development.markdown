---
layout: post
title:  "Head first into GWT game development"
date:   2011-05-25 11:48:00
categories: gwt
comments: true
---

So I wanted to write a 2D web game but couldn’t decide between flash or javascript and then I heard about GWT which seemed to give me everything I wanted. I’ve never been one to really read too much before jumping in so after installing and reading half an example I started programing my game. I didn’t really want to make a good game, just something that would let me know if I could use GWT to make a decent game in the future.
For anyone else who is like me and just wants to get straight into making a game, here’s a quick introduction into making a canvas based game using GWT and the problems that I ran into. If you’re even more hasty, here’s the [source code] so you can just get it building and running.

For a look at the game in action go [here]

Installation
-------------
[Look here]. If you’re used to installing plugins then just pick the link that matches your eclipse version and install everything.

Creating a new project
----------------------

When you create a new project, leave the “Generate GWT project sample code” option checked. If you don’t, your project probably wont build and you’ll
spend half your time trying to work out what’s missing. Once you have something up and running you can start getting rid of the files you don’t need. Uncheck “Use Google App Engine” as it will just add a bunch of files that you don’t need.

![Setup]({{ site.baseurl }}/assets/blog1.png)

Adding a canvas into the page to draw our game on is fairly simple:

{% highlight java %}
final Canvas canvas = Canvas.createIfSupported();
if(canvas==null) {
	RootPanel.get().add(new Label("Canvas is not supported by your browser"));
	return;
}
RootPanel.get().add(canvas);
{% endhighlight %}

Game loop
-----------

For animation I’ve used the com.google.gwt.user.client.Timer. In my first attempt I used the java.util.Timer which caused a “Plugin failed to connect to Development Mode server” error to appear. It took me a while to work out that even though the code compiles, certain java classes are not supported and the resulting javascript code is not generated. Using the GWT timer worked fine.

![Timer error]({{ site.baseurl }}/assets/blog2.png)

{% highlight java %}
timer = new Timer() {
	@Override
	public void run() {
		update();
	}
};
timer.scheduleRepeating(20);
{% endhighlight %}

With the game loop in place it was pretty easy to make the rest of the game. I already had a lot of java game code from Android and applet projects I had worked on so it was simply a matter of filling in the game logic. This is where I found that GWT really shone. The generated code ran fast and I could quickly add buttons or debug labels in and around my game using HTML components to get things going. I think this would have taken me about twice as long to do the actual game components if I was using javascript and I don’t think my javascript code would have been nearly as fast.

Things that caused me pain
---------------------------

For anyone like me who keeps their code in separate packages you’ll run into my next issue pretty quickly, you have to explicitly define what packages
need to be translated. Look in the gwt.xml file that should be in the root package of your app and add what you need there.

Mostly when developing I found that simply refreshing the page was enough to see my new build in action, but at times this seems to crash the browser and I would have to restart both the browser and eclipse before I could continue.

When making a canvas I had to set the z-index to -1 so that buttons in front would be clickable.

Deployment
------------

What an epic pain in the ass this was. To get a deployable version of the app I had to press the “GWT compile project button” (the red toolbox) otherwise it would still be looking for the debug server. The deployable build is in the same place as the debug build.

After getting this sorted I had the problem that I wanted to place the game content in a different directory to the html file which I planned on generating in line with the rest of my website which meant my images couldn’t be loaded. By this point I just wanted to get something done so I conceded and just used a static URL that is in the wrong spot. I need to take a better look at resource loading before I tackle this issue.

Even after this it took me about 5 deployments before I got everything in place. This really isn’t nearly as simple as deploying a flash swf which is probably one of the low points.

Things I still haven’t worked out
--------------------------------

So far I’ve been generating all my components in java and adding them onto the page. I think my code would be a lot cleaner if I was doing the reverse but have not been able to find a way to do that.

What’s next
------------

The next step is to move over to using the [forplay library]. It’s a fairly new library,
but it opens the possibility of being able to port the code directly to android and flash which would be a nice 3 for 1 scenario.

[source code]: https://github.com/skorulis/heli
[here]: http://www.skorulis.com/Content/gwt/heli/Heli.html
[Look here]: https://developers.google.com/eclipse/docs/getting_started?csw=1
[forplay library]: https://github.com/fredsa/forplay