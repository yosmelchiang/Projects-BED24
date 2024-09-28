$(document).ready(() => {
  let btn1 = $("#button1");

  btn1.click((e) => $(e.target).animate({ width: "200px" }, 5000));
});
