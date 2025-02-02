// set

// Declaración

let mySet = new Set()
console.log(mySet)

// Inicialización

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://www.moure.dev")
console.log(mySet)

mySet.delete("https://www.moure.dev")
console.log(mySet)

console.log(mySet.delete("Brais"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size (LONGITUD DE SET)

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
console.log(mySet)