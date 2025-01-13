---
label: Cameras
order: 10
icon: device-camera
---
# Cameras

Cameras are the foundation of computer vision; without them, we wouldn't have 
images to process in the first place. Needless to say, at least a basic 
understanding is essential for working with vision code; thankfully, they're 
not as complicated as it seems. 

## Establishing the Type
There are a couple of types of cameras, the main two that we'll focus on are
**fisheyes** and **pinholes**. Generally, if you're thinking of a camera, it's
a pinhole. Fisheyes are a lot more complicated, and involve a heap of extra work
before they can be processed with computer vision. For most computer vision
purposes, especially in FIRST robotics, pinhole cameras will be sufficient, and so
that's what our articles will go in depth on.

## How do Cameras Work?
Cameras use a sensor on the other side of their lens to convert recieved light into
an image.

## Camera Properties
Cameras have many different traits and **properties** that make them different.
Some are extremely important when choosing a camera for your robot. Some could
mean you cannot accomplish certain tasks. This means that effectively researching
your cameras before purchasing can make (or break) your vision subsystems.

Here are the most essential properties to look for when finding a camera, in
descending order: 
==- 1. Exposure Time
When your camera is capturing light to produce an image, the shutter needs to be
open long enough to produce an image. This time ranges from camera to camera, but
the higher it is, the more [problems you'll have](#problems)
==-

==- 2. Resolution
The resolution of a camera is the amount of pixels in a single image produced by
the camera. It is measured in pixels, typically represented as **width**x**height**.
Having a low resolution is just like how nearsightedness works. When things are
further away, they are harder to make out. This is because they are smaller from
the camera's perspective, and because of this you have less pixels to work with.
Essentially, the lower the resolution, *the harder it is to make out small parts of an image.*
==-

==- 3. Field Of View (**FOV**)
The FOV of a camera is the angular extent of which it can see at any given moment. It is
determined by the camera's horizontal and vertical angle of view, often measured in degrees,
which is determined by the cameras lens.
![](/placeholderFOV.jpg)
==-

==- 4. Shutter Type (Rolling / Global)
The shutter type is the least important property of a camera if you prioritize the
others first. Essentially, a camera will either capture all of the light at once
(**global shutter**), or in a rolling motion (**rolling shutter**), typically top
to bottom. While a rolling shutter camera can cause [some artifacts](#problems), it is
not likely to be the sole cause.
==-

## Problems
In a perfect world, any camera would suit any application. However, the cameras
you will be purchasing for robotics will not be perfect. The first steps to dealing
with this imperfection are determining the 
### Motion Blur
