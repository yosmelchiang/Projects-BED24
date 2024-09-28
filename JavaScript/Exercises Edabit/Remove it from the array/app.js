//Exercise link
// https://github.com/TheOdinProject/javascript-exercises/tree/main/04_removeFromArray

// We want to make a function that accepts an array as first parameter and a number as the second parameter
// The second parameter should be an element in the array that we want to remove

function removeFromArray(arr, n) {
    let newArray = []
    arr.forEach(function (item, index, array) {
        if (!(item === n)) {
            newArray.push(item)
        }
    })
    return newArray;
}

console.log(removeFromArray([1, 2, 3, 4], 3))
console.log(removeFromArray(['John', 'Kristian', 'Martin', 'Niklas'], 'Martin'))
