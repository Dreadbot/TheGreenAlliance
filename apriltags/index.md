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
An Apriltag is a fiducial marker used for a variety of tasks, ranging from
[camera calibration](/implementation/index.md) to
[localization](/implementation/index.md). AprilTags are all around the
field, whether you are in FRC or FTC.
!!!
While the term **fiducial** might sound scary, it just
means that the tag has a known fixed position, serving
as a point of comparison. This means whenever an AprilTag
is seen by a camera, the camera can figure out its position
relative to the tag.
!!!

## How do we use Apriltags?
As said before, there are a variety of useful implementations of AprilTags,
and because of their properties, simply having a camera on your robot to
detect the tags around the field is enough to improve your controls, localization
and more.

### Noteworthy Topics
Before we go into AprilTag detection, there are a few things to keep in mind.
First, your camera. Unless your drivers move at the pace of a snail, you will
need to minimize the [motion blur](/cameras/#motion-blur) of your camera. There are a few things that

### Detection

