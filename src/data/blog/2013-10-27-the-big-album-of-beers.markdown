---
layout: post
title:  "The Big Album of Beers"
date:   2013-10-27 13:21:00
categories: beer
comments: true
---

Today after a long break I finally finished the basic version of my [big album of beers search page]. For over a year now I’ve been photographing every beer I drink and putting it into a Facebook album called the big album of beers. As this album has grown it has gotten sometimes difficult when looking for new beers to remember if I’ve already had the particular beer. This is compounded often by hazy memories of having the beer in the first place.

What I’ve done is create a javascript page which displays the contents of the album with an additional search field. Unlike Facebook it loads all the images at once rather than in blocks which makes finding what I’m after a lot easier. This concept could be made to work for any Facebook album but the parsing of the meta data would need to be changed to match the content.

For those who are interested, here’s the technical details:

All the code is available at: [https://github.com/skorulis/blackbird]

The list of beers is pulled from Facebook using a ruby script. The script takes the caption from the photo and breaks it into name, alcohol percentage, comment and rating. I did this as an offline script opposed to javascript for 2 reasons:

1. I don’t have to deal with authorisation tokens and logins on the web page. My ruby script doesn’t need code for this, when I want to update the list I simply get a new token from the [Facebook graph explorer].
2. If the beer text doesn’t fit my expected formatting the ruby script will crash and I can work through any problems until it works, if this was online the page would break every time I put in a bad title for a beer.

I’m using [ember.js] to handle pretty much all the javascript on the page. I’ve used ember for the rest of my site and found it fairly simple once you get over the initial steep learning curve. That said I still have a few issues yet to be solved:

1. The search can be a bit slow and since it’s on the UI thread causes a pause on the page. It’s acceptable right now but I would prefer to kick this onto a background thread. I’m sure this is possible but is going to be more effort than it should be.

2. I would really like to have this available as part of my main site so I can keep all the site navigation and other goodies. I definitely don’t want to have to combine the javascript from here with my main javascript as this will bloat my main site over time. I also don’t want to have any copied code. A html frame may solve my problem but not in the nicest way. What I really want is to have a sub ember application running inside my main one. Anyone know if something like this is possible?

Next steps are to add a details page for each beer to keep a bit more information when I have it. Also some more detailed filters would be nice and possibly a sort order.


[big album of beers search page]: http://skorulis.com/beer/index.html
[https://github.com/skorulis/blackbird]: https://github.com/skorulis/blackbird
[Facebook graph explorer]: https://developers.facebook.com/tools/explorer
[ember.js]: http://emberjs.com/