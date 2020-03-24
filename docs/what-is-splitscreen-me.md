---
id: what-is-splitscreen-me
title: What is Splitscreen.me?
---

What is Splitscreen.me?

Here's a short [Youtube video](https://www.youtube.com/watch?v=jbituCgu3Bc) that explains an older version of splitscreen.me.

## General Information
Splitscreen.me is a free and open source tool for Windows that allows split-screen play on many games that do not initially support it. The app was originally created by Lucas Assis, Zerofox later joined in and added a ton of new features and improvements to support a lot more games. Ilyaki later joined in and brought multiple keyboards/mice support and more great features to the table. The app is currently being developed and updated by these three [Lucas Assis](https://github.com/lucasassislar), [Zerofox](https://github.com/ZeroFox5866) and [Ilyaki](https://github.com/ilyaki). 
Also the further development of the app wouldn't have been possible without all the amazing contributions and hard work from the SplitScreen Dreams Discord members.

The website was originally created by [r-mach](https://github.com/r-mach), and is now open sourced as well.

## History
Splitscreen.me started out as a splitscreening tool by the Brazillian game and software developer Lucas Assis in August/September of 2012, only a few weeks after Borderlands 2's release. The app was originally created to splitscreen Borderlands 2, as there was not any way to play that game splitscreen on PC at the time. The app was called "Borderlands 2 SplitScreen Tool" at the time; fast forward a year in August of 2013 Lucas made this [post](https://steamcommunity.com/app/49520/discussions/0/864977025916708574/). The app already had support for multiple games, and since the app name "Borderlands 2 SplitScreen Tool" didn't really fit any more, the project was renamed to SplitPlay. But SplitPlay was really buggy, so a lot of people were still using the original tool for borderlands 2.

In 2014 Lucas Assis made his first [Youtube video](https://www.youtube.com/watch?v=rFLCTIJHxQI) about the project, showcasing Borderlands 2 in splitscreen. 4 days later he made another [video](https://www.youtube.com/watch?v=GBdW1qzRUbQ) showcasing Borderlands: The Pre-Sequel. The video was a hit, and is currently sitting at around 66k views.

Behind the scenes Lucas started working on another rebranding of the app, this time it was going to be called NucleusCoop. Lucas made version 1 of NucleusCoop in October of 2015, but didn't like the result. He rebuilt it in version 2.0, and that version got released in December of 2015 the [first version](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-1) was released. The release was very buggy and only had support for the two previously mentioned borderlands games. In terms of functionality, NucleusCoop was a downgrade compared to SplitPlay. 

Lucas continued to improve NucleusCoop over the next few months, and new features were added in each release. Perhaps the first notable update came in September of 2016 with the release of [Alpha 4(Sep 26, 2016)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-4). This release changed brought support(although very buggy) for Borderlands 1, and a new fundamental change to how the games [handlers](https://www.splitscreen.me/docs/handlers/) were made. In earlier version of Nucleus, the handlers were made using C#, and were only available inside the system. This was problematic, since it meant that if you wanted to add a game, you had to [fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the entire app in order to add it. Alpha 4 however brought the JavaScript engine into the mix, and now you could simply make a JavaScript handler and add it to the app. This meant that it would be easier for others to help with the project, and it also made it easier for Lucas to add handlers, or make small changes to the existing ones without changing the main application. 

[Alpha 5(Oct 11, 2016)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-5) and [Alpha 6(Oct 19, 2016)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-6) focused on improving Borderlands 1 support, along with quality of life upgrades to the app. [Alpha 7(Mar 21, 2017)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-7) redesigned the UI, brought close to perfect splitscreening of all the Borderlands games released at the time, Saints Row 3 got added as working, and the javascript engine got improved. This was also around the time where the first people started joining in and making their own scripts. 

On Aug 9, 2017, r-mach shared his addition of don't starve together in a [reddit post](https://www.reddit.com/r/nucleuscoop/comments/6sl4k3/added_dont_starve_together_pc_split_screen/). A few days after this reddit post, r-mach reached out to Lucas, and they decided that Lucas would continue on the app, and r-mach would be doing the web stuff. r-mach created the old website nucleuscoop.com, and he later created basic a basic API for handlers. He also created a wiki together with Lucas. Even though the API was 99% finished, the wiki and API never saw the light of day, due to reasons that will explained later. 

[Alpha 8(Aug 27, 2017)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-8) brought a big change as well, arguably even more so than Alpha 4, d1maxa and [r-mach](https://github.com/r-mach) made some improvements, and added some games. Several bugs were also fixed. This version broke Saints Row 3, but it added 4 new games to the list, and the first Cod game was added to the "What kinda works" list. In [Alpha 9(Aug 5, 2018)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-9) the engine got reworked once again, The game handlers now needed to be downloaded from an external website, unlike the included javascript(.js) handlers that had been before. At this time Lucas Assislar's latest release is the [Alpha 10(Feb 1, 2019)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-10) version, which for once more had a reworked UI. With this version admin priveleges were not needed at app startup(unlike before), and in his own words "XInput library will setup the game's window, for WAYYY faster scaling". The handlers also got changed in this version, now the .js handler file would have to be placed inside a .nc(zip-file) file in order to be read by Nucleus.

Lucas had long been struggling with mental health problems, and personal matters. And largely because of this he stopped working on the project after the release of Alpha 10 and went silent. R-mach, the main website developer at the time, also went silent after that release, also due to personal matters. This is the reason the old wiki and API mentioned earlier never got finished.

On the surface it seemed like NucleusCoop had died, and there was little to no information regarding where the project was at, and where it was headed. But behind the scenes two enthusiasts had started working induvidually on making splitscreen handlers/scripts, for the app. They soon found out about each other, and they made a private discord server called "SplitscreenDreams" April 24, 2019. 

One of the two enthusiasts, called talos91, invited another enthusiast called dr.oldboi(dr.oldboi#8752 on Discord) to the server very shortly after. These three started working together on making splitscreen scripts for NucleusCoop. The splitscreen server started growing, and talos91 would often post guides on reddit, on how to play new games in splitscreen with Nucleus. By the end of 2019 they had over (number) working, and at the time of writing this, the group has made handlers for over 250 games, 162 of which are published on the hub. These handlers have been made by cooperations between over 200 people, but the majority of them was made by co-creator of SplitscreenDreams talos91.

Most of todays supported games however, would not be possible if it weren't for Zerofox bringing new life into the project, with his fork of the Alpha 8 version, called "Alpha 8 Zerofox mod".

#### More coming soon...

#### A big thanks to all the people(listed below) who helped write about the history of Splitscreen.me, this would not have been possible without you guys!

Written by *Snailed lt* in association with: *Talos91*, *dr.oldboi*, *Lucas Assislar*, *Zerofox*, *r-mach*, *Gaz*, *Ilyaki*, *anonymous SplitscreenDreams creator*
