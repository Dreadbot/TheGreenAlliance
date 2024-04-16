---
label: Linear Algebra
order: 01
icon: workflow
---

# Linear Algebra

Linear Algebra is an important tool that we use to help find the position of the robot on the field.

## Vectors

Vectors are used to represent a direction and magnitude. Usually they are graphically denoted by an arrow: the length represents the magnitude of the arrow and the starting and ending points represent the direction. On paper they are represent with square brackets [ ] with numbers vertically stacked. The top represents the x direction, below that is the y, and in 3 dimensions their will be z below that. 
$$
\left(\begin{array}
10\\
2
\end{array}\right)
$$ 
The above 2d vector represents an arrow with the x component being 10 units and the y component being two units, so you can imagine this as an arrow going from the point (0, 0) to the point (10, 2). In the context of robots, these vectors usually represent
the position of something. For example, vectors are often used to represent where an april tag is from the camera. 

## Matrices

In essence, matrices are a way to hold multiple pieces of information in a single entity. 
$$
\left(\begin{array}
6 & 2\\
2 & 1
\end{array}\right)
$$ 
Above is a two by two matrix. Graphically, however, representing them is a bit more complex. 
We generally think of matrices as transformations of the coordinate grid. Lets say we start with 
a vector 
$$
\left(\begin{array}
a\\
b
\end{array}\right)
$$
on the grid, but then we want to transform this vector using a matrix.
$$
left(\begin{array}
3 & 6\\
2 & 4
\end{array}\right)
$$
Applying this transformation, we get the x component, a, multilying the first column, and the y component, b,
multiplying the second component:
$$
\left(\begin{array}
3a\
2a                   
\end{array}\right)   
$$    
and 
$$
\left(\begin{array}
6b\
4b                   
\end{array}\right)   
$$   
combining these into a single vector we get our result vector:
$$
\left(\begin{array}
3a + 6b\
2a + 4b                 
\end{array}\right)   
$$
This multi-step proccess is more commonly described as matrix multiplication. However, 
matrix multiplication isn't as simple as scalar multiplication, so you can't just multiply 
the corresponding components. I won't get into the details of matrx multiplication, but for 
more info on linear algebra and to get a much better visual representation of what has 
been explained in this article, I suggest watching [this video series](https://youtu.be/fNk_zzaMoSs?si=iBkvwhzAhbwECNF0) on youtube.