$(document).ready(() => {
//   $("p").click(function () {
//     $(this).hide("slow");
//   });

  //Using an arrow function

  $("p").click((e) => {
    $(e.target).hide("slow");
  });
});
