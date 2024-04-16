---
label: DIY Pi
ordering: 00
icon:
---
# DIY Pi

WPILib publishes a raspberry pi image on their website, but it does not allow
high levels of customizability or much special image processing on the pi
itself. Instead of using their image, you can build your own to make use of the
full power of the pi.

## Imaging

To start, you'll want to download the Raspberry Pi Imager from
[the official raspberry pi site](https://www.raspberrypi.com/software/) for your
operating system, then plug an SD card into your computer and open the imager.
Follow the instructions in the imager to select your raspberry pi device, then
we recommend picking the *Raspberry Pi OS Lite (64-bit)* option under *Raspberry
Pi OS (other)* in the Operating System dropdown. Pick your SD card in the storage
menu, then it should prompt you as to whether you wish to edit the sd card's
settings; click on *Edit Settings*, then configure to heart's desire. Some info
on the various options:
- Hostname: the name of the computer; occasionally used by wifi routers
- Username & password: the username and password of the standard user on the pi
- Configure wireless LAN: SSID is the name of the wifi network, password is
  manifest, and the country should match the country you are in.
- Locale: configures the keyboard layout and time zone, generally not necessary
  to play with.

Notably, under the *Services* tab, you should enable SSH access; this allows you
to connect to the pi remotely from another computer without having to plug the
pi into a monitor or give it a keyboard. You should use password authentication
unless you really know what you're doing. The *Options* tab only affects the
installation process.

When you're ready, hit *SAVE* and then *YES*, following any future prompts to
image the SD card. Imaging the card will erase all data on the card, so be
aware.

## Configuring

Once the process is complete, insert the SD card into the pi and give it a power
source. From here, you can either continue to configure it via SSH or by
plugging it into a monitor and keyboard. SSH configuration is a little more
difficult.
