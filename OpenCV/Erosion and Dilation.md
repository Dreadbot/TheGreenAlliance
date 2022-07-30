**<u>Erosion</u>**
The final steps we need to do to get a good image will be to clean up any straggling pixels we have around the edges. While our main section of our image might be pretty good, because we are looking for certain colors there are often little straggler pixels.

Ive added some dots of the same color as the ball to the edges and remasked it 
![[2020-2021-Power-Cell-For-Erosion.jpg]]
![[element-with-leaking 1.jpg]]

A real world example of this problem would be ceiling lights in the background while we are searching for a signal light or a blue hat in the background when we are searching for a blue ball.

So to take away those pixels we will use the `.erode()` function. Much like the other modifications this function takes just 2 paramaters we need. The first is the standard `src` which is our video source/image. The second is `kernel` which you should recognise from [[Modifying our source]] where kernel is the size of the grid we run across the grid we want to blur. The erode function traces along the edge of your pixels and "erodes" the pixels away based on the pixels around it.
![[erode-b4f8cd8e2ed187ab5ae45f3b8134b940 1.gif]]
so in our case, we want a high enough kernel size we can remove the stragglers but not so much that we destroy our main object, and for iterations we can simply use something low like 1-5 to make sure it gets everything.

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
![[element-eroded.jpg]]

Previous Article : [[Masking out what we dont need]]

#OpenCV 