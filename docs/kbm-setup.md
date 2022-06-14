---
id: kbm-setup
title: Multiple keyboards and mice support
---
>**WARNING: This guide talks about the deprecated Universal Split Screen Nucleus Co-op multiple keyboards and mice integrated functions, for the newer and improved multiple keyboards and mice integration use [Proto Input](/docs/proto).**

## First steps
While testing with keyboards/mice, press the End key to toggle the input lock. Do this once all instances are finished setting up so that the default Windows input doesn't interfere with the games. To stop split screen, press Ctrl+Q (this will also close Nucleus Co-op). If something breaks, press Ctrl+Alt+Delete to unlock input and kill Nucleus Co-op and/or the game instances.

First set
```js
Game.SupportsMultipleKeyboardsAndMice = true;
```
so that Nucleus Co-op knows you are using multiple keyboards/mice.

When setting up devices in Nucleus Co-op, move each mouse or press a key to light up the corresponding input device.

## Faking focus

Before starting with KBM input methods, it is important that all the game instances are tricked into thinking they are the foreground/active window. Windows will only let one window be the foreground window, so we need to trick each instance.
Start with enabling the following options:

```js
// FakeFocus will periodically send windows messages to the game window in the same manner Windows would if it was the foreground window.
Game.FakeFocus = true;

// HookFocus will hook Windows functions that the game may use to check if it is the foreground window.
Game.HookFocus = true;
```

If after setting up the mouse/keyboard input options there is limited input response, can try the following:

```js
// This sets the period between sending FakeFocus messages, in milliseconds. Some games need this on a short interval.
// This should be avoided if possible as it uses a lot of CPU.
Game.FakeFocusInterval = 5;

// This is true by default. Some games (e.g Unreal Engine 4 games like Deep Rock Galactic) respond incorrectly to FakeFocus sending a WM_ACTIVATE message.
// Setting this to false will make FakeFocus not send WM_ACTIVATE.
Game.FakeFocusSendActivate = false;

// This hook filters many (primarily mouse related) messages that the game receives.
// This filters out messages from Windows that are sent to an inactive window.
Game.HookFilterMouseMessages = true;
```

## Keyboard input

Keyboard input is usually easier to set up than mouse input, so it's best to start with keyboard input to make sure the fake focus is working.

Start with these options:

```js
// This sends keyboard input via Windows messages. This is usually all that's needed to get keyboard input working.
Game.SendNormalKeyboardInput = true;

// These options hook Windows functions that can be used by the game to detect if keys are down.
// HookGetAsyncKeyState is usually the only one that's needed, but leave the others enabled if there are no problems.
// Some games may conflict with these hooks, so try toggling some of them if keyboard input isn't working properly.
Game.HookGetAsyncKeyState = true;
Game.HookGetKeyState = true;
Game.HookGetKeyboardState = true;
```

If keyboard input still isn't working, the game may be using raw input for keyboard (this is fairly uncommon).
Try enabling re-register raw input as follows:
```js
// This will re-register the game for Windows raw input with the option to receive input while not in the foreground.
// This is important as most games will register to receive raw input only when in the foreground.
Game.HookReRegisterRawInput = true;
Game.HookReRegisterRawInputKeyboard = true;

// This filters raw input messages inside the application. This makes sure each instance only receives input for its designated input device.
Game.HookFilterRawInput = true;
```

## Mouse input
There are two types of mouse input that you will need to get working. First is mouse movement in menus (e.g. the main menu, pause menu etc) and the other is first person camera movement.

#### Menu mouse movement
You should get mouse movement in menus working first as it is simpler than first person movement.

Set the following options:
```js
// This will send the game mouse input via Windows messages.
Game.SendNormalMouseInput = true;

// This enables the fake mouse cursor to be drawn over the game by Nucleus Co-op.
// If the game uses a custom cursor, you will probably not need this option. (This will be obvious if you see the games custom cursor and a fake cursor drawn over it).
// Be aware this is a 'fake' mouse cursor in the sense that Nucleus Co-op will fake mouse input to the game via the other options and then the fake mouse cursor is drawn where the game should be responding to mouse input.
// The fake cursor is drawn by creating a large transparent window over the game. This may prevent the game from receiving mouse input from the 'real' Windows cursor. It is sometimes useful to disable this while testing.
Game.DrawFakeMouseCursor = true;

// This will hook the GetCursorPos Windows function which the game may use to get the mouse position.
Game.HookGetCursorPos = true;

// This will hook the SetCursorPos Windows function which the game may use to set the mouse position.
// This is useful to have on to prevent the game from moving the 'real' Windows mouse cursor around the screen.
Game.HookSetCursorPos = true;

// These function hooks are the same as from the keyboard input section.
// Some games use these functions to detect the state of mouse buttons.
Game.HookGetAsyncKeyState = true;
Game.HookGetKeyState = true;

// This hook filters many mouse messages to position the mouse cursor and other necessary changes from within the game itself.
// This should almost always be enabled, unless it causes some conflict.
Game.HookFilterMouseMessages = true;
```
If these options don't get mouse movement working in menus, try identifying the option that needs to be enabled/disabled to fix the input based on the option descriptions.

#### First person camera movement
Most games will use raw input for camera movement. If the game is using raw input, you will have probably noticed one of these three cases:
* None of the game instances respond to mouse input.
* Only one of the instances respond to mouse input.
* One or all of the instances respond to mouse input from all mice.

To make Nucleus Co-op work with raw input, set the following options:
```js
// This will re-register the game for Windows raw input with the option to receive input while not in the foreground.
// This is important as most games will register to receive raw input only when in the foreground.
Game.HookReRegisterRawInput = true;
Game.HookReRegisterRawInputKeyboard = true;

// This filters raw input messages inside the application. This makes sure each instance only receives input for its designated input device.
// This also filters a flag inside the raw input messages that tells the application if it is in the foreground.
Game.HookFilterRawInput = true;
```

In some cases, you may need to forward raw mouse input. This is almost never needed as re-register raw input has the same effect with a much more efficient method. Forwarding input forwards raw input from Nucleus Coop to the game. This has a high CPU usage and many input events will not pass, resulting in choppy movement.
```js
Game.ForwardRawMouseInput = true;
```

If the game doesn't work with raw input, it may be using 'legacy input'. Legacy input is where a game uses methods like mouse move messages and/or GetCursorPos calls to determine the distance the mouse moved from the center of the screen each frame. The application tries to reset the cursor to the center of the screen each frame. If you notice the game responds to mouse input by spinning, and spinning faster when the fake mouse cursor is further away from the window center, it is probably using legacy input.

Nucleus Co-op gets around legacy input by intercepting SetCursorPos and faking mouse movement to create the same effect as normal Windows input.
Use these options to enable legacy input:
```js
// This is the main switch for legacy input.
Game.HookUseLegacyInput = true;

// You may need this to modify mouse movement messages.
// It also has many other features, see above.
Game.HookFilterMouseMessages = true;

// Legacy input is usually done with calls to SetCursorPos and GetCursorPos, so you will need these hooks.
Game.HookSetCursorPos = true;
Game.HookGetCursorPos = true;

// The game may detect mouse input from mouse move messages, so this will need to be turned on:
Game.SendNormalMouseInput = true;
```
Nucleus Co-op will hook mouse movement messages and the GetCursorPos function to work around legacy input. Some games only need the GetCursorPos hook and conflict when mouse movement messages are edited. If this is the case, enable this option:
```js
Game.HookDontUpdateLegacyInMouseMsg = true;
```

#### Other options

Here is a list of other options related to keyboards/mice:
```js
// Use this to send scroll wheel events to the game.
// Some games don't need this, if for example they receive scroll wheel data from raw input.
Game.SendScrollWheel = true;

// Used for games that toggle the mouse visibility, e.g. hidden in first person movement and visible in menus.
// This shows/hides the fake mouse cursor when the game tries to show/hide the 'real' mouse cursor.
Game.HookMouseVisibility = true;

// The same as ForwardRawMouseInput, but for keyboards. Again, this should almost never be used instead of re-register raw input.
Game.ForwardRawKeyboardInput = true;

// Sometimes it is important that the all game instances are in the background.
// This is needed, for example, if the game responds to 'real' Windows mouse input, which interferes with Nucleus Co-op.
// Also useful if the game distributes CPU/GPU resources unequally if one instance is in the foreground.
Game.PreventGameFocus = true;

// If you need to change the key to toggle input lock, e.g. if the game uses the End key, edit it with this.
// You can find a list of keys and their numbers at https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes
Game.LockInputToggleKey = 0x23;

// Once you have finished setting up the input options, enable this to automatically lock input (equivalent to pressing End) once all of the instances have been set up.
// This is usually convenient to leave disabled whilst testing.
Game.LockInputAtStart = true;

// If you are using controllers and need a fake mouse cursor, try these options:
Game.DrawFakeMouseCursorForControllers = true;
Game.UpdateFakeMouseWithInternalInput = true;
```
-Written by [Ilyaki](https://github.com/Ilyaki).
