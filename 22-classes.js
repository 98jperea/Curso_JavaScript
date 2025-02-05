// Clases

let persona = {
    nombre: "José",
    edad: 26,
    alias: "Pepe"
}

class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis 

let person = new Person("Brais", 37, "MoureDev")
let person2 = new Person("Brais", 37, "MoureDev")

console.log(person)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Nombre por defecto", age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson()
console.log(person3)