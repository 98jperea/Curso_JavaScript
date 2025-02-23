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