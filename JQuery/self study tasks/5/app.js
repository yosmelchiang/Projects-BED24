$(document).ready(() => {});

// Seems we have to move this out of the condition above for it to work with onClick
// An alternative would be to use JQuery events instead


function button1Click() {
  let bulbasaur = '<img src="https://www.serebii.net/swordshield/pokemon/001.png" width="235" height="220">';
  $("p[lang]").html(bulbasaur);
}

function button2Click() {
  let newButton = '<button>empty button</button>'
  $('button:first-of-type').after(newButton)
}

function button3Click() {
  let firstParaText = $('p:first-of-type').text()
  $('p').append(firstParaText)
}