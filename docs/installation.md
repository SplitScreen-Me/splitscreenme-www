---
id: installation 
title: Installation 
sidebar_label: Installation
---

* Download latest Nucleus Co-op from the [Github releases page](https://github.com/SplitScreen-Me/splitscreenme-nucleus/releases):

![alt text](https://github.com/SplitScreen-Me/splitscreenme-www/blob/master/static/img/Nucleusd.png?raw=true)

* Create a folder named "NucleusCo-op" or similar in the root of your C:/ drive, then add it to the [Microsoft defender exclusions](https://learn.microsoft.com/en-us/answers/questions/3187645/how-to-add-an-exception-to-windows-defender?forum=windows-all&referrer=answers) list.

* Copy the NucleusApp.zip to this folder then right click, properties -> unblock the zip (if needed) and extract the files there using [7-Zip](https://www.7-zip.org/) (password: `nucleus`), don't use the default Windows extraction tool as it can cause issues.

* Alternatively you can use the Installer.exe to extract the Nucleus Co-op files to the correct folder.

![alt text](https://github.com/SplitScreen-Me/splitscreenme-www/blob/master/static/img/Nucleusins.png?raw=true)

Note: Some Nucleus Co-op hook dlls and Goldberg emulator, used by Nucleus, can sometimes be detected as potential treats by Microsoft Defender and other anti-viruses or web browsers: this is 100% a false positive see [here](https://www.reddit.com/r/nucleuscoop/comments/g2k8j7/is_there_any_viruses/fnmfhbp/) and [here](https://gitlab.com/Mr_Goldberg/goldberg_emulator/-/issues/118) for more information. You have to allow Nucleus Co-op as an exception in Microsoft Defender before extracting. Do not overwrite older Nucleus Co-op versions files with new ones, make a clean install.

* Run NucleusCoop.exe, if you get a "Win32Exception the operation was canceled by the user" error when launching a handler in Nucleus Co-op files run every .exe file in there (like StartGame.exe for example) and accept the UAC prompts if they show.

  * Keep the following in mind about your Nucleus Co-op folder:

    * DO NOT place Nucleus Co-op inside a folder containing files for a game you wish to play.

    * Avoid placing it inside a folder that has security settings applied to it, such as Program Files, Program Files (x86).

    * Some handlers require the Nucleus Co-op folder to be located in the same drive as the game files.

    * If you are still unsure where to place the folder, the root of your main drive (C:/NucleusCo-op) is the best option.

:::tip How To Download Earlier Versions 
You can download earlier versions of Nucleus Co-op from [Lucas's](https://github.com/lucasassislar/nucleuscoop)
or [Zerofox's](https://github.com/ZeroFox5866/nucleuscoop/releases) GitHub repos. Note that these versions will not
support as many games and that we no longer provide support for earlier versions.
:::
