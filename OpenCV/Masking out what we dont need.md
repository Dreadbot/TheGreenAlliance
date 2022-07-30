**<u>Masking</u>**
Masking is probably the most important part of vision code in OpenCV. Without it our code wouldnt be able to tell the difference between a green light and a red light.

To use masking in OpenCV we use the `.inRange()` function that takes in 3 parameters. The first is the standard `src` parameter that represents our video source/image. The second and third are our `lowerBound` and `upperBound`, both of which are tuples of numbers representing the BGR values for the range that we want to use for masking.

You can think of it like running through every pixel in the frame and checking if all 3 of its color values are within the given thresholds, so if our `lowerBound` is `(50,50,50)` and our `upperBound` is `(100,100,100)` then only pixels with all 3 values between 50 and 100 are considered valid. Once it has all of these pixels, it sets every one of the valid pixels to pure white (255,255,255) and every one of the invalid pixels to pure black (0,0,0).

This results in an image where we can effectively isolate the colour we are looking for, such as the colour of a game element or target.

**<u>An example of masking</u>**

**<u>Original Image</u>**
![[2020-2021-Power-Cell.jpg]]

**<u>Masked Image</u>**
![[element 1.jpg]]

In this example we use a range of (0,100,100) to (100,255,255) to only get the yellow pixels, since yellow is made up of Red and Green, and the highest value the Blue can be to be considered valid is only 100

Previous Article : [[Modifying our source]]
Next Article : [[Erosion and Dilation]]


#OpenCV 