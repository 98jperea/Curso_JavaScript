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

function sumintegers(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }

    return a + b
} 

//console.log(sumintegers(5,10))

try {
    console.log(sumintegers(5,10))
    console.log(sumintegers("5",10))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// Capturar varios tipos de errores

try {
    console.log(sumintegers("5",10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// Crear excepciones personalizadas

class SumIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumintegers(0,10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}