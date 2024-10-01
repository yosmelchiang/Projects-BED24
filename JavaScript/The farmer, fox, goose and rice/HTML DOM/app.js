// We are going to initialize two arrays for moving the entities
// We need a way to move the entities from one array to the other

//Array.filter()
// Creates a copy of an Array, iterating each item by the filter we provide, uses a function to do the filtering
let log = console.log; //For testing purposes

let sShore = ["Farmer", "Fox", "Goose", "Corn"];
let nShore = [];

// HTML Handler
display("state");

function move(resource) {
  if (resource == "Goose") {
    // Illegal move
    if (nShore.includes(resource) && !nShore.includes("Farmer")) {
      display("illegalMove");
      return; //Prevents the rest of the code on executing if an illegal move is reached
    } else if (sShore.includes(resource) && !sShore.includes("Farmer")) {
      display("illegalMove");
      return;
    }

    if (sShore.includes(resource)) {
      sShore = sShore.filter(
        (items) => items !== resource && items !== "Farmer"
      ); // We are going through each element in sShore and filtering the array by every element that is not Goose and Farmer
      nShore.push(resource);

      //Checks if the farmer is already in that shore, if not, push
      if (nShore.includes("Farmer")) {
      } else {
        nShore.push("Farmer");
      }

      checkSafety();
      display("state");
    } else {
      nShore = nShore.filter(
        (items) => items !== resource && items != "Farmer"
      );
      sShore.push(resource, "Farmer");

      //Checks if the farmer is already in that shore, if not, push
      if (sShore.includes("Farmer")) {
      } else {
        sShore.push("Farmer");
      }

      checkSafety();
      display("state");
    }
  }

  if (resource == "Fox") {
    // Illegal move
    if (nShore.includes(resource) && !nShore.includes("Farmer")) {
      display("illegalMove");
      return; //Prevents the rest of the code on executing if an illegal move is reached
    } else if (sShore.includes(resource) && !sShore.includes("Farmer")) {
      display("illegalMove");
      return;
    }

    if (sShore.includes(resource)) {
      sShore = sShore.filter(
        (items) => items !== resource && items !== "Farmer"
      );
      nShore.push(resource);

      //Checks if the farmer is already in that shore, if not, push
      if (nShore.includes("Farmer")) {
      } else {
        nShore.push("Farmer");
      }

      checkSafety();
      display("state");
    } else {
      nShore = nShore.filter(
        (items) => items !== resource && items != "Farmer"
      );
      sShore.push(resource);

      //Checks if the farmer is already in that shore, if not, push
      if (sShore.includes("Farmer")) {
      } else {
        sShore.push("Farmer");
      }

      checkSafety();
      display("state");
    }
  }

  if (resource == "Corn") {
    // Illegal move
    if (nShore.includes(resource) && !nShore.includes("Farmer")) {
      display("illegalMove");
      return; //Prevents the rest of the code on executing if an illegal move is reached
    } else if (sShore.includes(resource) && !sShore.includes("Farmer")) {
      display("illegalMove");
      return;
    }

    if (sShore.includes(resource)) {
      sShore = sShore.filter(
        (items) => items !== resource && items !== "Farmer"
      );
      nShore.push(resource);

      //Checks if the farmer is already in that shore, if not, push
      if (nShore.includes("Farmer")) {
      } else {
        nShore.push("Farmer");
      }

      checkSafety();
      display("state");
    } else {
      nShore = nShore.filter(
        (items) => items !== resource && items != "Farmer"
      );
      sShore.push(resource);

      //Checks if the farmer is already in that shore, if not, push
      if (sShore.includes("Farmer")) {
      } else {
        sShore.push("Farmer");
      }

      checkSafety();
      display("state");
    }
  }

  if (resource == "Farmer") {
    if (sShore.includes(resource)) {
      sShore = sShore.filter((items) => items !== resource);

      //Checks if the farmer is already in that shore, if not, push
      if (nShore.includes("Farmer")) {
      } else {
        nShore.push("Farmer");
      }

      checkSafety();
      display("state");
    } else {
      nShore = nShore.filter((items) => items !== resource);
      //Checks if the farmer is already in that shore, if not, push
      if (sShore.includes("Farmer")) {
      } else {
        sShore.push("Farmer");
      }

      checkSafety();
      display("state");
    }
  }
}

function display(type) {
  if (type == "state") {
    document.getElementById("southShore").innerHTML = sShore.join(", ");
    document.getElementById("northShore").innerHTML = nShore.join(", ");
  } else if (type == "gooseAteCorn") {
    disableControls();
    document.getElementById("message").innerHTML = "🪿The Goose ate the Corn 😭";
    document.getElementById("message").style.color = "white";
    document.getElementById("message").style.backgroundColor = "red";
    // Clears the message after 3 seconds
    setTimeout(() => {
      document.getElementById("message").innerHTML = "";
      restart();
    }, 3000);
  } else if (type == "foxAteGoose") {
    disableControls();
    document.getElementById("message").innerHTML =
      "🦊 The Fox ate the Goose 😭";
    document.getElementById("message").style.color = "white";
    document.getElementById("message").style.backgroundColor = "red";
    // Clears the message after 3 seconds
    setTimeout(() => {
      document.getElementById("message").innerHTML = "";
      restart();
    }, 3000);
  } else if (type == "allSafe") {
    //Disabled this because it was annoying.
    document.getElementById("message").innerHTML =
      "👩‍🌾 Transportation successful, no animals were harmed during this move";
    document.getElementById("message").style.color = "white";
    document.getElementById("message").style.backgroundColor = "green";
    // Clears the message after 4 seconds
    setTimeout(() => {
      document.getElementById("message").innerHTML = "";
    }, 3000);
  } else if (type == "illegalMove") {
    document.getElementById("message").innerHTML =
      "You are trying to move this animal without the presence of the farmer, maybe try moving the farmer to that Shore first?";
    document.getElementById("message").style.color = "white";
    document.getElementById("message").style.backgroundColor = "red";
    // Clears the message after 3 seconds
    setTimeout(() => {
      document.getElementById("message").innerHTML = "";
    }, 3000);
  } else if (type == "allMoved") {
    document.getElementById("message").innerHTML =
      "Everyone is on the North Shore. Good job!";
    document.getElementById("message").style.color = "white";
    document.getElementById("message").style.backgroundColor = "green";
  }
}

function checkSafety() {
  if (
    sShore.includes("Fox") &&
    sShore.includes("Goose") &&
    !sShore.includes("Farmer")
  ) {
    display("foxAteGoose");
  } else if (
    nShore.includes("Fox") &&
    nShore.includes("Goose") &&
    !nShore.includes("Farmer")
  ) {
    display("foxAteGoose");
  } else if (
    sShore.includes("Goose") &&
    sShore.includes("Corn") &&
    !sShore.includes("Farmer")
  ) {
    display("gooseAteCorn");
  } else if (
    nShore.includes("Goose") &&
    nShore.includes("Corn") &&
    !nShore.includes("Farmer")
  ) {
    display("gooseAteCorn");
  } else if (nShore.length === 4) {
    display("allMoved");
  } else {
  }
}

function disableControls() {
  document.getElementById("farmerBtn").style.display = "none";
  document.getElementById("gooseBtn").style.display = "none";
  document.getElementById("cornBtn").style.display = "none";
  document.getElementById("foxBtn").style.display = "none";
}

function restart() {
  sShore = ["Farmer", "Fox", "Goose", "Corn"];
  nShore = [];
  display("state");
  document.getElementById("farmerBtn").style.display = "inline";
  document.getElementById("gooseBtn").style.display = "inline";
  document.getElementById("cornBtn").style.display = "inline";
  document.getElementById("foxBtn").style.display = "inline";
}
