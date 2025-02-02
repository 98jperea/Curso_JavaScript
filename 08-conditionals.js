// if, else if, else

// if (si)

let age = 18

/*if (age == 37) {
    // Bloque
    console.log("La edad es 37")
}

if (age != 37) {
    // Bloque
    console.log("La edad NO es 37")
}*/

// else if (si no, si)

if (age == 37) {
    console.log("La edad es IGUAL A 37")
} else if (age < 18) {
    console.log("El usuario es menor de edad")
} else {
    console.log("La edad ES DISTINTA de 37")
}

// Operador ternario

const message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

// switch 

let day = 0
let dayName

/*if (day == 0) {
    dayName = "Lunes"
} else if (day == 1) {
    dayName = "Martes"
}*/ // Switch es alternativa a este chorizo

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)