---
id: xboxone
title: Converting.
---

Xbox One and Xbox Series X|S controllers have some issues with background input in games that only support DirectInput controllers and in Unity games that use Unity's default input for controller support. Some games also do not correctly recognize them and only pick Xbox 360 controllers correctly.

To make them more compatible with those kind of games and with some Nucleus Co-op handlers there is a way to make Windows and all games see them as Xbox 360 controllers for increased compatilibility in those cases.

You wil notice that apps that emulate XInput controllers like XOutput or x360ce version 4 can see and map Xbox One and Xbox Series X|S controllers but can not fake them as something else cause they are already XInput, to make the controllers work with those apps follow this:

* Go to Windows control panel, hardware and sound, devices and printers, you should see your connected controller, right click on your Xbox One gamepad, select properties, click on the hardware tab, select your XInput controller and click on properties again, in the general tab select change configuration, next go to the drivers tab and select update driver, select "Browse my computer", "Let me pick from the list", you should see three options, the driver you are already using and other two, select the HID-compliant game controller driver. 

* Once it finishes installing games will pick your Xbox One controller as a DirectInput gamepad, now you can use apps like XOutput or x360ce version 4 to convert them to a Xbox 360 controller. 

* If you want to revert the changes just follow the same process again and select the XInput drivers you were using between the 3 that show.

* Open XOutput or x360ce now and map your Xbox One gamepad and you are good to go.

* Use HidHide to hide the native DirectInput of your Xbox One and Xbox Series X|S controllers so tha Windows and games only see the emulated Xbox 360 controllers. Unhide them if you revert their drivers to XInput.

* This method works for all Xbox One and Xbox Series X|S controllers connected via usb or via the Xbox wireless reciever, it can work when conected via Bluetooth but windows do not see the controller analog triggers when you are using the HID-compliant game controller bluetooth driver.
