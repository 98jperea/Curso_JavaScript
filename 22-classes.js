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

    constructor(name = "Nombre por defecto", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson("Brais", 37)
console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "MoureDev"
console.log(person3.alias)

// Funciones en clases

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }

}

let person4 = new PersonWithMethod("Brais", 37, "MoureDev")
person4.walk()

// Propiedades privadas

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }
}

let person5 = new PrivatePerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person5)

// Getters y Setters

class GetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(newbank) {
        this.#bank = newbank 
    }

/*    get bank() {
        return this.#bank
    }
*/
}

person6 = new GetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"
// NO FUNCIONA console.log(person6.bank)

// Herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("Emite un sonido genérico")
    }
}

class Dog extends Animal {

    sound() {
        console.log("Guau!!")
    }

    run() {
        console.log("El perro corre")
    }


}

class Fish extends Animal {


    swim() {
        console.log("El pez nada")
    }


}

let myDog = new Dog("MoureDog")
//myDog.run()
myDog.sound()
myDog.run()

let myFish = new Fish("MoureFish")
myFish.swim()
myFish.sound()

// Métodos estáticos

class MathOperations {

    static sum(a, b) {
        return a + b
    }
    
}

console.log(MathOperations.sum(5, 10))