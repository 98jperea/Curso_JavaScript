// 1. Exporta una función

export function suma(a,b) {
    return a + b
}

// 2. Exporta una constante

export const PI = 3.1416

// 3. Exporta una clase

export class Cuadrado {

    constructor(lado) {
        this.lado = lado
    }

    area() {
        return Math.pow(this.lado, 2)
    }

    perimetro() {
        return 4 * this.lado
    }
}

// 4. Importa una función

// archivo 32-module-exercises.js

// 5. Importa una constante

// archivo 32-module-exercises.js

// 6. Importa una clase

// archivo 32-module-exercises.js

// 7. Exporta una función, una constante y una clase por defecto

export function substract(a,b) {
    return a - b
}

export const c1 = 1

export default class clase1 {
    
        constructor() {
            console.log("clase1")
        }
}

// 8. Importa una función, una constante y una clase por defecto

// archivo 32-module-exercises.js

// 9. Exporta una función, una constante y una clase desde una carpeta

// RUTA: C:\Users\josep\Desktop\X\JAVASCRIPT\curso_principiantes_JS_mouredev\Basic\carpeta_ejercicios_31\archivo1.js

// 10. Importa una función, una constante y una clase desde un directorio
// diferente al anterior

import { resta, c2, clase2 } from "./carpeta_ejercicios_31/archivo1.js"

console.log(resta(5,10))
console.log(c2)
console.log(new clase2())