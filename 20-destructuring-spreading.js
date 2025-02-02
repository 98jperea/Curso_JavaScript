// Desestructuración

let myArray = [1, 2, 3, 4]

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

myArray.push(5)
console.log(myArray)

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuración

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4, myValue5] = myArray 
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)

// Sintaxis arrays con valores predeterminados

let [myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0, myValue10 = 0] = myArray
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)
console.log(myValue10)

// Ignorar elementos array

let [myValue11, , , myValue14] = myArray
console.log(myValue11)
console.log(myValue14)

// Sintaxis objects

let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objects con valores predeterminados

let { name2, age2, alias2, email = "email@email.com" } = person

console.log(name2) // No existe
console.log(age2) // No existe
console.log(alias2) // No existe
console.log(email)

// Sintaxis objects con nuevos nombres de variables

let { name: name3, age: age3, alias: alias3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objetos anidados

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function() {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log("La persona trabaja.")
        }
    }
}

let {name: name4, job: { name: jobName }} = person3

console.log(name4)
console.log(jobName)

// Propagación (...)

let myArray2 = [...myArray, 5, 6] // Copia

console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray]

console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis objects

let person4 = { ...person, email: "braismoure@mouredev.com" }

console.log(person4)

// Copia de objects

let person5 = { ...person }

console.log(person5)
