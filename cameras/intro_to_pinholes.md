---
label: Introduction to Pinholes
order: 99
icon: info
---
# Introduction to Pinholes

Pinhole cameras let light converge into a tiny hole (a pinhole!) and then 
diverge on the other side onto an image plane. In old cameras, this plane was 
the film. In digital cameras, it's a little more complicated, but the premise 
remains the same. This allows us to create this lovely diagram that forms the
core of our vision systems:

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 855 730" width="855" height="730">
  <!-- svg-source:excalidraw -->
  
  <defs>
    <style class="style-fonts">
      @font-face {
        font-family: "Virgil";
        src: url("https://excalidraw.com/Virgil.woff2");
      }
      @font-face {
        font-family: "Cascadia";
        src: url("https://excalidraw.com/Cascadia.woff2");
      }
    </style>
    
  </defs>
  <rect x="0" y="0" width="855" height="730" fill="#ffffff"></rect><g stroke-linecap="round"><g transform="translate(117 252) rotate(0 0.43429060132996256 116.44584080015008)"><path d="M-0.6 -1 C-0.57 80.36, -0.43 158.41, 1.47 233.89 M0.54 0.05 C2.23 67.77, 0.61 136.5, -0.01 233.71" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(118 251) rotate(0 306.45729366429975 176.92197321180737)"><path d="M-0.1 0.29 C168.02 96.61, 338.15 194.68, 613.01 353.83 M0.21 0.02 C183.08 103.94, 365.92 209.59, 612.57 353.61" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(116.17249532404685 486.7961932772457) rotate(0 308.3420498414995 -178.0789559093807)"><path d="M0.13 -0.1 C174.25 -100.74, 350.48 -201.85, 616.24 -356.21 M0.21 0.05 C159.57 -90.66, 320.03 -183.54, 616.55 -355.56" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(732 131) rotate(0 0.19735522634437075 236.4690609646902)"><path d="M0.66 -0.86 C0.88 151.88, 1.67 303.16, -0.88 473.8 M0.36 0.15 C1.84 151.26, 1.26 301.82, 0.43 473.1" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(116 367.9999999999999) rotate(0 307.1720667123795 0.7575631385937527)"><path d="M0.59 0.71 C143.62 1.75, 286.95 0.71, 613.76 0.36" stroke="#000000" stroke-width="1.5" fill="none" stroke-dasharray="8 9"></path></g></g><mask></mask><g transform="translate(411 145) rotate(0 52 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">Real World</text></g><g transform="translate(167 142) rotate(0 36 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">Camera</text></g><g stroke-linecap="round"><g transform="translate(324 57) rotate(0 -0.18700544834143784 312.7600031137467)"><path d="M-0.72 0.35 C-0.71 136.13, -0.52 273.71, 0.35 625.17" stroke="#000000" stroke-width="1.5" fill="none" stroke-dasharray="8 9"></path></g></g><mask></mask><g transform="translate(157 337) rotate(0 5 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">f</text></g><g transform="translate(369 570) rotate(0 69 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">(not to scale)</text></g><g transform="translate(80 310) rotate(0 9.5 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">py</text></g>
</svg>

&nbsp;

## Interpreting the Triangles

Ok, so what the heck does that mean? This is a vertical side-view of a camera, 
where the intersection of the two dashed lines is the pinhole of the camera. The
section of the horizontal dashed line on the camera's side (labelled as **f**) 
is the distance between the pinhole and the image plane.

!!!
The pinhole of the camera, where light converges, is known as a *focal point*, 
and the distance between it and the image plane is known as the *focal length*!
!!!

The image plane's height is marked as **py**, indicating **p**ixel **y**-axis 
length, and it represents a single column of pixels in the captured images.

This diagram doesn't have to be a vertical side-view, though; we can simply 
rename the **py** line to **px** and it is now a horizontal side-view, where
the **px** line represents a single row of pixels in the captured image.

!!!
Don't get confused — we can't actually just say that **py** is the same as 
**px**; it's just a simple way to show that the camera's horizontal side-view 
shares proportionality with it's vertical side-view. When we put actual math
into it, you'll have to consider the **py** and **px** sides separately.
!!!

## Applications of the Triangles

These triangles allow us to approximate the location of a target, provided that
we can detect it with computer vision, and that we have some knowns about it.
Let's draw in a few more things on the diagram:

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 855 730" width="855" height="730">
  <!-- svg-source:excalidraw -->
  
  <defs>
    <style class="style-fonts">
      @font-face {
        font-family: "Virgil";
        src: url("https://excalidraw.com/Virgil.woff2");
      }
      @font-face {
        font-family: "Cascadia";
        src: url("https://excalidraw.com/Cascadia.woff2");
      }
    </style>
    <clipPath id="fZsPVZm-p5FtNRlI9R8ge">
            <rect transform="translate(0 0) rotate(0 427.5 376)" width="855" height="730">
          </rect>
        </clipPath>
  </defs>
  <rect x="0" y="0" width="855" height="730" fill="#ffffff"></rect><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g stroke-linecap="round"><g transform="translate(117 252) rotate(0 -0.1276080742625254 116.42655968018767)"><path d="M0.19 0.92 C-2.69 76.47, -1.22 149.99, -0.1 232.32 M-0.52 -0.6 C1.47 87.68, 1.62 174.97, 0.66 233.45" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g stroke-linecap="round"><g transform="translate(118 251) rotate(0 306.327234612786 177.09152105574046)"><path d="M-0.62 0.54 C163.85 92.81, 327.33 187.27, 613.27 354.22 M0.11 -0.03 C205.17 120.33, 411.15 239.65, 612.98 353.37" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g stroke-linecap="round"><g transform="translate(116.17249532404685 486.7961932772457) rotate(0 308.35198347411165 -178.2978411403988)"><path d="M0.08 -0.31 C219.57 -128.16, 438.75 -253.5, 616.62 -356.34 M0.19 -0.26 C141.21 -81.15, 282.51 -163.29, 616.26 -355.58" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g stroke-linecap="round"><g transform="translate(732 131) rotate(0 0.13484416653557219 236.44730064820348)"><path d="M-0.05 -0.36 C0.89 174.57, 0.53 347.47, -0.63 473.25 M0.35 0.24 C1.33 137.45, 0.89 275.96, -0.08 472.7" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g stroke-linecap="round"><g transform="translate(93.5 367.9999999999999) rotate(0 332.27220556735983 0.6009869228059301)"><path d="M0.61 0.5 C173.65 0.57, 346.16 1.29, 663.93 0.37" stroke="#000000" stroke-width="1.5" fill="none" stroke-dasharray="8 9"></path></g></g><mask></mask></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g transform="translate(411 145) rotate(0 52 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">Real World</text></g></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g transform="translate(167 142) rotate(0 36 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">Camera</text></g></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g stroke-linecap="round"><g transform="translate(324 57) rotate(0 -0.7630558883503227 312.6079240560532)"><path d="M-0.07 0.37 C-2.28 149.36, -1.34 298.11, -0.69 624.85" stroke="#000000" stroke-width="1.5" fill="none" stroke-dasharray="8 9"></path></g></g><mask></mask></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g transform="translate(157 337) rotate(0 5 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">f</text></g></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g transform="translate(369 570) rotate(0 69 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">(not to scale)</text></g></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g transform="translate(63 271) rotate(0 9.5 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">py</text></g></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g stroke-linecap="round"><g transform="translate(707.5 222) rotate(0 24 0)"><path d="M0 0 C8 0, 40 0, 48 0 M0 0 C8 0, 40 0, 48 0" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g stroke-linecap="round"><g transform="translate(780.5 173.0000000000001) rotate(0 -20 19.999999999999943)"><path d="M0 0 C-6.67 6.67, -33.33 33.33, -40 40 M0 0 C-6.67 6.67, -33.33 33.33, -40 40" stroke="#000000" stroke-width="1" fill="none"></path></g><g transform="translate(780.5 173.0000000000001) rotate(0 -20 19.999999999999943)"><path d="M-40 40 L-34.87 25.9 L-25.9 34.87 L-40 40" stroke="none" stroke-width="0" fill="#000000" fill-rule="evenodd"></path><path d="M-40 40 C-38.69 36.4, -37.38 32.8, -34.87 25.9 M-40 40 C-38.66 36.31, -37.31 32.61, -34.87 25.9 M-34.87 25.9 C-31.95 28.82, -29.04 31.74, -25.9 34.87 M-34.87 25.9 C-32.47 28.3, -30.07 30.7, -25.9 34.87 M-25.9 34.87 C-29.18 36.06, -32.46 37.26, -40 40 M-25.9 34.87 C-29.82 36.29, -33.73 37.72, -40 40 M-40 40 C-40 40, -40 40, -40 40 M-40 40 C-40 40, -40 40, -40 40" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g transform="translate(773.5 142) rotate(0 32.5 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">target</text></g></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g transform="translate(739.5 282) rotate(0 5 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">h</text></g></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g transform="translate(586.5 341) rotate(0 5.5 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">d</text></g></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g stroke-linecap="round"><g transform="translate(731.5 222) rotate(0 -307.5 109.5)"><path d="M0 0 C-102.5 36.5, -512.5 182.5, -615 219 M0 0 C-102.5 36.5, -512.5 182.5, -615 219" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g stroke-linecap="round"><g transform="translate(58.80097453038934 495) rotate(0 24.09951273480533 -22.75)"><path d="M0 0 C8.03 -7.58, 40.17 -37.92, 48.2 -45.5 M0 0 C8.03 -7.58, 40.17 -37.92, 48.2 -45.5" stroke="#000000" stroke-width="1" fill="none"></path></g><g transform="translate(58.80097453038934 495) rotate(0 24.09951273480533 -22.75)"><path d="M48.2 -45.5 L42.66 -31.56 L33.96 -40.78 L48.2 -45.5" stroke="none" stroke-width="0" fill="#000000" fill-rule="evenodd"></path><path d="M48.2 -45.5 C46.6 -41.47, 45 -37.43, 42.66 -31.56 M48.2 -45.5 C46.66 -41.61, 45.11 -37.72, 42.66 -31.56 M42.66 -31.56 C40 -34.38, 37.33 -37.21, 33.96 -40.78 M42.66 -31.56 C39.32 -35.1, 35.98 -38.64, 33.96 -40.78 M33.96 -40.78 C39.62 -42.66, 45.29 -44.53, 48.2 -45.5 M33.96 -40.78 C37.64 -42, 41.32 -43.22, 48.2 -45.5 M48.2 -45.5 C48.2 -45.5, 48.2 -45.5, 48.2 -45.5 M48.2 -45.5 C48.2 -45.5, 48.2 -45.5, 48.2 -45.5" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g transform="translate(15.5 506) rotate(0 44.5 25)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">target</text><text x="0" y="25" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">(in image)</text></g></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g transform="translate(92.5 392) rotate(0 10 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">ph</text></g></g><g clip-path="url(#fZsPVZm-p5FtNRlI9R8ge)"><g stroke-linecap="round"><g transform="translate(92.5 440) rotate(0 24 0)"><path d="M0 0 C8 0, 40 0, 48 0 M0 0 C8 0, 40 0, 48 0" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask></g>
</svg>
&nbsp;

That was a lot. Let's take it down part by part: the point labelled **target** is
whatever we're targeting, possibly a piece of retroreflective tape on the wall?
**target (in image)** indicates the position of the pixel that shows the target
in the camera. You'll notice that it's upside down on the diagram; this is a 
side-effect of the pinhole structure. 

!!!
The image gets flipped right-side up before it ever passes through to the code. 
However, drawing it like this makes it more intuitive to look at. Just remember
that the **py** line is upside down!
!!!

Next, the segment marked **h** is the height of the target, relative to the 
camera's height (the distance vertically from the camera to the target). The
segment marked **d** is the distance of the target from the camera laterally.
The segment marked **ph** is the distance, in pixels, from the centre of the 
image to the pixel that the target appears on in the image.

So how do we use this diagram? Well, we can use the principle of similar 
triangles to solve for various unknowns: the triangle on the inside of 
the camera is proportional to that outside the camera. Here's what that
looks like in an equation:

$$
\frac{h}{p_h} = \frac{d}{f}
$$

Since $p_h$ and $f$ are known ($p_h$ because it's in the image and $f$ because
it's constant and intrinsic to the camera), we can solve for either $d$ or $h$
as long as we know the other one. For a real-world application, if we know that 
the retroreflective tape is 8 feet off the ground, we can solve for how far 
away it is from the camera. For example's sake, let's say that it's pixel 
height is 200 px, and the camera's focal length is 678 px. We can solve for $d$ by 
cross-multiplying:

$$
\begin{gather}
\frac{8 \textrm{ft}}{200 \textrm{px}} = \frac{d}{678 \textrm{px}} \\
\frac{8 \textrm{ft} \times 678 \textrm{px}}{200 \textrm{px}} = d \\
27.12 \textrm{ft} = d
\end{gather}
$$

It's as easy as that! No complicated trigonometry or linear algebra. Things get
quite a bit harder when you don't know either distance or height, or if your
target is more complex than a simple piece of retro tape or apriltag that can
be represented by a single point.