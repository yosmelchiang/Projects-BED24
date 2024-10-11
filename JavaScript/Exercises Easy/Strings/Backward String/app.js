log = console.log

function reverseString(str) {
    let splStr = str.split('') //Split will make an array of 1 element unless we specify a separator, so we add '' to sort each char individually
    let revStr = splStr.reverse()
    let joiStr = revStr.join('') //Join will concatenate them by commas, so here we specifiy we dont want commas, or spaces between them
    return joiStr;
}

log(reverseString('Hello'))