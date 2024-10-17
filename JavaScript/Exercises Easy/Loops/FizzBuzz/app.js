/* This JavaScript code snippet is a loop that iterates from 0 to 100. For each iteration, it checks if
the current number is divisible by 3 or 5. If the number is divisible by 3, it appends 'Fizz' to the
result string. If the number is divisible by 5, it appends 'Buzz' to the result string. If the
number is divisible by both 3 and 5, it appends 'FizzBuzz' to the result string. If none of these
conditions are met, it simply appends the current number to the result string. Finally, it logs the
result string to the console. This code is a common FizzBuzz implementation. */

for(let i = 0; i <= 100; i++) {
    let result = '';
    if (i % 3 == 0){
        result += 'Fizz';
    } else if(i % 5 == 0) {
        result += 'Buzz';
    }
    console.log(result || i)
}