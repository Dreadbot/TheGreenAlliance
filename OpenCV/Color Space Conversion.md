**<u>Color Spaces</u>**
There are many color spaces that are used today, but the ones we will focus on are BGR, RGB, and HLS.
**<u>BGR/RGB</u>**
The default color space of an image in OpenCV is BGR, which stands for Blue Green Red. This isnt quite what we want to work with, so the first thing we can do is convert it to a more standard color space using `cvtColor()` which takes 2 arguments. The first is `src`, which is our image/video source so in this case we will use the `img` variable we acquired from our video capture. The second variable is `code` which we access using `cv2.COLOR_OURCODE` with OURCODE being whatever conversion we are doing. For BGR to RGB it is just `cv2.COLOR_BGR2RGB`.
**<u>HLS</u>**
The much more practical color space we like to use in OpenCV is HLS. So to convert our video we will include a line to convert our source into an HLS image.

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
	#Display the video stream
	cv2.imshow("ImageHLS",imgHLS)
	#Press q to quit out of our loop
	if cv2.waitKey(1) == ord('q'):
		break
```

**<u>Standard Image</u>**
![[Stock.jpg]]

**<u>RGB Image</u>**
![[imgRGB.jpg]]

**<u>HLS Image</u>**
![[imgHLS.jpg]]

While initially weird looking, the HLS version is easier for us to work with. This is due to the fact that it is closer to how the human eye sees colour. 

Previous Article : [[Your First OpenCV Program]]
Next Article : [[Modifying our source]]

#OpenCV 