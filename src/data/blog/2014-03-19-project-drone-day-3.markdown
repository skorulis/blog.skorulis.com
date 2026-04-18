---
layout: post
title:  "Project Drone: Day 3"
date:   2014-03-19 16:21:00
categories: java
comments: true
---

Now that I had 2 drones moving around on the screen I decided that the world looked a little sparse with just a black background. I wanted to put some sort of simple backdrop which would later become my game levels. For now all I needed was a simple arena built out of a grid. Since everything is on a single level I figured I could optimise by having a single quad for the floor with models for each section of wall.

First up was building the floor. I started using the [ModelBuilder] to create a single quad. I was initially confused why it was only visible from the bottom but then remembered back face culling and reversed the order of the points so it would show up from the top. The next step was being able to put a tiled texture onto the floor. Getting a single texture was easy:

{% highlight java %}
Material material = new Material();
Texture texture = new Texture(Gdx.files.internal("data/rock.png"));
material.set(new TextureAttribute(TextureAttribute.Diffuse, texture));
{% endhighlight %}

But tiling seemed a bit harder. I had to create a Mesh and use a deprecated method in ModelBuilder to create my tiled Model from that.

{% highlight java %}
public Model createFloor(int w, int d) {
	final Mesh mesh = new Mesh(true, 4, 6, new VertexAttribute(
		Usage.Position, 3, "a_position"), new VertexAttribute(
		Usage.TextureCoordinates, 2, "a_texCoords"));
	mesh.setVertices(new float[] { 0, 0f, 0, 0, 0,
		0, 0f, d, 0, d,
		w, 0f, d , w,d,
		w, 0f, 0, w, 0
	});
	mesh.setIndices(new short[] { 0, 1, 2, 2, 3, 0 });
	Material material = new Material();
	Texture texture = new Texture(Gdx.files.internal("data/square.png"));
	texture.setWrap(TextureWrap.Repeat, TextureWrap.Repeat);
	material.set(new TextureAttribute(TextureAttribute.Diffuse, texture));
	Model model = ModelBuilder.createFromMesh(mesh, GL20.GL_TRIANGLES , material);
	model.manageDisposable(texture);
	return model;
}
{% endhighlight %}

With my tiled floor done I moved onto the relatively easy task of adding a surrounding wall. I made the wall by having a single rectangular prism model and creating multiple instances in each square required. There would be more efficient ways to do this but for now it’s not really a problem.

![Up and running]({{ site.baseurl }}/assets/walls1.png)

Now that I had walls and a floor though it meant moving my little drones into the centre. This would be easy to do but is also ultimately a waste of time, a better idea was to combine this into creating a player controlled drone and actually get somewhere on having an actual game. For this I created a Player class which ties keyboard controls into drone movement. It’s very simple for now but should be flexible enough to handle everything I needed. This immediately raised 2 problems:

1. With the isometric view and the ability to rotate the camera the concept of up didn’t always match up to what was expected.
2. The camera wasn’t in any way centred on the player.

Both of these issues pointed to the need to create an isometric camera built for my game. This was actually simpler than expected. [This post] gave me a nice overview so I simply switched to an Orthographic camera and set the position to be slightly offset from the player with a fixed direction. This wont be good enough for the final version since it needs smoother motion tracking but for now it lets me move on to more interesting things.

At this point I had all of the building blocks I needed to start building my game. I have a lot of different game concepts that I could start with. The key is picking the one that I can get working fairly quickly. Time to sit down and have a long think about this before I get back to coding.



[ModelBuilder]: https://libgdx.badlogicgames.com/nightlies/docs/api/com/badlogic/gdx/graphics/g3d/utils/ModelBuilder.html
[This post]: http://www.badlogicgames.com/wordpress/?p=2032