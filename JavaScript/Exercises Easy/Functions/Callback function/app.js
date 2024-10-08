function currentUser(greetUser) {
    let name = 'Steve'

    greetUser(name)
}

function hello(nm) {
    console.log('Hello', nm)
}

// currentUser(hello)

let myArrayOfNames = ['Christian', 'Carlos', 'Thomas', 'Arthur']
myArrayOfNames.forEach(hello)