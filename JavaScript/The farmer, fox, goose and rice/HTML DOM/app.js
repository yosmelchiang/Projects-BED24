// Functions

function move(resource) {
  if (resource == 'Goose') {
    // Illegal move
    if (nShore.includes(resource) && !nShore.includes('Farmer')) {
      display('illegalMove');
      return; //Prevents the rest of the code on executing if an illegal move is reached
    } else if (sShore.includes(resource) && !sShore.includes('Farmer')) {
      display('illegalMove');
      return;
    }

    if (sShore.includes(resource)) {
      sShore = sShore.filter((items) => items !== resource && items !== 'Farmer'); // We are going through each element in sShore and filtering the array by every element that is not Goose and Farmer
      nShore.push(resource);

      //Checks if the farmer is already in that shore, if not, push
      if (nShore.includes('Farmer')) {
      } else {
        nShore.push('Farmer');
      }

      checkSafety();
      display('state');
    } else {
      nShore = nShore.filter((items) => items !== resource && items != 'Farmer');
      sShore.push(resource, 'Farmer');

      //Checks if the farmer is already in that shore, if not, push
      if (sShore.includes('Farmer')) {
      } else {
        sShore.push('Farmer');
      }

      checkSafety();
      display('state');
    }
  }

  if (resource == 'Fox') {
    // Illegal move
    if (nShore.includes(resource) && !nShore.includes('Farmer')) {
      display('illegalMove');
      return; //Prevents the rest of the code on executing if an illegal move is reached
    } else if (sShore.includes(resource) && !sShore.includes('Farmer')) {
      display('illegalMove');
      return;
    }

    if (sShore.includes(resource)) {
      sShore = sShore.filter((items) => items !== resource && items !== 'Farmer');
      nShore.push(resource);

      //Checks if the farmer is already in that shore, if not, push
      if (nShore.includes('Farmer')) {
      } else {
        nShore.push('Farmer');
      }

      checkSafety();
      display('state');
    } else {
      nShore = nShore.filter((items) => items !== resource && items != 'Farmer');
      sShore.push(resource);

      //Checks if the farmer is already in that shore, if not, push
      if (sShore.includes('Farmer')) {
      } else {
        sShore.push('Farmer');
      }

      checkSafety();
      display('state');
    }
  }

  if (resource == 'Corn') {
    // Illegal move
    if (nShore.includes(resource) && !nShore.includes('Farmer')) {
      display('illegalMove');
      return; //Prevents the rest of the code on executing if an illegal move is reached
    } else if (sShore.includes(resource) && !sShore.includes('Farmer')) {
      display('illegalMove');
      return;
    }

    if (sShore.includes(resource)) {
      sShore = sShore.filter((items) => items !== resource && items !== 'Farmer');
      nShore.push(resource);

      //Checks if the farmer is already in that shore, if not, push
      if (nShore.includes('Farmer')) {
      } else {
        nShore.push('Farmer');
      }

      checkSafety();
      display('state');
    } else {
      nShore = nShore.filter((items) => items !== resource && items != 'Farmer');
      sShore.push(resource);

      //Checks if the farmer is already in that shore, if not, push
      if (sShore.includes('Farmer')) {
      } else {
        sShore.push('Farmer');
      }

      checkSafety();
      display('state');
    }
  }

  if (resource == 'Farmer') {
    if (sShore.includes(resource)) {
      sShore = sShore.filter((items) => items !== resource);

      //Checks if the farmer is already in that shore, if not, push
      if (nShore.includes('Farmer')) {
      } else {
        nShore.push('Farmer');
      }

      checkSafety();
      display('state');
    } else {
      nShore = nShore.filter((items) => items !== resource);
      //Checks if the farmer is already in that shore, if not, push
      if (sShore.includes('Farmer')) {
      } else {
        sShore.push('Farmer');
      }

      checkSafety();
      display('state');
    }
  }
}

function display(type) {
  if (type == 'state') {
    domsShoreEle.innerHTML = sShore.join(', ');
    domnShoreEle.innerHTML = nShore.join(', ');
  } else if (type == 'gooseAteCorn') {
    disableControls();
    domMessageEle.innerHTML = gooseAteCorn;
    domMessageEle.style.color = 'white';
    domMessageEle.style.backgroundColor = 'red';
    // Clears the message after 3 seconds
    setTimeout(() => {
      domMessageEle.innerHTML = '';
      restart();
    }, 3000);
  } else if (type == 'foxAteGoose') {
    disableControls();
    domMessageEle.innerHTML = foxAteGoose;
    domMessageEle.style.color = 'white';
    domMessageEle.style.backgroundColor = 'red';
    // Clears the message after 3 seconds
    setTimeout(() => {
      domMessageEle.innerHTML = '';
      restart();
    }, 3000);
  } else if (type == 'illegalMove') {
    domMessageEle.innerHTML = illegalMove;
    domMessageEle.style.color = 'white';
    domMessageEle.style.backgroundColor = 'red';
    // Clears the message after 3 seconds
    setTimeout(() => {
      domMessageEle.innerHTML = '';
    }, 3000);
  } else if (type == 'allMoved') {
    domMessageEle.innerHTML = allMoved;
    domMessageEle.style.color = 'white';
    domMessageEle.style.backgroundColor = 'green';
  }
}

function checkSafety() {
  if (sShore.includes('Fox') && sShore.includes('Goose') && !sShore.includes('Farmer')) {
    display('foxAteGoose');
  } else if (nShore.includes('Fox') && nShore.includes('Goose') && !nShore.includes('Farmer')) {
    display('foxAteGoose');
  } else if (sShore.includes('Goose') && sShore.includes('Corn') && !sShore.includes('Farmer')) {
    display('gooseAteCorn');
  } else if (nShore.includes('Goose') && nShore.includes('Corn') && !nShore.includes('Farmer')) {
    display('gooseAteCorn');
  } else if (nShore.length === 4) {
    display('allMoved');
  } else {
  }
}

function disableControls() {
  farmerButton.style.display = 'none';
  gooseButton.style.display = 'none';
  cornButton.style.display = 'none';
  foxButton.style.display = 'none';
}

function restart() {
  sShore = ['Farmer', 'Fox', 'Goose', 'Corn'];
  nShore = [];
  display('state');
  farmerButton.style.display = 'inline';
  gooseButton.style.display = 'inline';
  cornButton.style.display = 'inline';
  foxButton.style.display = 'inline';
}

// Console
const log = console.log; //For testing purposes

// Arrays
let sShore = ['Farmer', 'Fox', 'Goose', 'Corn'];
let nShore = [];

// DOMelements
const domMessageEle = document.getElementById('message');
const domsShoreEle = document.getElementById('southShore');
const domnShoreEle = document.getElementById('northShore');

// HTML Display Message Handler
display('state');

// HTML Display Message
const gooseAteCorn = '🪿The Goose ate the Corn 😭';
const foxAteGoose = '🦊 The Fox ate the Goose 😭';
const illegalMove =
  'You are trying to move this animal without the presence of the farmer, maybe try moving the farmer to that Shore first?';
const allMoved = 'Everyone is on the North Shore. Good job!';

// HTML Buttons
const farmerButton = document.getElementById('farmerBtn');
const gooseButton = document.getElementById('gooseBtn');
const cornButton = document.getElementById('cornBtn');
const foxButton = document.getElementById('foxBtn');
