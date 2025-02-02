// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])
console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has

console.log(myMap.has("surname"))
console.log(myMap.has("name"))

// delete

myMap.delete("email")

console.log(myMap)

// keys, values, entries

console.log(myMap.keys())
console.log(myMap.values())
console.log("Entries:", myMap.entries())

// size

console.log("Cantidad de datos:", myMap.size)

// clear (PARA LIMPIAR/ VACIAR)

myMap.clear()

console.log(myMap)

console.log(myMap.keys()) // keys otra vez para ver cómo cambia