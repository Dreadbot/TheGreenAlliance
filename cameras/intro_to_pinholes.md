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

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 855 752" width="855" height="700">
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
  <rect x="0" y="0" width="855" height="752" fill="#ffffff"></rect><g stroke-linecap="round"><g transform="translate(117 252) rotate(0 0.43429060132996256 116.44584080015008)"><path d="M-0.6 -1 C-0.57 80.36, -0.43 158.41, 1.47 233.89 M0.54 0.05 C2.23 67.77, 0.61 136.5, -0.01 233.71" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(118 251) rotate(0 306.45729366429975 176.92197321180737)"><path d="M-0.1 0.29 C168.02 96.61, 338.15 194.68, 613.01 353.83 M0.21 0.02 C183.08 103.94, 365.92 209.59, 612.57 353.61" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(116.17249532404685 486.7961932772457) rotate(0 308.3420498414995 -178.0789559093807)"><path d="M0.13 -0.1 C174.25 -100.74, 350.48 -201.85, 616.24 -356.21 M0.21 0.05 C159.57 -90.66, 320.03 -183.54, 616.55 -355.56" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(732 131) rotate(0 0.19735522634437075 236.4690609646902)"><path d="M0.66 -0.86 C0.88 151.88, 1.67 303.16, -0.88 473.8 M0.36 0.15 C1.84 151.26, 1.26 301.82, 0.43 473.1" stroke="#000000" stroke-width="1" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(116 367.9999999999999) rotate(0 307.1720667123795 0.7575631385937527)"><path d="M0.59 0.71 C143.62 1.75, 286.95 0.71, 613.76 0.36" stroke="#000000" stroke-width="1.5" fill="none" stroke-dasharray="8 9"></path></g></g><mask></mask><g transform="translate(411 145) rotate(0 52 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">Real World</text></g><g transform="translate(167 142) rotate(0 36 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">Camera</text></g><g stroke-linecap="round"><g transform="translate(324 57) rotate(0 -0.18700544834143784 312.7600031137467)"><path d="M-0.72 0.35 C-0.71 136.13, -0.52 273.71, 0.35 625.17" stroke="#000000" stroke-width="1.5" fill="none" stroke-dasharray="8 9"></path></g></g><mask></mask><g transform="translate(157 337) rotate(0 5 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">f</text></g><g transform="translate(369 570) rotate(0 69 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">(not to scale)</text></g><g transform="translate(80 310) rotate(0 9.5 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#000000" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">py</text></g>
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
