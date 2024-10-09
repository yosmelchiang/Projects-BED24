function longestWord(word) {
    let wordSplit = word.split(' ') //We are splitting the string into arrays separated by spaces
    let longest = ''; //We are creating a variable with an empty string, it needs to be null to be used as a condition otherwise itll give undefined

    for(let i = 0; i < wordSplit.length; i++){
        if(longest.length < wordSplit[i].length){
            longest = wordSplit[i]
        }
    }
    return longest;
}

console.log(longestWord('Hello wooooorld'))
console.log(longestWord('this is a sentence'))