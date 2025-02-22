// 1. Captura una excepción utilizando try-catch

try {
    console.log(miobjeto)
    console.log("Finaliza la ejecución sin errores")
} catch {
    console.log("Se ha producido un error")
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log(miobjeto)
    console.log("Finaliza la ejecución sin errores")
} catch {
    console.log("Se ha producido un error")
} finally {
    console.log("Este código se ejecuta siempre sin ningún problema")
}

// 3. Lanza una excepción genérica

try {
    console.log(miobjeto)
    console.log("Finaliza la ejecución sin errores")
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error){
        console.log("Se ha producido un error")
    }
}    

// 4. Crea una excepción personalizada

function sumintegers(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }

    return a + b
} 

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
    console.log(sumintegers("0",10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers
}

// 5. Lanza una excepción personalizada

// Hecho!!

// 6. Lanza varias excepciones según una lógica definida

try {
    console.log(sumintegers("5",10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    console.log(miobjeto)
    console.log("Finaliza sin errores")
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Es un TypeError", error.message)
    } else if (error instanceof Error) {
        console.log("Error!")
    } else {
      console.log(error) 
    }
  }

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

console.log("---------  Ej 8  ---------")
const valores = [10, "hola"]

valores.forEach((valor,index) => {
    
    try {
        let numero = parseFloat(valor)
    
        if (isNaN(numero)) {
            throw new Error(`${valor} no es valido`)
        }
        console.log(`${valor} convertido`)
    } catch(error) {
        console.error(`Error con ${valor}`)
    }
})

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una
// excepción personal

console.log("---------  Ej 9  ---------")
function verificarPropiedad(objeto, propiedad) {
    try {
        if (!objeto.hasOwnProperty(propiedad)) {
            throw new Error(`La propiedad "${propiedad}" no existe en el objeto.`);
        }
        console.log(`La propiedad "${propiedad}" existe en el objeto.`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// Ejemplo de uso
const miObjeto = {
    nombre: "Juan",
    edad: 30
};

verificarPropiedad(miObjeto, "nombre");  // La propiedad "nombre" existe en el objeto.
verificarPropiedad(miObjeto, "direccion");  // Error: La propiedad "direccion" no existe en el objeto.


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

console.log("---------  Ej 10  ---------")

function realizarReintentos(funcion, maxReintentos = 10) {
    let intentos = 0;

    function intentar() {
        try {
            funcion();  // Intentamos ejecutar la función proporcionada
            console.log("Operación exitosa.");
        } catch (error) {
            intentos++;
            if (intentos < maxReintentos) {
                console.log(`Intento ${intentos} fallido. Reintentando...`);
                intentar();  // Reintenta la función
            } else {
                console.error(`Se alcanzó el número máximo de intentos (${maxReintentos}). Error: ${error.message}`);
            }
        }
    }

    intentar();  // Inicia el primer intento
}

// Ejemplo de uso
function falloAleatorio() {
    if (Math.random() > 0.7) {
        console.log("¡Función ejecutada correctamente!");
    } else {
        throw new Error("Error aleatorio al ejecutar la función.");
    }
}

realizarReintentos(falloAleatorio, 11);  // Intentará ejecutar `falloAleatorio` hasta 10 veces
