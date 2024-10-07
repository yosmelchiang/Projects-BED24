// JQuery
$(document).ready(() => {
  let input = "";
  while (input === "" || !isNaN(input)) {
    input = prompt("What is the input string? (Input should not be a number)");

    if (!isNaN(input)) {
      alert("You entered a number, please provide a string");
      input = ""; //Resets the variable to keep the loop going
    }
  }
  $("#charNumbers").text(`${input} has ${input.length} characters`);
});
