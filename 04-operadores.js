// Operadores

// Operadores Aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
console.log(myVariable)
myVariable *= 2
console.log(myVariable)
myVariable /= 2
console.log(myVariable)
myVariable %= 2
console.log(myVariable)
myVariable **= 2
console.log(myVariable)


// Operadores de comparación

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) // Igualdad por valor
console.log(a == "6") // Igualdad por valor
console.log(a == a) 
console.log(a === a) // Igualdad por identidad (tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != a)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)


// Truthy values (valores verdaderos)

// Todos los números positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacías
// El boolean true

// Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacías

// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20) // Si las dos son falsas (falso)
console.log(5 < 10 && 15 < 20) // Si las dos son verdaderas (verdadero)
console.log(5 < 10 && 15 > 20) // Algún falso - FALSO
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or

console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20) // Si alguna es verdadera da -> TRUE

console.log(5 < 10 && 15 > 20 || 30 < 40) // Si una se cumple es -> TRUE

// not (!)

console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = true

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")