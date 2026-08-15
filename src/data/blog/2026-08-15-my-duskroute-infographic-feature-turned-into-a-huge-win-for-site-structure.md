---
title: "My duskroute infographic feature turned into a huge win for site structure"
description: "How a statistics heatmap I built for fun accidentally solved DuskRoute's crawler problem, and why the most important pages are now one click from a poster."
pubDatetime: 2026-08-14T00:00:00.000Z
ogImage: images/2026-08-15-my-duskroute-infographic-feature-turned-into-a-huge-win-for-site-structure-og.png
tags:
  - seo
  - duskroute
  - web
draft: false
---

One problem I have been struggling with on [DuskRoute](https://duskroute.com) is making the site friendly to crawlers. I solved it in part by adding suburb lists to the top-level specials pages, but I still had nothing targeting the long-tail keywords. Nobody was going to find "happy hours in Alexandria" through a page that never linked there.

## Too many pages, not enough links

The awkward part is the scale. I have around 90 keywords, and giving every one of them a linked page for each of a thousand suburbs is not something a crawler (or a human) is going to enjoy. Picking which of those pages deserve a link is hard, and I did not want to fill my content pages with a wall of internal links.

## The feature I already had

As it turns out, I had already built the perfect solution and just had not noticed. I found that Google was already indexing very specific hour-of-the-day happy hour pages from the [Sydney statistics page](https://duskroute.com/sydney/statistics). Pages like [Tuesday happy hour at 6pm](https://duskroute.com/sydney/tuesday-happyhour?startMinute=1080&endMinute=1080) were getting crawled because the heatmap linked to them.

All I needed to do was swap those links so crawlers hit the top-level specials pages instead.

## Food and drink for free

With that in place, I realised the statistics page also lists the most common food and drink mentions. Cocktails, beer, steak, burgers: they were already sitting there as a nice little infographic. Turning those into links was trivial.

## Two jobs, one page

Now the [statistics page](https://duskroute.com/sydney/statistics) does two jobs at once. It is still an interesting consumer view (a poster of happy hours by the numbers), and it is a quiet way to make sure all of the most important pages are actually linked.
