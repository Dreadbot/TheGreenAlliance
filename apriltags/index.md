---
label: AprilTags
order: 95
icon: apps
---
!!!warning
This section is a stub! Look out for more in a future update.
!!!

# AprilTags

## What are AprilTags?
An Apriltag is a fiducial marker used for a variety of tasks, ranging from camera calibration to localization. AprilTags are all around the field, whether you are in FRC or FTC.
!!!
While the term **fiducial** might sound scary, it just means that the tag has a known, fixed position, serving as a point of comparison. This means whenever an AprilTag is seen by a camera, the camera can figure out its position relative to the tag.
!!!

## How do we use Apriltags?
As said before, there are a variety of useful implementations of AprilTags, and because of their properties, simply having a camera on your robot to detect the tags around the field is enough to improve your controls, localization and more.

### Noteworthy Topics
Before we go into AprilTag detection, there are a few things to keep in mind. First, be sure you have a decent [camera setup](/cameras/guide-to-cameras).

You must also have a good camera calibration, as otherwise, your detections may be inaccurate, and therefore, worthless. It is a good idea to undistort your image before you attempt to detect any AprilTags.
!!!warning
Camera calibration articles coming in a future update!
!!!

### Detection
Detecting AprilTags is quite complex, though it can be broken down into many steps. We will not go into the specifics of how tag detection works here, but you can view [WPILib's explanation :icon-link-external:](https://docs.wpilib.org/en/stable/docs/software/vision-processing/apriltag/apriltag-intro.html#processing-technique){target="_blank"} if you would like to know more.

For our implemetation, we will be using a library called [dt_apriltags :icon-link-external:](https://github.com/duckietown/lib-dt-apriltags){target="_blank"} to give us the rotation and translation of the tag relative to our camera, as well as the tag ID. You can install it using pip:
```
pip install dt-apriltags
```
To run detections, you must first create a **Detector** object. There are a couple of different options for this step, and we recommend finding your own settings for this, but we generally recommend the following values:
- `searchpath=['apriltags']` This is a required setting.
- `families='tag36h11'` This is the tag family of the FRC AprilTags, so you must use this setting.
- `nthreads=1` You can raise this up to 4 if you're using a Raspberry Pi 5, but you should do your own testing to see what works best.
- `quad_decimate=1.0` Changing this value to 1.0 will increase the detection rate of tags by increasing the resolution when searching for quads.
- `quad_sigma=0.0` Setting this value above 0 may help with noise, but if you do not have much noise, keep it at 0.
- `decode_sharpening=0.25` This option helps to detect smaller tags.

!!!
Most of these settings are default, so we do not need to set them all when we create our Detector.
!!!

If we were to create our Detector in code, it would look like this:
```py
at_detector = Detector(searchpath=['apriltags'], quad_decimate=1.0)
```
In order to recieve detections from our camera, we need to call `.detect()` on our Detector. This is another function that has a few parameters:

`at_detector.detect(img, estimate_tag_pose, camera_params, tag_size)`

In order to recieve detections, you must pass in these variables accordingly:
- `img` - This must be your image in **grayscale**
- `estimate_tag_pose` - Must be set to true.
- `camera_params` - Your camera parameters in the form [fx, fy, cx, cy]
- `tag_size` - The tag side length in meters. In FRC, the tags are 0.1651 x 0.1651m (6.5 inches).

If we were to write this detector in code, it would look like this:
```py
tags = at_detector.detect(grayscale_frame,
                          estimate_tag_pose=True,
                          camera_params=camera_params,
                          tag_size=0.1651)
```