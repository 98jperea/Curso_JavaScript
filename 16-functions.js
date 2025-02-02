// Funciones

function myFunc() {
    console.log("¡Hola, función!")
}

/*myFunc()
myFunc()
myFunc()
myFunc()
myFunc()*/

for (let i = 0; i < 5; i++) {
    myFunc();
}

// Con parámetros

function myFunc() {
    console.log("¡Hola, función!")
  }
  
  for (let i = 0; i < 5; i++) {
    myFunc() // imprime la función 5 veces
  }
  
// Con parámetros

function myFuncWithParams(name) {
  console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Brais")
myFuncWithParams("Moure")
myFuncWithParams("Mouredev")


// Funciones anonimas

const myFunc2 = function (name) {
  console.log(`¡Hola, ${name}!`)
}

myFunc2("Brais Moure")

// Arrow functions

const myFunc3 = (name) => {
  console.log(`Hola, ${name}`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}`)

myFunc3("Brais Moure")
myFunc4("Brais Moure")

// Parámetros

function sum(a, b) {
  console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)

// Retorno de valores

function mult(a, b) {
    return a * b
}

console.log(mult(5, 10))

let result = mult(5,10)
console.log(result)

// Funciones anidadas

function extern() {
    function intern() {
        console.log("Función interna")
    }
    intern()
}

// intern() // No lo conoce pq está dentro

extern()

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4,"Función de orden superior")

// forEach 

myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])
/*
myArray.forEach(function (value) {
    console.log(value)
})
*/
// myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

// myArray.forEach((value) => console.log(value))