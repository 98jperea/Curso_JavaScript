// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let miarray = [1, 2, 3, 4, 5]

let mivalor = miarray[0]
let mivalor2 = miarray[1]

console.log(mivalor, "y", mivalor2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [miarray0 = 0, miarray1, miarray2, miarray3, miarray4] = miarray
console.log(miarray)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let persona = {
    nombre: "José",
    edad: 26,
    profesion: "Informático",
    ubicacion: "Sevilla"
}

console.log(persona.nombre, persona.edad)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas 
// variables con nombres diferentes

    // Extraigo dos propiedades de un objeto y las paso por pantalla
    console.log(persona.profesion, persona.ubicacion)

    // Las asigno a nuevas variables con nombres diferentes
    let { name = "José Perea", age = 36, job = "Informático/Programador", 
        location = "Sevilla (España)" } = persona
    console.log(name, age, job, location)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let persona2 = {
    nombre: "Luis",
    profesion: {
        puesto: "Director",
        empresa: "Iturri",
        empresa_anterior: "Ayesa"
    }
}

console.log(persona2.profesion.puesto)

// 6. Usa propagación para combinar dos arrays en uno nuevo

    // Creo dos arrays
    let miarray_ej6 = [0,1,2]
    let miarray2_ej6 = [3,4,5]

    // Los uno con propagación
    let arraytotal = [...miarray_ej6, ...miarray2_ej6]
    console.log(arraytotal)

// 7. Usa propagación para crear una copia de un array

    let array_nuevo = [...arraytotal]
    console.log(array_nuevo)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let persona3 = {
    name: "Pepe",
    age: 27
}

let persona4 = {
    nombre: "Jose Maria",
    edad: 29
}

let persona_nueva = {
    ...persona3, 
    ...persona4
}

console.log(persona_nueva)

// 9. Usa propagación para crear una copia de un objeto

let copia_ej9_obj = {...persona_nueva}
console.log("Resultado:",copia_ej9_obj)

// 10. Combina desestructuración y propagación

let obj_ej10 = {...persona4, ...persona3}
console.log(obj_ej10.name)