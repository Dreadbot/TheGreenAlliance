---
label: Basic Trigonometry
order: 90
icon: diamond
---
# Trigonometry

Having a basic understanding of trigonometry is essential to understanding how
to take data from an image and projecting it back into the real world.
Trigonometry is the mathematics behind triangles, and mostly it gives us a few
operations we can use on angles or side lengths to solve for the exact 
dimensions of a triangle.

## SOH CAH TOA
The three basic trig functions are $\sin$, $\cos$, and $\tan$. Given the triangle:

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 515.2 388.8" width="515.2" height="388.8" class="svg">
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
      @font-face {
        font-family: "Assistant";
        src: url("https://excalidraw.com/Assistant-Regular.woff2");
      }
    </style>
    <clipPath id="qrKNBfiHwTrMVxfn2wh7w">
            <rect transform="translate(0 0) rotate(0 257.6 194.4)" width="515.2" height="388.8">
          </rect>
        </clipPath>
  </defs>
  <g clip-path="url(#qrKNBfiHwTrMVxfn2wh7w)"><g stroke-linecap="round"><g transform="translate(104.59999999999991 279.59999999999997) rotate(0 148.85714285714266 0)"><path d="M0 0 C49.62 0, 248.1 0, 297.71 0 M0 0 C49.62 0, 248.1 0, 297.71 0" stroke-width="1" fill="none"></path></g></g><mask></mask></g><g clip-path="url(#qrKNBfiHwTrMVxfn2wh7w)"><g stroke-linecap="round"><g transform="translate(402.5999999999997 279.59999999999997) rotate(0 0 -99)"><path d="M0 0 C0 -33, 0 -165, 0 -198 M0 0 C0 -33, 0 -165, 0 -198"  stroke-width="1" fill="none"></path></g></g><mask></mask></g><g clip-path="url(#qrKNBfiHwTrMVxfn2wh7w)"><g stroke-linecap="round"><g transform="translate(103.53984962406025 279.11127819548875) rotate(0 149.71428571428567 -98.64285714285714)"><path d="M0 0 C49.9 -32.88, 249.52 -164.4, 299.43 -197.29 M0 0 C49.9 -32.88, 249.52 -164.4, 299.43 -197.29" stroke-width="1" fill="none"></path></g></g><mask></mask></g><g clip-path="url(#qrKNBfiHwTrMVxfn2wh7w)"><g stroke-linecap="round"><g transform="translate(158.69888357256673 242.967145135566) rotate(0 9.399999999999977 18.19999999999999)"><path d="M0 0 C1.67 1.87, 7.33 7.2, 10 11.2 C12.67 15.2, 14.53 19.8, 16 24 C17.47 28.2, 18.33 34.33, 18.8 36.4 M0 0 C1.67 1.87, 7.33 7.2, 10 11.2 C12.67 15.2, 14.53 19.8, 16 24 C17.47 28.2, 18.33 34.33, 18.8 36.4" stroke="#ffffff" stroke-width="1" fill="none"></path></g></g><mask></mask></g><g clip-path="url(#qrKNBfiHwTrMVxfn2wh7w)"><g transform="translate(236.6988835725665 142.16714513556605) rotate(0 5.5 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#ffffff" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">H</text></g></g><g clip-path="url(#qrKNBfiHwTrMVxfn2wh7w)"><g transform="translate(417.0988835725666 170.56714513556602) rotate(0 7.5 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#ffffff" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">O</text></g></g><g clip-path="url(#qrKNBfiHwTrMVxfn2wh7w)"><g transform="translate(269.0988835725666 294.96714513556594) rotate(0 6.5 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#ffffff" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">A</text></g></g><g clip-path="url(#qrKNBfiHwTrMVxfn2wh7w)"><g transform="translate(188.29888357256687 239.36714513556598) rotate(0 5.5 12.5)"><text x="0" y="0" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#ffffff" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="text-before-edge">θ</text></g></g>
</svg>
&nbsp;

We can define these functions as:

$$
\begin{split}
\sin \theta &= \frac{O}{H} \\
\cos \theta &= \frac{A}{H} \\
\tan \theta &= \frac{O}{A} \\
\end{split}
$$

There are also inverse functions for these, so that you can determine the angle
from the side lengths. These can be written in one of two ways: putting
$\text{arc}$ in front, or by putting a $^{-1}$ right after the function, such as:

$$
\sin^{-1} \frac{O}{H} = \arcsin \frac{O}{H} = \theta
$$

So as not to get $\sin^{-1} x$ confused with $(\sin x)^{-1}$, there are another
3 functions that represent the reciprocals of the first three:

$$
\begin{split}
\csc \theta = \frac{1}{\sin \theta} = \frac{H}{O} \\
\sec \theta = \frac{1}{\cos \theta} = \frac{H}{A} \\
\cot \theta = \frac{1}{\tan \theta} = \frac{A}{O} \\
\end{split}
$$

all of which can also be inverted by the same methods as above.
