---
id: faq
title: Frequently Asked Questions and Troubleshooting
sidebar_label: FAQ
---
### 1.- What is Nucleus Co-op?

<div class="embed-container">
  <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/jbituCgu3Bc" 
          frameborder="0" 
          allow="accelerometer; 
                 autoplay; 
                 encrypted-media; 
                 gyroscope; 
                 picture-in-picture" 
          allowfullscreen="allowfullscreen">
  </iframe>
</div>

[Nucleus Co-op](https://github.com/SplitScreen-Me/splitscreenme-nucleus) is a free and open source tool for Windows that allows split-screen play on many games that do not initially support it, the app purpose is to make it as easy as possible for the average user to play games locally using only one game copy and one PC. The app was originally created by [Lucas Assis](https://github.com/lucasassislar). The developer [Zerofox](https://github.com/ZeroFox5866) later took over and added a ton of new features and improvements to support a lot more games. [Ilyaki](https://github.com/Ilyaki) later joined in and brought multiple keyboards/mice support, extended hooks support and more great features to the table. Finally [Mikou27](https://github.com/Mikou27) added a new beautiful overhauled user interface with support for themes, game covers and screenshots, among other many quality of life improvements and scaling bug fixes.

[R-mach](https://github.com/r-mach) is the creator and developer of the SplitScreen.Me [website](https://hub.splitscreen.me/) that hosts all the available Nucleus Co-op game handlers.

The further development of the app wouldn't have been possible without the amazing contributions and hard work from all the Split Screen Dreams Discord members (which include the devs mentioned above) that made all the new Nucleus Co-op game handlers and continue to test the app, make new discoveries and game handlers to support even more games, among them: [Talos91](https://hub.splitscreen.me/user/eeL7HAz8zJovChWw4), [PoundlandBacon](https://hub.splitscreen.me/user/AdiAjSyfZPMvu3a4M), [dr. old.boi](https://hub.splitscreen.me/user/dPRj3q6kFtT4HvMGg), [Pizzo](https://hub.splitscreen.me/user/HEgozNi3MNvhAmWfi) and many more.

### 2.- How does Nucleus Co-op work?

Essentially Nucleus Co-op [symlinks](https://en.wikipedia.org/wiki/Symbolic_link) and opens multiple instances of the same game files (sometimes [mutex](https://en.wikipedia.org/?title=Mutex&redirect=no) killing is required for that, among other methods) that will only answer to one specific gamepad (we do this via Nucleus Co-op custom xinput libraries or xinput plus dlls) and connects those instances via LAN or online multiplayer emulation (Goldberg, Nemirtingas emulators etc.), all while making sure the game windows have focus so they can be playable at the same time with multiple controllers or that the instances are playable even in the background. Nucleus then resizes, removes borders and repositions the game windows so you can have synthetic split-screen to play locally with your friends!

Note that Nucleus Co-op does not add multiplayer or co-op to single player games, the game needs to already have some form of online or LAN multiplayer, or another way to connect the instances, like via mods for example (e.g. Skyrim Together).

### 3.- Which games can be split-screened using Nucleus Co-op?

Nucleus Co-op has support for more than 450 games! see [which games are supported?](/docs/games).

### 4.- Where do I download Nucleus Co-op?

You can download latest version from [Github](https://github.com/SplitScreen-Me/splitscreenme-nucleus/releases). Download the compiled .zip release, don't download the source code zip if you just want to use the app. Version 2.1.1 is the latest version recent handlers are created for, please avoid using older versions (like Alpha 8 and Alpha 10) as they are outdated now.

### 5.- How do I use Nucleus Co-op?

See [Installation](/docs/installation) and [How to use](/docs/usage).

### 6.- Where should I place the Nucleus Co-op folder?

You can place the folder wherever you like as long as you keep the following in mind:

* **DO NOT** place it inside a folder containing files for a game you wish to play.

* Avoid placing it inside a folder that has security settings applied to it, such as program files, program files (x86).

* Some game handlers require the Nucleus Co-op folder to be located in the same drive as the game files.

* If you are still unsure where to place the folder, the root of the drive your games are installed on is usually the best option. For example C:/NucleusCo-op.

### 7.- Nucleus Co-op doesn't launch/crashes, how do I fix it?

Here are a few things you can try:

* Try updating your Microsoft .NET Framework, and [install/reinstall Visual C++](https://docs.microsoft.com/cpp/windows/latest-supported-vc-redist?view=msvc-170) 2010-2017, 2015-2019 Redistributable (both x86 and x64).

* Make sure your antivirus program or windows defender is not blocking Nucleus Co-op or deleting any of its files. You may have to allow Nucleus as an exception before extracting.

* Install the [DirectX End-User Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=35) if you are on Windows 11.

* Set the `SplashScreen_On=true` line to false in the Settings.ini config inside Nucleus files if the app gets stuck on the splashscreen when opening. In latest Nucleus Co-op you can just click on the splashscreen to dismiss it if it takes too long, you can also disable it in Nucleus UI settings.

* Restart your PC, and try again.

### 8.- Does Nucleus Co-op have any malware?

Absolutely not. Some Nucleus Co-op hook files and Goldberg emulator, used by Nucleus, can sometimes be detected by windows defender and some other anti-viruses and web browsers, this is 100% a false positive see [here](https://www.reddit.com/r/nucleuscoop/comments/g2k8j7/is_there_any_viruses/fnmfhbp/) and [here](https://gitlab.com/Mr_Goldberg/goldberg_emulator/-/issues/118) for more information. You may have to allow Nucleus Co-op as an exception before extracting. Nucleus Co-op is fully open source and 100% guaranteed safe if you downloaded it from the official [github link](https://github.com/SplitScreen-Me/splitscreenme-nucleus/releases). If you got a detection you can help by [reporting the file(s) to Microsoft](https://www.microsoft.com/en-us/wdsi/filesubmission) as incorrectly classified as malware.

### 9.- How do I play with an uneven amount of players (such as 3 players) without having an empty space?

Right click on a section of the splitscreen layout.

### 10.- How do you use Nucleus Co-op Custom Layout?

[Like this](https://www.reddit.com/link/nc9364/video/vdhz3d56c3z61/player).

### 11.- I wish to help out with the project, how can I get in touch?

Join the [Nucleus Co-op discord](https://discord.gg/QDUt8HpCvr) community or contact us in the [subreddit](https://www.reddit.com/r/nucleuscoop).

### 12.- What are game handlers?

See [handlers](/docs/handlers).

### 13.- When support for X game?

Not all games are easy to split-screen, if you want to suggest a game make a [subreddit](https://www.reddit.com/r/nucleuscoop) post with the title `[Request] Name of the game` and provide useful information like if the game supports LAN or dedicated servers, if it is available on Steam or in other services, if it uses external servers for online, if it has gamepad support etc. You can also contact any of our experienced Nucleus handler developers here or in the [Nucleus Co-op discord](https://discord.gg/QDUt8HpCvr) and ask if a handler is possible. The main handler developer is [Talos91](https://www.reddit.com/user/blackman9/). Remember that handler developers are limited by the games they own and can test on, so if you really want support for a game to be added consider donating the game to the handler dev in question.

### 14.- How do I know when a handler gets updated?

Handlers updates are always announced in the [Nucleus Co-op discord](https://discord.gg/QDUt8HpCvr) in the channel #handlers-updates. Nucleus Co-op will also let you know if a new handler update is available when you select a game in its interface. 

### 15.- How do I create my own split-screen handler for Nucleus Co-op?

Open the MasterHandler.js file inside Nucleus Co-op handlers folder with notepad to read the documentation, check the Readme.txt inside the Nucleus folder for even more additional documentation. You can also use the handlers you download from Nucleus Co-op as reference, they get downloaded to the Nucleus Co-op handlers folder. An easier way to start would be editing an existing handler, preferably one of a game that uses the same engine as the game you want (Unity, UE4 etc.) and just change the data in the handler to match your game's, like the .exe name and such. If you create a working handler or if you have any questions about Nucleus handler development you can ask us in the Nucleus Co-op discord or in the subreddit, we can help you improve your handler so it is fully working for sharing with the community. See the [handler development guide](/docs/create-handlers) on this website too. 

### 16.- Does Nucleus Co-op work on Linux/Mac?

Nucleus Co-op depends on a lot of Windows functions and APIs, at the moment it only works on Windows 7 and Up. If you are interested in porting Nucleus Co-op to other operating systems please feel free to contact any of the developers.

### 17.- Where can I report a bug/issue?

Note that Nucleus Co-op is a tool in development and may have bugs, glitches and weird things happening. Help other people not have these things happen by checking for a solution in the subreddit or discord and submitting a `[BUG REPORT]` to the subreddit as a new topic if no-one else has brought it up. 
Provide a debug log of the Nucleus Co-op error or crash too: Open Nucleus Co-op settings by pressing the gear icon at the top right of the Nucleus UI, check the box labelled Enable Debug Log, then press save and close. Run the handler you are having trouble with again and a log file will be created in the same folder as the Nucleus Co-op exe, called debug-log.txt. 

Make sure you have read the game handler notes in the Nucleus UI very carefully before submitting anything.

A good `[BUG REPORT]` looks like this:
```
Thread name: [BUG REPORT] Simon falling off horse

BUG: Simon falls off his horse.

EXPECTED: Simon should not fall off his horse, right?

CAUSE: I'm pretty sure it's because I have my computer plugged into an auto-blow.

STEPS TO REPRODUCE

1. Open up Simon Stays On His Horse: The Interactive Video Game of the Movie.

2. Choose Co-Op and join with another player.

3. Simon falls off his horse!!!

TYPE: Severe! The gameplay can't continue if Simon isn't on his horse! (Alternatively, Minor if the gameplay can continue but it's just annoying)

NUCLEUS OPTIONS: I played with 2 players using the vertical splitscreen (left and right) on one tv and 2 famicom controllers. I'm using the latest version

SYSTEM: I'm on Windows 3.1 with 4MB of RAM, a 2KHz CPU and no graphics card, playing on a projector. She's a monster.

I'd really like this to get fixed please thanks magic man! -Beanboy
```
Keep in mind most handlers are made and tested using the latest legit Steam versions, so provide information about what version of the game you have.

### 18.- A Nucleus Co-op handler doesn't launch/is not working, why?

Make sure you are using latest Nucleus Co-op version and the handler latest version. Here are other things you can try:

1. Read the game handler author's notes that appear under the game cover, read them carefully as they contain important information related to the handler functionality.

2. Check that your antivirus program or windows defender is not deleting or blocking any Nucleus Co-op files. Add the Nucleus Co-op folder as an exception.  

3. [Install/reinstall Visual C++](https://docs.microsoft.com/cpp/windows/latest-supported-vc-redist?view=msvc-170) 2010-2017, 2015-2019 Redistributable (both x86 and x64).

4. Try launching your main game without Nucleus and change some graphics settings, apply then close.

5. Delete Nucleus Co-op content folder, open Nucleus Co-op and [add the game](/docs/usage) again.

6. Don't place Nucleus Co-op inside the game files you wish to run.

7. Move Nucleus Co-op outside any user or protected folders, C:/NucleusCo-op is recommended.

8. If the handler requires it move Nucleus Co-op to the same drive as your game.

9. Most handlers are made and tested using the latest legit Steam versions of games, so you need the Steam version unless the game handler notes or description mention it works with other versions too (GoG, EGS).

10. If you are using a handler that creates different temporary windows users like the Halo: The Master Chief Collection handler when using the online mode UI option or the State of Decay 2 handler, Nucleus Co-op needs to be installed outside any user or protected folders, you need to have Nucleus installed in the root of your drive, for example C:/NucleusCo-op. Make sure you close Nucleus using CTRL+Q and make sure to delete any Nucleus created windows users, if they remained after a crash, before running the handler again. Delete them via windows control panel and delete any Nucleus user folders in C:/Users/ too, restart your PC if you can't delete the folders.

11. It is also possible that a handler stops working if a game gets an update that adds big changes like cross-platform play, if you think that is the case report the issue so we can fix it.

### 19.- Where are my Nucleus Co-op save files located?

Some handlers save to the Nucleus Co-op environment folder located in `C:\Users\YourUser\NucleusCoop`, you can access each game save file via the Nucleus Co-op UI too, select a game, click on Game Options and select Open UserProfile Save/Config Path. Other handlers just save in the same file path your regular game saves to. The [PC Gaming Wiki](https://www.pcgamingwiki.com/wiki/Home) is a great place to know where exactly a game saves to.

### 20.- Why is Nucleus Co-op resizing the game instances incorrectly/the instances look stretched?

Try setting your monitor scale to 100% in your monitor/TV resolution settings. It is also highly recommended that you add custom resolutions to all your monitors from your AMD/[Nvidia](https://www.nvidia.com/en-us/drivers/custom-resolutions/)/[Intel](https://i.imgur.com/WQcGCK1.png) panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.) that way most games will be able to see and use those custom resolutions and the split-screen will not look stretched ([Example](https://i.imgur.com/RI8Qg3n.png)). Note that not all games support custom or ultra widescreen resolutions. If your graphics panel does not support adding custom resolutions using the app [Custom Resolution Utility](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU) is recommended. Disable the Status Window in Nucleus UI settings if you have it enabled as it can cause resizing issues.

### 21.- Why is Nucleus Co-op showing an error message that it can not find a file when launching a handler?

A lot of handlers edit a game's .ini or .cfg files to force windowed and to adjust the game's resolution to the window size, so make you sure you run your game at least once, change some graphic settings and apply them before running it via Nucleus Co-op, that way you make sure the proper config files are getting generated first. If you are still getting the error after doing that, select the game in the Nucleus Co-op user interface, click on Game Options and select Delete UserProfile Config Path for all players. You can also try deleting Nucleus Co-op content folder and add the game again. 

### 22.- Why are my in-game frames per second low/better in one instance than in the others when using Nucleus Co-op?

Remember that Nucleus Co-op opens multiple instances of a game, so depending on the game this can be quite demanding for your PC, to improve FPS and performance try reducing graphics settings like textures and shadows, limit the FPS or unfocus all the game windows so that they get equal priority and the FPS even out, you can do this by Alt-Tabbing to a different window like the Nucleus Co-op app window, the game windows will still remain on top, you can also press the windows key+b in your keyboard to unfocus all the instances. Forcing Vsync via your graphics panel can also help.

### 23.- Why can't I exit Nucleus Co-op or move my cursor to close it?

Some handlers that support multiple keyboards and mice lock the main mouse cursor in the corner. To unlock it press the END key in your keyboard when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances. Other Nucleus shortcuts are editable in the app UI settings.

### 24.- Nucleus Co-op changed the location of my Documents folder, why?

For some games that save in the default Documents folder Nucleus Co-op will edit the path registry key so that each instance can have a different save or config file. Properly closing Nucleus Co-op, should restore its original value (whatever it was prior to Nucleus). If it doesn't (due to the app crashing for example), opening Nucleus again will revert the registry back to its original value (Nucleus Co-op v2.1 and up). Just in case, Nucleus will keep an original copy of the registry key in your Nucleus folder > utils > backup > User Shell Folders.reg. Worst case, the 'Personal' key [needs to be changed back](https://imgur.com/a/VpmCIbs) to `%USERPROFILE%\Documents` or if using a custom documents folder, whatever the path to that is. Use the Windows Registry Editor app to change it back.

The full registry path that may be effected is, the Personal key: `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders`

### 25.- My Playstation/generic PC controller isn't being detected by Nucleus Co-op/has double input, how do I fix this?

Most Nucleus Co-op handlers only detect and work with [XInput](https://en.wikipedia.org/wiki/DirectInput#DirectInput_vs_XInput) controllers. Controllers that work best are native XInput gamepads like Xbox 360 and Xbox One controllers for minimum hassle. There are a few handlers that also support DirectInput controllers but XInput controllers are generally a lot easier to restrict to a specific game instance than DirectInput controllers.

If you are using PS4 controllers try the app DS4windows, look in the settings for an option called "hide ds4 controller" - make sure it's ticked. To ensure it's definitely running in exclusive mode make sure ds4windows is set to load on windows startup, then turn your controllers on while windows is loading. Download the latest version [here](https://ryochan7.github.io/ds4windows-site/).

Read more about how to use exclusive mode [here](https://bit.ly/377SUmh)

If you are using generic DirectInput controllers the app [XOutput](https://github.com/csutorasa/XOutput/releases) is also very useful to emulate XInput controllers. 

Remember that some games detect both DirectInput and XInput controllers so even if you are emulating a XInput controller the input could still not be restricted correctly by Nucleus because the game is now responding to both the emulated XInput controller and to the native DirectInput of your controller, that is why some apps like DS4windows have an "exclusive mode".

The best way to block the native DirectInput of a controller when emulating to XInput is using [HidHide](https://github.com/ViGEm/HidHide/releases). Follow this [guide to learn how to use it](https://www.reddit.com/r/nucleuscoop/comments/mpx1w5/to_solve_doubled_not_working_properly_emulated/).

You can also try using [this .dll](http://www.mediafire.com/file/iuso0fmhjsao92g/dinput8.blocker.zip/file) made by wizark952 that blocks Direct Input in most games. Place the dll alongside the game's .exe and make sure you are using the correct version of the dll (for x86 or x64 games).

Do not place any x360ce xinput dlls inside the Nucleus Co-Op files as this might interfere with Nucleus own custom xinput dlls.

Xbox One controllers have some [issues](http://www.snes9x.com/phpbb3/viewtopic.php?t=27510) with background input in games that only support DirectInput controllers and in Unity games that use Unity's default input for gamepad support. To fix that in those cases you can also use XOutput on your Xbox One controllers.

If you are using Steam controllers try [this](https://www.youtube.com/watch?v=wy4F2eqTXQ4).

### 26.- Why is my keyboard/gamepad not showing in the Nucleus Co-op UI?

Since Nucleus Co-op v2.1 for handlers that support multiple keyboards/mice the mice and keyboards icons will only show in the UI if a key is pressed or a mouse moved. If a handler is only showing gamepads and not keyboards/mice icons that means the handler only supports gamepads and doesn't support keyboards/mice in split-screen yet. If a handler is only showing keyboards/mice icons that generally means that the game itself has no gamepad support or very limited gamepad support. If you only see one big keyboard/mouse icon that means the handler only supports one keyboard and mouse with the instance focused.

### 27.- There are many keyboards, mice and controllers icons in the UI, how do I know which ones to use?

If you press a key in the keyboard you will use or move the mouse their corresponding icons in the Nucleus Co-Op UI will light up yellow. The app can detect keyboard macros that is why sometimes you will get multiple keyboard icons. If you maintain a controller button pressed the corresponding icon will light up yellow too. 

### 28.- Can you play Splitscreen+LAN in different PCs?

Yes, if you run the game via Nucleus Co-op in different PCs you can connect all instances you launch via LAN, for example you can have 2 players playing vertical splitscreen in one PC via Nucleus and connect to 2 other players using Nucleus splitscreen in a different PC via LAN. If the handler uses steamworks multiplayer emulation you'll have to change the instances player steam ids in the other PCs you'll connect to, otherwise the instances launched by Nucleus will use the same player steam ids and won't be able to connect to each other. Since Nucleus Co-op v2.1 you can change the Player Steam ID per player in the app UI settings (Players tab).

You can also open the game handler .js file in Nucleus Co-op handlers folder in the other PCs and add for example `Game.PlayerSteamIDs = [ "76561198134585131","76561198131394153","76561198011792067","76561198043762785" ];` that will change the default ids of the first four instances you open in one PC via Nucleus Co-op, note that the player steam ids you set in Nucleus UI will have priority over these ones.

### 29.- This project is amazing, where can I donate?

We don't have an unified donation platform yet but you can support the developers individually here: [Mikou27](https://www.paypal.com/donate/?hosted_button_id=P3NVBYRQ4Z45L), [Zerofox](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WUXKHLAD3A3LE&source=url), [Ilyaki](https://www.paypal.com/donate/?hosted_button_id=TB6DNGVSNXS2E).

You can also donate to our main handler developer that makes the game handlers for Nucleus to support even more games: [Talos91/blackman9](https://ko-fi.com/talos91)
