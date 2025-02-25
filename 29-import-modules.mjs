// Importación de módulos

import { add, PI, name, Circle } from "./28-export-modules.mjs"

import defaultImport from "./28-export-modules.mjs"

// Funciones

console.log(add(5,10)) 

// Propiedades

console.log(PI) 
console.log(name)

// Classes

let circle = new Circle(5)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// Importación por defecto

//substract(5,10)

console.log(defaultImport(5,10))

//console.log(resta(5,10)) // Error: resta is not defined

/*let MyClass = new defaultImport()
MyClass.func()*/

// Proyecto Modular

// import { MyClass } from "./classes/MyClass.js"

const os = require("os")

console.log(os.platform())