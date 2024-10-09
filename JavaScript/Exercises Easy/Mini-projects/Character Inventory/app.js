let bow = {
  id: 'item1',
  name: 'Bow',
  type: 'Ranged',
  value: 20,
  icon: 'https://www.naughtynathan.co.uk/minecraft/images/fishing_rod.png',
};
let torch = {
  id: 'item2',
  name: 'Torch',
  luminous: true,
  value: 2,
  icon: 'https://www.naughtynathan.co.uk/minecraft/images/torch.png',
};
let bucket = {
  id: 'item3',
  name: 'Bucket',
  rarity: 'Common',
  value: 40,
  icon: 'https://www.naughtynathan.co.uk/minecraft/images/bucket.png',
};

let inventory = [bow, bucket, torch];

for (let i = 0; i <= inventory.length - 1; i++) {
  //Creates the first div and sets the CSS style class to it
  const outerDiv = document.createElement('div');
  const inventoryGrid = document.getElementById('myGrid');
  outerDiv.setAttribute('class', 'col-2 inventory-slot');
  inventoryGrid.append(outerDiv);

  //Creates the second div and sets the CSS style class to it
  let innerDiv = document.createElement('div');
  innerDiv.setAttribute('id', inventory[i].id);
  outerDiv.append(innerDiv);
  innerDiv = document.getElementById(inventory[i].id);
  innerDiv.setAttribute('class', 'inventory-item');
  innerDiv.innerHTML = `<img src="${inventory[i].icon}" title="${inventory[i].name}"><p>${inventory[i].name}</p>`;
}