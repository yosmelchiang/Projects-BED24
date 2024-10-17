/* This JavaScript code is creating a chessboard pattern with a size of 8x8. It uses a nested loop to
iterate over each row and column of the board. For each position, it checks if the sum of the row
index and column index is even. If it is even, it adds a space character to the board, otherwise, it
adds a '#' character. After completing a row, it appends a newline character to move to the next
row. */
let size = 8;
let grid = '';

for (let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
        if((i + j) % 2 == 0) {
            grid += ' ';
        } else {
            grid += '#';
        }
    }
    grid += '\n'
}

console.log(grid)