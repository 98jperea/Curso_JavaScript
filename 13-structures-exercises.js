// 1. Crea un array que almanece cinco animales

let miarray = ["perro", "gato", "león", "pajaro", "perro2"]
console.log(miarray)

// 2. Añade dos más. Uno al principio y otro al final

// Al principio
miarray.unshift("Canario")
console.log("Añadido al principio:", miarray)

// Al final
miarray.push("Vaca")
console.log("Añadido al final:", miarray)

// 3. Elimina el que se encuentra en tercera posición

miarray.splice(2,1) // desde la posición 2 (que es la 3, porque la primera
// se llama 0) borrar 1 elemento
console.log(miarray)

// 4. Crea un set que almacene cinco libros

misetnuevo = new Set(["Más Astuto Que El Diablo", "Club 5AM", "Conversaciones con Dios", "El Niño Con El Pijama De Rayas", "Lamborghini"])
console.log(misetnuevo)

// 5. Añade dos más. Uno de ellos repetido

misetnuevo.add("Más Astuto Que El Diablo"), misetnuevo.add("Club 6AM")
console.log(misetnuevo)


// 6. Elimina uno concreto a tu elección

misetnuevo.delete("Más Astuto Que El Diablo")
console.log(misetnuevo)

// 7. Crea un mapa que asocie el número del mes a su nombre

let mimapa = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],
])
console.log(mimapa)

// 8. Comrpueba si el mes número 5 existe en el map e imprime su valor

console.log(mimapa.get(5))

// 9. Añade al mapa una clave con un array como que almacene los meses de verano

    //mimapa.set("mesesdeverano", 7)
    //mimapa.delete("mesesdeverano", 8)
    /*mimapa.set("mesesdeverano", 8)
    console.log(mimapa.get("mesesdeverano"))*/

//console.log(mimapa)
miarrayparaelmapa = [7, 8]
//console.log(miarrayparaelmapa)
mimapa.set("mesesdeverano", miarrayparaelmapa)
//console.log(mimapa)
console.log(mimapa.get("mesesdeverano"))

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

// Creo array

miarray2 = [1, 2, 3]
console.log(miarray2)

// Paso de array a set

miset2 = new Set(miarray2)
console.log(miset2)

// Paso de set a map

let mimapa2 = new Map()
console.log(mimapa2)

mimapa2.set(miarray2)
console.log(mimapa2)
