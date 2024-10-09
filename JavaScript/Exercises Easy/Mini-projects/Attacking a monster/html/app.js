let sharkMan = { hp: 500, attack: 'Big Bite', dps: 50 };
let character = { hp: 500, sword: 'Scimitar', dps: 23, rage: false, specialDps: 300 };

let logElement = document.getElementById("log");
let characterHpElement = document.getElementById("character-hp");
let sharkManHpElement = document.getElementById("sharkman-hp");

function attack() {
  // Battle continues while both are alive
  if (sharkMan.hp > 0 && character.hp > 0) {
    // Check if special attack should be triggered
    if (character.hp <= 250 && !character.rage) {
      logElement.innerHTML = `Character uses special attack, dealing a blow of ${character.specialDps} damage!`;
      sharkMan.hp -= character.specialDps;
      character.rage = true;
    } else {
      // Regular attack
      logElement.innerHTML = `Character uses ${character.sword}, dealing ${character.dps} damage!`;
      sharkMan.hp -= character.dps;
    }

    // Update SharkMan's health
    sharkManHpElement.innerText = sharkMan.hp;

    // Check if SharkMan is dead after attack
    if (sharkMan.hp <= 0) {
      logElement.innerHTML += `<br>SharkMan is dead! Character wins!`;
      return;
    }

    // SharkMan responds with an attack
    logElement.innerHTML += `<br>SharkMan uses ${sharkMan.attack}, dealing ${sharkMan.dps} damage!`;
    character.hp -= sharkMan.dps;

    // Update Character's health
    characterHpElement.innerText = character.hp;

    // Check if character is dead
    if (character.hp <= 0) {
      logElement.innerHTML += `<br>Character died during this fight. SharkMan wins!`;
    }
  }
}
