---
layout: post
title:  "Generating javadoc"
date:   2011-06-07 13:21:00
categories: java
comments: true
---

So you need to generate javadoc for your package but don’t want to read through all the available options? The following command generates javadoc for everything in “yourpackage” which is assumed to be in the src directory and puts it in a folder named doc. Simple.

javadoc -sourcepath src/ -d doc “yourpackage”