// 1. Crea un objeto con 3 propiedades

let persona = {
    nombre: "José",
    edad: 26,
    alias: "Pepe"
}

// 2. Accede y muestra su valor

console.log(typeof persona, persona)

// 3. Agrega una nueva propiedad

persona.email = "josepereabueno@hotmail.com"
console.log(persona)

// 4. Elimina una de las 3 primeras propiedades

delete persona.email
console.log(persona)

// 5. Agrega una función e invócala

let persona2 = {
    name: "Luis",
    job: function() {
        console.log("La persona es abogada")
    }
}

persona2.job()

// 6. Itera las propiedades del objeto

for (let key in persona2) {
    console.log(key + ": " + persona2[key])
}

// 7. Crea un objeto anidado

let persona3 = {
    nombre: "José",
    trabajo: {
        puesto: "informático",
        experiencia: "20 años"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(persona3.trabajo.puesto)
console.log(persona3.trabajo.experiencia)

// 9. Comprueba si los dos objetos creados son iguales

console.log(persona2 == persona3)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(persona2.name == persona3.nombre)