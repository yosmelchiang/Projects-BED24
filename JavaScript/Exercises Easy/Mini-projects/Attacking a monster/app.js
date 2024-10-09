let sharkMan = { hp: 500, attack: 'Big Bite', dps: 50 };
let character = { hp: 500, sword: 'Scimitar', dps: 23, rage: false, specialDps: 300 };

function attack() {
  while (sharkMan.hp > 0 && character.hp > 0) {
    // Check if special attack should be triggered
    if (character.hp <= 250 && !character.rage) {
      console.log(`Character uses special attack dealing a blow of ${character.specialDps} damage`);
      sharkMan.hp -= character.specialDps; // hits sharkman with special damage
      console.log(`SharkMan's health: ${sharkMan.hp}`);
      character.rage = true; // special attack used

      // Check if SharkMan is dead after special attack
      if (sharkMan.hp <= 0) {
        console.log('SharkMan is dead! Character wins!');
        break;
      }
    } else {
      // Character attacks with regular damage
      console.log(`Character uses ${character.sword} dealing ${character.dps} damage`);
      sharkMan.hp -= character.dps;
      console.log(`SharkMan's health: ${sharkMan.hp}`);

      // Check if SharkMan is dead after regular attack
      if (sharkMan.hp <= 0) {
        console.log('SharkMan is dead! Character wins!');
        break;
      }
    }

    // SharkMan responds the attack (only if SharkMan is still alive)
    console.log(`SharkMan attacks with ${sharkMan.attack}, dealing ${sharkMan.dps} damage.`);
    character.hp -= sharkMan.dps;
    console.log(`Character's health: ${character.hp}`);

    // Check if character is dead
    if (character.hp <= 0) {
      console.log('Character died during this fight :(');
      break;
    }
  }
}

attack();
