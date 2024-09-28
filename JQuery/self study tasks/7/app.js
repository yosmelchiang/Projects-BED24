$(document).ready(() => {
  let onBtn = $("#onButton");
  let offBtn = $("#offButton");
  let paras = $("p");

  // We can either use $(this) or an arrow function:
  // paras.click(function() {$(this).hide('slow')})

  // If we want to use an arrow function we need to do it this way:
  // paras.click((e) => {$(e.target).hide('slow')})

  onBtn.click(() => {
    paras.click((e) => {$(e.target).hide('slow')});
  })

  offBtn.click(() => {
    paras.off('click');
  })
  
});
