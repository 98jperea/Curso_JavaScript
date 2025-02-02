// 1. Concatena dos cadenas de texto

let nombre = "Mi nombre es Brais"
let dedondesoy = " y soy de Sevilla"
console.log(nombre + dedondesoy)



// 2. Muestra la longitud de una cadena de texto

console.log(nombre.length)



// 3. Muestra el primer y último carácter de un string


console.log("El primero es", nombre[0], "y el último es",
    nombre[17])


// 4. Convierte a mayúsculas y minúsculas con un string


console.log(nombre.toUpperCase()) // mayúsculas
console.log(nombre.toLowerCase()) // minúsculas


// 5. Crea una cadena de texto en varias líneas

let mensaje = `Hola,
esto es un
mensaje`
console.log(mensaje)


// 6. Interpola el valor de una variable en un string

console.log(`Este es el mensaje: ${mensaje}`)


// 7. Reemplaza todos los espacios en blanco 
// de un string por guiones

console.log(mensaje.replace(" ","-"))


// 8. Comprueba si una cadena de texto contiene 
// una palabra concreta


console.log(mensaje.includes("hola"))


// 9. Comprueba si dos strings son iguales

let frase1 = "Me llamo Jose"
let frase2 = "Me llamo Luis"

if (frase1 == frase2) {
    console.log("Las frases son iguales");
}
    else {
        console.log("Las frases NO son iguales")
    }


// 10. Comprueba si dos strings tienen la misma longitud

if (frase1.length == frase2.length) {
    console.log("Las longitudes de las frases son iguales")
}
    else {
        console.log("Las longitudes de las frases NO son iguales")
    }