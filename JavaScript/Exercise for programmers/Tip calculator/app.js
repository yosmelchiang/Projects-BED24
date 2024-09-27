const log = console.log;

// Variables
let billAmount = 0;
let tip = 0;
let tipRate = 0;
let total = 0;

// Inputs
let amountInput = checkValidNumber("What is the bill amount?");
let tipInput = checkValidNumber("What is the tip rate?");

// Function to check valid number
function checkValidNumber(promptInput) {
  let input;

  while (true) {
    input = parseInt(prompt(promptInput));

    if (!isNaN(input) && input > 0) {
      break;
    }
    alert("The number you provided is invalid, please try again");
  }
  return input;
}

// Computing
billAmount = amountInput;
tip = billAmount * (tipInput / 100);
total = billAmount + tip;

// Jquery
$(document).ready(() => {
  // HTMl elements
  let tipEle = $("#tip");
  let totalEle = $("#total");

  tipEle.text(`$${tip}`);
  totalEle.text(`$${total}`);

});

// Logs
log("---User inputs---");
log(`Amount input is $${amountInput}`);
log(`Tip input is: ${tipInput}%`);

log("---Computing---");
log(`Computed tip is: $${tip}`);
log(`Total is: $${total}`);
