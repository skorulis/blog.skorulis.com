---
title: "Adding a new entity to the world in Minecraft"
description: "Adding a new entity to the world in Minecraft"
pubDatetime: 2011-03-18T11:48:00.000Z
tags:
  - minecraft
draft: false
---
So you’ve decided to make a minecraft mod and wanted to add a new creature into the world. In this case it’s going to happen when you right click an item though this code would work form anywhere.

{% highlight java %}
public ItemStack onItemRightClick(ItemStack itemstack,World world,EntityPlayer player) {
   EntityChicken c = new EntityChicken(world);
   c.setPosition(player.posX, player.posY, player.posZ);
   world.entityJoinedWorld(c);
   itemstack.stackSize=0;
   return itemstack;
}
{% endhighlight %}

Simple as that.
