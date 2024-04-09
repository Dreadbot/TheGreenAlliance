---
label: Driver Camera
order: 90
icon: device-camera
---
# Driver Camera
The simplest useful kind of vision program is one which just pushes an image to
the driver station. In previous years, we would use the WPILib CameraServer,
but due to recent updates to network tables code, as well as some issues with
pip, the python package manager, we have moved to doing a simple mjpeg stream
(which is exactly what camera server was under the hood) using
[`mjpeg-streamer`](https://pypi.org/project/mjpeg-streamer/). To install,
simply run `pip install mjpeg-streamer` in a virtual environment, or `pip
install mjpeg-streamer --break-system-packages` (it sounds scary, but it's
actually not!). You'll also need `opencv-python` or `opencv-python-headless`.
Then, the minimally functional program is:

```py
from mjpeg_streamer import MjpegServer, Stream
import cv2

cap = cv2.VideoCapture(0) # replace with whatever camera id you use

stream = Stream("stream_name", size=(640, 480))
server = MjpegServer("127.0.0.1", 1181)
server.add_stream(stream)
server.start()

while True:
    _, frame = cap.read()
    stream.set_frame(frame)
```

That's a lot, so let's go chunk by chunk:

```py
cap = cv2.VideoCapture(0) # replace with whatever camera id you use
```
This creates a `VideoCapture` object around camera `0`, but you should swap out
`0` for whatever the camera id is. Finding this is notoriously difficult, but if
all else fails, try `-1`, which should use the last available camera.

```py
stream = Stream("stream_name", size=(640, 480))
```
This creates a mjpeg stream with name `stream_name` and a specific size. You
should change the size parameter to accurately represent the width and height
of the images your camera takes in form `(width, height)`.

```py
server = MjpegServer("127.0.0.1", 1181)
server.add_stream(stream)
server.start()
```
This creates an mjpeg server hosted locally (`127.0.0.1` is an ip address that
refers to the current computer) on port `1181`, accessible from a browser by
`xx.xx.xx.xx:1181`, replacing the `x`s with the pi's IP address on the network.
The stream is then added to the server, and then server is started.

```info
`127.0.0.1` will not work as the ip address on a computer that isn't the pi,
since it also refers to the current computer on that computer, meaning it is
expecting the stream to be hosted on that computer, not the pi!
```

```py
while True:
    _, frame = cap.read()
    stream.set_frame(frame)
```
Forever, this reads a frame from the camera and then pushes it through the stream.

If you run this program and then navigate to `xx.xx.xx.xx:1181`, as above, you
should be able to see the stream! To stop it, you'll have to press `^C` (control-C),
potentially twice, to actually stop the program. This will cause it to get a little
mad, so to fix that, we can do this instead:

```py
from mjpeg_streamer import MjpegServer, Stream
import cv2

def main():
    cap = cv2.VideoCapture(0) # replace with whatever camera id you use

    stream = Stream("stream_name", size=(640, 480))
    server = MjpegServer("127.0.0.1", 1181)
    server.add_stream(stream)
    server.start()

    while True:
        _, frame = cap.read()
        stream.set_frame(frame)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        pass
```

The notable differences are wrapping the code in the function `main`, and
then the if statement at the bottom: `__name__` will be set to `__main__`
if the program is being run from the shell, but not if the file has been
`import`ed into another python file; it's just generally a good practice.
The `try`/`except KeyboardInterrupt` will run `main()`, which loops until
it receives an exception, including a `KeyboardInterrupt` event (you
pressing `^C`). By `except`ing and `pass`ing, we can "gracefully" catch the
`KeyboardInterrupt` and end the program from there.

Congratulations, you just wrote your first vision program! Next, we'll look
into detecting AprilTags, the new standard for marking FIRST fields.
