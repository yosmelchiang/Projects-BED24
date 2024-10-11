
const log = console.log

function factorial(n) {
  let product = 1; //Starts with 1 because we want to multiply it with our iterator i = 1

  for (let i = 1; i <= n; i++) { //Loops from 1 to n
    product = product*i //Multiply product by i up to 5
  }
  return product;
}


log(factorial(0));
log(factorial(1));
log(factorial(4));
log(factorial(5));
log(factorial(10));
log(factorial(15));