// Console

// log

console.log("Hola, JavaScript!")

// error

console.error("Este es un mensaje de error.")
console.error("Error al conectarse a la base de datos: ", new Error("Conexión fallida."))

// warn

console.warn("Este es un mensaje de advertencia.")

// info

console.info("Este es un mensaje de información adicional.")

// table

let data = [
    ["Brais", 37],
    ["Sara", 21]
]

console.table(data)

data = [
    { name: "Brais, age: 37"},
    { name: "Sara", age: 21 }
]

console.table(data)

// group ()

console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd()
console.log("jkfsjhfsd")

// time

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

} 

console.timeEnd("Tiempo de ejecución 2")

// assert

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad.")