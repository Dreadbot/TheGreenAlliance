---
label: Color Detection
order: 10
icon: plus-circle
authors:
  - name: Luke Baur
    avatar: https://www.thebluealliance.com/avatar/2025/frc3656.png
---

# Color Detection
Object detection is the process of finding and localizing specific objects relative to the camera. In order to find an object, you have a lot of options. Here, we will describe how to detect objects using color, but you can also use neural network models or detect by shape. To detect an object based on its color, you need to consistently see the object in changing light conditions, as well as remove false positives. We can do this with OpenCV using some of their built-in functions.

## Inrange and Bitwise Functions
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

## Dilation and Erosion
After you have some sort of detection using [inrange functions](#inrange-and-bitwise-functions), you may start to notice two issues:

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

Syntax: `cv2.erode(image, kernel, iterations=iterations)`

An example use case of erosion and dilation would be to first erode the image with a 3x3 kernel, for three iterations, and then reverse that with dilation:
```py
kernel = np.ones((3, 3))

eroded_image = cv2.erode(image, kernel, iterations=3)
dilated_image = cv2.dilate(eroded_image, kernel, iterations=3)
```
