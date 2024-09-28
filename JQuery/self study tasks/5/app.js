$(document).ready(() => {});

// Seems we have to move this out of the condition above for it to work with onClick
// An alternative would be to use JQuery events instead
let bulbasaur =
  '<img src="https://www.serebii.net/swordshield/pokemon/001.png" width="235" height="220">';

function button1Click() {
  $("p[lang]").replaceWith(bulbasaur);
}
