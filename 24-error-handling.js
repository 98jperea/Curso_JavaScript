// Excepción


// Produce una excepción
// let myObject
// console.log(myObject.email)

// Tratamiento de errores

// try-catch

try {
    // Código que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch {
    // Bloque de error
    console.log("Se ha producido un error")
}

// Captura del error

try {
    console.log(myObject.email)
} catch(error) {
    console.log("Se ha producido un error:", error.message)
}

// finally

//try {
//    console.log(myObject.email)
//} catch(error) {
//    console.log("Se ha producido un error:", error.message)
//} finally {
//    console.log("Este código se ejecuta siempre")
//}

// Lanzamiento de errores

// throw

function sum(a, b) {
    if (!(a instanceof Number) || !(b instanceof Number)) {
        console.log("No se pueden sumar estas propiedades")
    }
    return a + b
}

console.log(sum(5, 10))

//throw new Error("Se ha producido un error");