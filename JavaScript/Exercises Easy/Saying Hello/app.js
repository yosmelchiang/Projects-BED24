// JQuery
$(document).ready(() => {
  // Variables
  let input = "";

  while (input === "") {
    // Keep prompting until an input is given
    input = prompt("What is your name?");
  }

  //After a valid input, perform JQuery
  $("#sayHello").text(`Hello ${input}, nice to meet you!`);
});
