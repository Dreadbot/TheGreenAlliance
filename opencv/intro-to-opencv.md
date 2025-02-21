---
label: Intro to OpenCV
order: 96
icon: globe
authors:
  - name: Luke Baur
    avatar: https://www.thebluealliance.com/avatar/2025/frc3656.png
---

# OpenCV
OpenCV (Computer Vision) is a programming library that can help us achieve
our goals when it comes to computer vision. As the name says, OpenCV
is fully open source, and it handles much of the base level work with
vision, including various aspects of image processing.

## Installation
In a virtual environment, you can run the following command to install OpenCV.
```
pip install opencv-python
```
If you would like to know more about installation, visit the
[Python Packaging User Guide :icon-link-external:](https://packaging.python.org/en/latest/tutorials/installing-packages/){target="_blank"}.
## How to Use
OpenCV has documentation on all of its various functions and features, however, we obviously cannot cover all of them in these docs. Most of the important usages for OpenCV can be found on this page. We will try to cover all of the other important snippets when we need them, but if you want to go more in-depth, you can find their documentation in [the OpenCV docs :icon-link-external:](https://docs.opencv.org/4.x/index.html){target="_blank"}. 

Anytime you would like to use OpenCV in a file, you'll need to import it with this line.
``` py
import cv2
```
!!!
Keep in mind, this is not saying anytime we use an OpenCV function in the file, you need this before it. Importing OpenCV once, before any of your code will allow it to be used througout the whole file
!!!

There is no need to go looking too far into the docs, as we will show how to program any concepts we mention, but don't be afraid to look. The most important capabilities we will need OpenCV for are capturing video, changing [camera properties](/cameras/guide-to-cameras/#camera-properties), and inrange functions.

## Capturing Video
Capturing video from a camera is extremely easy with opencv, granted you're on your [Raspberry Pi](/raspi).
OpenCV simply has two functions for these capabilities: `cv2.VideoCapture()` and `VideoCapture.read()`. With
these two functions, you'll be able to get the image from your camera every frame. First, you must create a
VideoCapture object using a line like this:
```py
cap = cv2.VideoCapture(-1) # Use the index of your camera, or -1 for default
```
Now we have a VideoCapture object called `cap` that we can use to read from. In order to use the `VideoCapture.read()`
function, we need to call it on a VideoCapture object, like we just created. Now, `.read()` will return whether or not the frame was captured, as well as the frame that was captured. We will need two variables to take these values, and simply written, you can implement this with:
```py
while True:
    ret, frame = cap.read()
```

## Showing Video
If you have a monitor or screen and would like to view the image that your camera captured, you can use the `cv2.imshow()` function. For this function, you'll need to pass in a string for the name of the window (this does not matter unless you are showing multiple cameras), as well as the frame you would like to show. To add this to your program you would need a line like this inside the while loop:
```py
cv2.imshow("frame", frame)
```
However, we cannot just get away with this, because `cv2.imshow()` will not actually draw the image. We will need `cv2.waitKey()` to do that. This is because `cv2.waitKey()` will show an image until any keypress, or for a specified number of milliseconds, and then show the next frame registered with `cv2.imshow()`. This means that whenever you would like to show your image, you need `cv2.waitKey()`. This function will return the last keypress during that time period. There are two different ways to use the function:

---
**Show for a number of milliseconds**

In order to make the image display for a specified amount of time, you need to pass in a positive number to the function. For example, you can make each frame in a video feed show for 1ms by adding this line to the loop:
```py
cv2.waitKey(1)
```
If you want to show the video capture until the user presses a key, you could modify it by adding an if statement. This loop will wait for the user to press 'q' and then breaks out of the loop.
```py
while True:
    ret, frame = cap.read()

    cv2.imshow("frame", frame)

    if cv2.waitKey(1) == ord("q"):
        break
```

This use of waitKey is very valuable for testing live video, though realistically you'd never want to show a frame for longer than 1ms.

---

**Show indefinitely until any keypress**

In order to make an image display until the user presses a key, you should pass in 0 to the function. This code, for example, will show the first image the camera captures (until the program ends), wait the user to give a keypress, and then end:
```py
import cv2

cap = cv2.VideoCapture(-1)

ret, frame = cap.read()

cv2.waitKey(0)
```

This usage of waitKey is much less valuable for our testing purposes, so you should stick with displaying an image for 1ms when testing your cameras or your code.

## Changing Properties
After you know how to [capture video](#capturing-video), you can fiddle around with your [camera properties](/cameras/guide-to-cameras/#camera-properties). Changing properties in OpenCV requires knowing a few things about you camera. You must know your camera's auto exposure setting (`auto_exposure`), as well as the minimum exposure time (`exposure_time_absolute`). 

To find these, run `v4l2-ctl -d /dev/video<X> -L` with `<X>` replaced with your camera. Typically this will be `video0`, but if you have multiple cameras you will have to determine which one is which. This command will give you an output of all of your changable camera properties, as well as their minimum, maximum, and default values. If a property has different modes specified by the number, it will list which number corresponds to which setting.

Once you know what value corresponds to `Manual Mode` for your auto exposure, as well as your camera's minimum exposure time, you may hop into programming.

In order to change a property with OpenCV, you must simply run the following line in your program, with the values substituted:
```py
cap.set(cv2.CAP_PROP_PROPERTY, val)
```
`CAP_PROP_PROPERTY` should be replaced with the property of your camera you would like to change. For exposure time, it is `CAP_PROP_EXPOSURE`. For auto exposure, it is `CAP_PROP_AUTO_EXPOSURE`.  More property names and their definitions can be found in [OpenCV's documentation :icon-link-external:](https://docs.opencv.org/3.4/d4/d15/group__videoio__flags__base.html){target="_blank"}. Also, `val` should be replaced with whatever value you would like to change it to.
!!!
If you would like to change the exposure time of your camera, you need to ***first*** change the auto exposure setting to manual. Otherwise, the value will not be changed.
!!!

