/* This JavaScript code is creating a grid of size 8x8 using the '#' character. It initializes a
variable `size` with a value of 8 and an empty string variable `grid`. */
let size = 8;
let grid = '';

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    grid += '#';
  }
  grid += '\n';
}

console.log(grid);
