---
label: OpenCV
order: 96
icon: cpu
---

# What is OpenCV?
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

## General Usage

==- **[Capturing Video]()**
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
==-

==- **[Showing Video]()**
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
==-

==- **[Changing Properties]()**
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
==-

## Object Detection

==- **[Inrange and Bitwise Functions]()**
Some of the most basic yet essential functions in OpenCV are the inrange and bitwise functions. These work as follows:

---
`cv2.inRange(src, lower_bound, upper_bound)` - This function will take every single pixel of the specified source image (`src`) and calculate whether or not it exists within a specified range (`lower_bound`-`upper_bound`) with the bounds acting as allowed ranges for each color value. This will return a binary image with the 1s, or white pixels representing the pixels that fall within that range. This is most useful when used with an HSV color format. Here is an example use case of `cv2.inRange` that keeps all bright cyan pixels:
```py
lower_bound = np.array([75, 55, 10])
upper_bound = np.array([90, 255, 255])

blue_frame = cv2.inRange(hsv_frame, lower_bound, upper_bound)
```

---

For each of these next functions, they all follow the same pattern of logic using boolean operators. Each one corresponds to their boolean operator and will take one or two images and return the boolean operator output of them combined. This should be done on binary images unless you are masking them.

`cv2.bitwise_and(img_1, img_2, *mask)` - Returns the boolean AND of the images.

`cv2.bitwise_or(img_1, img_2, *mask)` - Returns the boolean OR of the images.

`cv2.bitwise_xor(img_1, img_2, *mask)` - Returns the boolean XOR of the images.

`cv2.bitwise_not(img_1, *mask)` - Returns the boolean NOT of an image.

!!!
Each of these functions allows you to pass in a `mask`. This will allow you to pass in a binary image as a mask, to determine which pixels of the image will be kept, and which ones are removed regardless.
!!!
==-

==- **[Dilation and Erosion]()**
After you have some sort of detection using [inrange functions](#object-detection), you may start to notice two issues:

1. It is almost impossible to detect **only** a specific element using only inrange functions.
2. When you do have the object fully detected, *there is a lot of **noise***

Fortunately, OpenCV has two functions that help us mitigate these problems. These functions are `cv2.dilate()` and `cv2.erode()`. These two methods will help get rid of small, unwanted detections, without scaling down the size of the desired detection. In order to get rid of noise, we use **erode** to remove detected pixels without a significant amount of other detected pixels around them. This will shrink the desired detection, so we use **dilate** to restore it to its original size. You may also do this in reverse order to get ride of "holes" in the detection.

---
Both `cv2.erode()` and `cv2.dilate()` will take in three arguments:

1. The base image
2. The **kernel** (this is a matrix filled with ones, to determine the buffer used for erosion and dilation)
3. The amount of iterations

!!!
When instantiating a kernel, it must be of odd size - (3, 5, 7)
!!!

Syntax: `cv2.erode(image, kernel, iterations=)

An example use case of erosion and dilation would be to first erode the image with a 3x3 kernel, for three iterations, and then reverse that with dilation:
```py
kernel = np.ones((3, 3))

eroded_image = cv2.erode(image, kernel, iterations=3)
dilated_image = cv2.dilate(eroded_image, kernel, iterations=3)
```
==-

