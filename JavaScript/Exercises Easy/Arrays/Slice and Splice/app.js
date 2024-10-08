const starWarsNames = [
  'Luke Skywalker',
  'Darth Vader',
  'Leia Organa',
  'Han Solo',
  'Yoda',
  'Obi-Wan Kenobi',
  'Chewbacca',
  'Boba Fett',
  'Emperor Palpatine',
  'Ahsoka Tano',
];

//Slice - cuts, deletes and returns deleted items but does not modify original array
console.log('Initializing slice');
console.log(starWarsNames.length); //Logs the array length
console.log(starWarsNames.slice(3, 4)); //Returns Han Solo, 4 is not inclusive
console.log(starWarsNames.length); //Logs the array length after slice which is the same as before

//Splice - cuts, deletes or adds, returns deleted if deleted and modifies original array
console.log('Initializing splice with removal');
console.log(starWarsNames.length); //Logs the current array length
console.log(starWarsNames.splice(5, 1, 'Super Mario', 'Batman')); //Removes Obi-Wan Kenobi and adds Super Mario and Batman instead
console.log(starWarsNames.length); //Since we modified the aray we should now have 1 less, and 1 more than before, -1, +2
console.log(starWarsNames); //Logs the actual array that we have modified
console.log('Initializing splice withouth removal');
console.log(starWarsNames.length); //Logs the current array length
console.log(starWarsNames.splice(5, 0, 'Yoschi', 'Lars Monsen')); //Adds Yoschi and Lars Monsen at position 5 without removing any items and therefore logging no returned value
console.log(starWarsNames.length); //Since we didnt remove anyting, our array should be 2 items bigger
console.log(starWarsNames); //Logs the actual array that we have modified
