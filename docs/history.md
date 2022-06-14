---
id: history 
title: History
---

# SplitScreen.Me History

## The Beginning

The story of SplitScreen.Me starts with a splitscreening tool, made by the Brazillian game and software developer Lucas
Assislar in August/September 2012, only a few weeks after Borderlands 2's release. The app was originally created to
split-screen Borderlands 2, as there was not any way to play that game split-screen on PC at the time. The app was
called "Borderlands 2 SplitScreen Tool" at the time; fast-forward a year in August 2013 Lucas made
this [post](https://steamcommunity.com/app/49520/discussions/0/864977025916708574/). The app already had support for
multiple games, and because of that, the app name "Borderlands 2 SplitScreen Tool" didn't really fit anymore. Therefore
the project was renamed to SplitPlay. SplitPlay was really buggy, so a lot of people were still using the original tool
for Borderlands 2.

In 2014 Lucas Assislar made his first [Youtube video](https://www.youtube.com/watch?v=rFLCTIJHxQI) about the project,
showcasing Borderlands 2 in split-screen. 4 days later he made
another [video](https://www.youtube.com/watch?v=GBdW1qzRUbQ) showcasing Borderlands: The Pre-Sequel. The video was a
hit, and is currently sitting at around 68k views.

## Nucleus Co-op

Behind the scenes Lucas started working on another rebranding of the app, this time it was going to be called Nucleus
Co-op. Lucas made version 1 of Nucleus Co-op in October 2015, but didn't like the result. He rebuilt it in version 2.0,
and in December 2015 [this version](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-1) was
released. The release was very buggy and only had support for the two previously mentioned Borderlands games. In terms
of functionality, Nucleus Co-op was a downgrade compared to SplitPlay. But the groundwork for the project was made.

Lucas continued to improve Nucleus Co-op over the next few months, and new features were added in each release. Perhaps
the first notable update came in September 2016 with the release
of [Alpha 4(September 26. 2016)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-4). Along with the
already supported games from the previous version, this release brought support(although very buggy) for Borderlands 1,
and a new fundamental change to how the games' [handlers](/docs/handlers/) were made. In earlier version of Nucleus, the
handlers were made using C#, and were only available inside the system. This was problematic, since it meant that if you
wanted to add a game, you had to [fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the
entire app in order to add it. Alpha 4 however brought the JavaScript engine into the mix, which meant that you could
simply make a JavaScript handler and add it to the app. This meant that it would be easier for others to help with the
project. It also made it easier for Lucas to add handlers, or make small changes to the existing ones without changing (
and potentially messing up) the main application.

[Alpha 5(October 11. 2016)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-5)
and [Alpha 6(October 19. 2016)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-6) focused on
improving Borderlands 1 support, along with quality of life upgrades to the
app. [Alpha 7(March 21. 2017)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-7) redesigned the
UI, brought close to perfect splitscreening of all the Borderlands games released at the time, Saints Row 3 got added as
working, and the javascript engine got improved. This was also around the time where the first people started joining in
and making their own handlers.

On August 9. 2017, r-mach shared his addition of don't starve together in
a [reddit post](https://www.reddit.com/r/nucleuscoop/comments/6sl4k3/added_dont_starve_together_pc_split_screen/). A few
days after this reddit post, r-mach reached out to Lucas, and they decided that Lucas would continue on the app, and
r-mach would be doing the web stuff. r-mach created the old website nucleuscoop.com, and he later created a basic
API for handlers. He also created a wiki together with Lucas. Even though the API was 99% finished, the wiki and API
never saw the light of day.

[Alpha 8(August 27. 2017)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-8) brought a big change
as well, arguably even more so than Alpha 4, d1maxa and [r-mach](https://github.com/r-mach) made some improvements, and
added more games. Several bugs were also fixed. This version broke Saints Row 3, but it added 4 new games to the list,
and the first Cod game was added to the "What kinda works" list.
In [Alpha 9(August 5. 2018)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-9) the engine got
reworked once again, The game handlers now needed to be downloaded from an external website, unlike the included
javascript(.js) handlers that had been before. At this time Lucas Assislar's latest release is
the [Alpha 10(February 1. 2019)](https://github.com/lucasassislar/nucleuscoop/releases/tag/v2.0-alpha-10) version, which
had a reworked UI. With this version admin privileges were not needed at app startup(unlike before), and in his own
words "XInput library will setup the game's window, for WAYYY faster scaling". The handlers also got changed in this
version, now the .js handler file would have to be placed inside a .nc(zip-file) file in order to be read by Nucleus.

Lucas had long been struggling with mental health problems and personal matters. And largely because of this he stopped
working on the project after the release of Alpha 10 and went silent. R-mach, the main website developer at the time,
also went silent after that release, also due to personal matters. This is the reason the old wiki and API, which I
mentioned earlier, never got finished.

## Enter SplitScreenDreams

On the surface it seemed like Nucleus Co-op had died, and there was little to no information regarding where the project
was at, and where it was headed. But behind the scenes two enthusiasts had started working individually on making split
screen handlers/scripts, for the app. They soon found out about each other, and they made a private Discord server
called "SplitScreenDreams" on April 24. 2019.

One of the two enthusiasts, called Talos91, invited another enthusiast called dr.oldboi(dr.oldboi#8752 on Discord) to
the server very shortly after. These three started working together on making split-screen handlers for Nucleus Co-op.
The SplitScreenDreams server started growing, and Talos91 would often post guides on reddit about how to play new games
in split-screen with Nucleus. At the time of writing this (August 04. 2021), SplitScreenDreams has made handlers for
over 500 games, 400+ of which are published on the hub, and downloadable from within the Nucleus Co-op app. These
handlers were made thanks to co-operation among almost 100 people, but the majority of the handlers, were made by
co-creator of SplitScreenDreams, Talos91.

## The Nucleus Co-op Zerofox Mod

Most of [todays supported games](https://www.reddit.com/r/nucleuscoop/comments/opu0eg/list_of_nucleus_coop_supported_games/) however, would not be possible if it weren't for Zerofox bringing new life into the
project, with his fork of the Alpha 8 version, called "Alpha 8 Zerofox Mod".

Zerofox had first seen the split-screen project back in it's infancy just before it's rebranding from SplitPlay to
Nucleus Co-op. He stumbled upon it when trying to find games he could play in split-screen on his PC. At the time (as
mentioned earlier) SplitPlay was very much in early development, so he didn't look any further into it at the time.
Fast-forward to 2019, he went on a quest again to find a way to split-screen games. This is when he stumbled upon one of
Talos91's reddit posts. The post was a guide to playing Dead Rising 2 in split-screen. There he referenced Nucleus Co-op
which Zerofox remembered from his earlier encounter with the app. And because of this guide Zerofox had his first real
experience with Nucleus Co-op. It was after this that Zerofox really got into Nucleus Co-op. In July 2019, after reading
Talos' post, and reading up more of his guides/posts, Zerofox read about a "secret" Discord channel where this stuff was
being worked on. He sent Talos a PM on reddit saying that he wanted to help out, to which Talos responded with an invite
to the SplitScreenDreams Discord server.

After trying out Nucleus and learning more about it, Zerofox saw there were a few major barriers. Having modded games
and consoles since his childhood, and a few big mods behind him, he thought that he could fix those barriers relatively
easily. So he started working on a few quality of life upgrades to the app. That was originally all that he intended to
do. However as he got to using Nucleus more and more, and talking with the other members of the SplitScreenDreams
discord, he started to realize the potential Nucleus Co-op had. So he expanded the "mod" by adding a few thing here and
there according to community feedback and his own ideas. Those "few things here and there" added up to a lot of things,
and with a lot of support from the community he branded his mod "Zerofox Alpha 8 Mod" and released it on August 1. 2019.

In this relatively short time, Zerofox had made it possible for the community to add support for a lot of games that
were previously impossible to split-screen through Nucleus Co-op. However there were a few things missing, and multiple
mouse and keyboard support was one of them. There had been attempts earlier by Lucas to add keyboard and mouse support to Nucleus, but it only allowed for 1 KBM, not  multiple. And besides, it was quite buggy and didn't always work
as intended. While Zerofox was working on Nucleus Co-op he heard
about [Universal Split Screen](https://universalsplitscreen.github.io/)(USS). He took a look at it, and was instantly
amazed. While I was interviewing Zerofox he said: <cite>"The code, design and execution was very impressive. It was more
of the "big picture" idea I had for Nucleus. I truly believed USS was the future."</cite>
USS had support for multiple keyboards and mice, which was a dream come true for Zerofox. Not only that, the tool was
generally powerful with a lot of other powerful features. The problem was the setup, even though USS was more powerful
than Nucleus in a lot of aspects, it required a much more tedious setup. Zerofox wanted the functionality and power of
USS, but the convenience of Nucleus Co-op. So that is what he set out to do with his mod, he found a new source of
inspiration in USS to improve his own Nucleus Co-op mod.

r-mach, the same guy who made the NucleusCoop.com website, joined the SplitScreenDreams Discord some time after Zerofox.
He had heard someone talking about this mysterious "SplitScreenDreams" Discord server in the official Nucleus Co-op
server, then called "Distro". When r-mach found out about the server he immediately wrote to Lucas explaining that
someone had continued splitscreening games with Nucleus Co-op, and urged him to come back and see for himself. In the
message he wrote <cite>"DUDE THERE'RE PEOPLE DOING AMAZING THINGS, LETS COME BACK IN!"</cite> Lucas didn't answer the
message.

In October/November 2019, after some time developing the mod and having added a lot of new features, Zerofox started
talking with r-mach. Zerofox talked to r-mach about wanting to take the mod further and build something new from scratch
as a standalone, new and improved... and under a different name. r-mach suggested combining forces with USS. Which
brings us to the story of how USS and developer Ilyaki joined the Nucleus Co-op team.

## The Origins of Universal Split Screen (USS)

Going a bit back in time, to before Nucleus Co-op started gaining traction again, another developer called Ilyaki was
also looking into split-screen. This other developer also came from the modding scene. In 2018 he had made a mod for
Stardew Valley, the mod redirected controller input between instances, much like Nucleus Co-op. He even added KBM
support, and moved onto porting the mod to Terraria, as it was running under the same engine. After a brief stunt
called [Battle Royalley](https://www.nexusmods.com/stardewvalley/mods/3199)(a battle royale mod for Stardew Valley), he
once again returned to split-screening games. Ilyaki had heard of Nucleus Co-op before, but he was more interested in
getting support for multiple keyboards and mice than controllers, and with his background with keyboard and mouse
modding he had a good starting point. So he started to work on his own project, Universal Split Screen, also know as
USS. Ilyaki had initially thought it would be as simple as splitting input as he'd done before and sending input to each
game with something like AutoHotKey. It turned out to be much harder than that, much thanks to the overcomplicated input
model of Windows, and the different methods used for different games. He was able to get some rather limited results by
just forwarding Windows input messages around, but it didn't seem to be a magic formula he had hoped for. Luckily Ilyaki
made a breakthrough when he started using something called [EasyHook](http://easyhook.github.io/). With EasyHook's
function hooking, he was able to easily modify the input that applications were recieving. And after about 3 months of
testing, he arrived
at [USS 1.0.0(July 16. 2019)](https://github.com/UniversalSplitScreen/UniversalSplitScreen/releases/tag/v1.0.0). He was
finally sucessful in splitting games, and assigning keyboards and mice to the instances with his app. Ilyaki made a
post([Universal Split Screen released](https://www.reddit.com/r/localmultiplayergames/comments/ce8mij/universal_split_screen_released/))
on the [r/localmultiplayergames](https://www.reddit.com/r/localmultiplayergames) subreddit on July 17. 2019, telling
about USS and what it had achieved so far. Less than 2 hours later Talos91 commented on the post asking what was the
advantages over Nucleus Co-op, to which Ilyaki responded <cite>"The main advantages are multiple
keyboard/mouse/controller support, and compatibility with many games."</cite> Soon thereafter Talos91 invited him to
join the SplitScreenDreams Discord, where Ilyaki met the split screen community. Ilyaki had joined SplitScreenDreams
before Zerofox, but when Zerofox joined, and presented his mod... Ilyaki saw the potential. ZeroFox's mod had incredible
automation features and simple user setup, compared to USS's entirely manual approach.

## Nucleus Co-op and USS join forces

After r-mach suggesting Ilyaki and Zerofox should join forces, Zerofox started talking to the developer of USS, Ilyaki.
Ilyaki agreed to help out with Zerofox's mod, and they have been working together ever since. Ilyaki has since brought
multi-KBM support to Nucleus Co-op, along with a lot more features for handler authors.

## Rebranding to Splitscreen.Me

r-mach started working on the new website(splitscreen.me) and the hub(splitscreen.me/hub). After it's creation lots of
contributions have been made to the website by the community. Today the website has documentation which is ever
expanding and the hub has more than 450 public handlers, and close to 500,000 handler downloads.

Before we end this story, we would like to thank the entire community for helping develop, script, suggest features,
report bugs, manage Discord and Reddit servers, post guides, and everything else you do to make this community so much
better! The story of Splitscreen.me is far from over, and we hope you will help us make a comeback in split screen
gaming for PC. Join the split screen revolution!

#### More coming soon...

#### A big thanks to all the people(listed below) who helped piece together the history of Splitscreen.me, this would not have been possible without you guys!

> Written by *Snailed lt*
>
> In association with: *dr.oldboi*, *Lucas Assislar*, *Zerofox*, *r-mach*, *Gaz*, *Ilyaki*, *anonymous SplitScreenDreams creator*
