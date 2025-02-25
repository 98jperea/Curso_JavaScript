// 1. Crea una función que utilice error correctamente

function errorFunction() {
    console.error("Esto es un mensaje de error")
}

errorFunction()

// 2. Crea una función que utilice warn correctamente

function warnFunction() {
    console.warn("Esto es un mensaje de advertencia")
}

warnFunction()

// 3. Crea una función que utilice info correctamente

function infoFunction() {
    console.info("Esto es un mensaje de información")
}

infoFunction()

// 4. Utiliza table

let data = [
    ["Brais", 37],
    ["Sara", 21]
]

console.table(data)

// 5. Utiliza group

console.group("Usuario:")
console.log("Nombre: José")
console.log("Edad: 27")
console.groupEnd()

// 6. Utiliza time

console.time("Tiempo de ejecución")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución")

// 7. Valida con assert si un número es positivo

let age = 17

console.assert(age >= 18, "El usuario debe ser mayor de edad.")

// 8. Utiliza count

console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// 9. Utiliza trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución")
}

funcA()

// 10. Utiliza clear

console.clear()