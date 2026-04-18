---
layout: post
title:  "Food Nutrition"
date:   2016-01-10
categories: [ios,nutrition]
comments: true
---

Today I started working on a new nutrition app. Yes, I know there are already hundreds out there but for the most part they're pretty shit. Also I really want to get some more personal apps in the store. The concept of this app right now is still in its infancy, but I'm looking at it mostly as a way to display in depth information about ingredients.

The immediate question to be answered is can I get the information I need. I actually found a really good resource with the [USDA](http://ndb.nal.usda.gov/ndb/search). Not only does it have detailed nutrition for over 8789 food items but it has a nice JSON API. Annoyingly it's rate limited so it was going to take a few hours to get all the data.

I broke the fetching up into 2 ruby scripts. The [first](https://github.com/skorulis/usda-nutrition-scraper/blob/master/getFoods.rb) gets all the available foods and the [second](https://github.com/skorulis/usda-nutrition-scraper/blob/master/getNutrition.rb) gets the full detail for each food item. To stop from hitting the rate limit I had the second one stop after a given number of iterations and then just ran it throughout the day.

Once I had the information I was immediately amazed at how much I had. What started as 850K of food items ended up being 98.5MB once I filled in all the details. Bear in mind this is a total of 673,525 nutrition entries. I really didn't want to add the complexity of having an external service for now so I needed to get this size down. JSON is always a wasteful format and it seemed a good candidate for relational data so I wrote a [small ruby script](https://github.com/skorulis/usda-nutrition-scraper/blob/master/fillDB.rb) to convert the JSON into an SQLite database. This took the size down to 29MB. Still larger than I would like but feasible to be bundled with an app. 

The full source code can be found [here](https://github.com/skorulis/usda-nutrition-scraper). You'll have to spend time fetching the database yourself though.