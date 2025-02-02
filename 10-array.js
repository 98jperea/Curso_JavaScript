// array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "Mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "Mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Brais"
myArray2[1] = "Moure"
myArray2[2] = "Mouredev"

console.log(myArray2)

my_array = []
myArray[2] = "Brais"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push("37")

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()
myArray.pop()

console.log(myArray)

// shift

myArray.shift()
console.log(myArray.shift)
console.log(myArray)

myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
// myArray.length = 0 // Alternativa (no usar, poco correcto)
console.log(myArray)

// slice

myArray.push("Brais", "Moure", "Mouredev", 37, true)

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)