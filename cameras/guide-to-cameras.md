---
label: Guide to Cameras
order: 99
icon: book
authors:
  - name: Luke Baur
    avatar: https://www.thebluealliance.com/avatar/2025/frc3656.png
---
# Cameras
Cameras are the foundation of computer vision; without them, we wouldn't have 
images to process in the first place. Needless to say, at least a basic 
understanding is essential for working with vision code; thankfully, they're 
not as complicated as it seems. 

## Establishing the Type
All digital cameras use a sensor and a lens to capture light from the environment.
There are a couple of types of cameras, the main two that we'll focus on are
**fisheyes** and [pinholes](intro-to-pinholes). Generally, if you're thinking of a camera, it's
a pinhole. Fisheyes are a lot more complicated, and involve a heap of extra work
before they can be processed with computer vision. For most computer vision
purposes, especially in FIRST robotics, pinhole cameras will be sufficient, and so
that's what our articles will go in depth on.

## Camera Properties
Cameras have many different traits and **properties** that make them different.
Some are extremely important when choosing a camera for your robot. Some could
mean you cannot accomplish certain tasks. This means that effectively researching
your cameras before purchasing can make (or break) your vision subsystems.

Here are the most essential properties to look for when finding a camera, in
descending order:

==- **[1. Exposure Time]()**
When your camera is capturing light to produce an image, the shutter needs to be
open *long enough to produce an image*. This time ranges from camera to camera, but
the higher it is, the more [problems you'll have](#problems). This is because if
your camera captures the light in the scene for a longer amount of time, *there is
more time for the scene to change*, blurring the image. Generally, prioritize
minimum exposure time when finding your camera.
===

==- **[2. Resolution]()**
The resolution of a camera is the amount of pixels in a single image produced by
the camera. It is measured in pixels, typically represented as **width**x**height**.
Having a low resolution is just like how nearsightedness works. When things are
further away, they are harder to make out. This is because they are smaller from
the camera's perspective, and because of this you have less pixels to work with.
Essentially, the lower the resolution, *the harder it is to make out small parts of an image.*
===

==- **[3. Field Of View (FOV)]()**
The FOV of a camera is the angular extent of which it can see at any given moment. It is
determined by the camera's horizontal and vertical angle of view, often measured in degrees,
which is determined by the cameras lens.
![](/placeholderFOV.jpg)
===

==- **[4. Shutter Type (Rolling / Global)]()**
The shutter type is the least important property of a camera if you prioritize the
others first. Essentially, a camera will either capture all of the light at once
(**global shutter**), or in a rolling motion (**rolling shutter**), typically top
to bottom. While a rolling shutter camera can cause [some artifacts](#problems), it is
not likely to be the sole cause.
===

## Problems
In a perfect world, any camera would suit any application. However, the cameras
you will be purchasing for robotics will not be perfect. The first steps to dealing
with this imperfection are determining the causes as well as the steps to improvement,
which is exactly what this section will cover.

==- **[Motion Blur]()**
Motion blur is going to be the primary cause of your problems, whether it's that you
cannot localize when you're turning, or that the slight shakiness of your robot moving
causes blurriness. This is caused primarily by either too high of an [exposure time](#1-exposure-time)
or poor camera [mounting](#mounting).
===

==- **[Rolling Shutter Artifacts]()**
Rolling shutter artifacts are a result of fast movement and a rolling shutter camera. These artifacts look like smearing, instead of bluriness like you would have with [motion blur](#motion-blur). You can mitigate rolling shutter artifacts by turning slower or reducing exposure time. You can also remove the though of them entirely by getting a global shutter camera. 

!!!
Typically, a rolling shutter will not be a major source of issue, as majority of problems can be solved just by mitigating motion blur and getting a camera with a low exposure time.
!!!
===

==- **[Mounting]()**
Mounting a camera can seem like a trivial task, but it turns out to be quite a bit more
complex than first assumed. Making sure your camera mount is **stable, precise, and protects
your camera** is extremely important, because without, you will end up with **innaccurate poses,
[motion blur](#motion-blur)**, and worst of all, **broken cameras**.
===
