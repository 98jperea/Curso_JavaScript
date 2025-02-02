// Strings

let myName = "Brais"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Brais"))
console.log(greeting.includes("MoureDev"))
console.log(greeting.includes("Hola"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Brais", "Mouredev"))

// Template literals (plantillas literales)

let message = `Hola, este
es mi
curso de
Javascript`

console.log(message)

let email = "braismoure@mouredev.com"

console.log(email)

console.log(`Hola, ${myName} !`)