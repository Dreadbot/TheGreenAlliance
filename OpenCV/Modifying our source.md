**<u>Modifications</u>**
Our image so far is pretty distorted, and not something we really want to work with. To fix this we will apply various cv2 functions to get what we are looking for.

**<u>Blur</u>**
The first of our modifications will be to blur the image. To do this, we will once again get a new variable named something like 'blur' or 'imgBlurred' using OpenCV's `.blur()` function. This function takes in two parameters. The first is `src` which is the video source that we are blurring. The second is `ksize` which is a list representing the kernel size. Think of it as squares on a grid, and the kernal size is width and height of a selection you can move across the grid. Kernel size is gone into more detail in the linear algebra section. A visualization is below
![[0_Asw1tDuRs3wTjwi7.gif]]

So now lets implement it in our code. All it takes is a single line that we'll add in just below our HLS conversion.

```py
#Import the library
import cv2
#Get the video capture
cap = cv2.VideoCapture(0)
#Begin our while loop
while True:
	#Get our video source from the cap
    ret,img = cap.read()
	#New variable for the HLS version
	imgHLS = cv2.cvtColor(img, cv2.COLOR_BGR2HLS)
	#Blur with a kernel size of 15
	imgBlur = cv2.blur(imgHLS, (3,3)
	#Display the video stream
	cv2.imshow("ImageHLS",imgHLS)
	#Press q to quit out of our loop
	if cv2.waitKey(1) == ord('q'):
		break
```

**<u>Original HLS Image</u>**
![[imgHLS 1.jpg]]

**<u>Blurred HLS Image</u>**
![[imgBlur 1.jpg]]

This image will be much easier to work with.

Previous Article : [[Color Space Conversion]]
Next Article : [[Masking out what we dont need]]

#OpenCV 