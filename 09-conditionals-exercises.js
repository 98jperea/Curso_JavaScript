// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable 
// toma su valor

let nombre = "Jose"

if (nombre == "Jose") {
    console.log(nombre)
} else if (nombre != "Jose") {
    console.log("Error")
}


// 2. Imprime por consola un mensaje si el usuario y contraseña
// coincide con unos establecidos

let usuario = "usuario"
let contraseña = "password"

if (usuario == "usuario" & contraseña == "password") {
    console.log("USUARIO y CONTRASEÑA correctas!!!")
}


// 3. Verifica si un número es positivo, negativo o cero e 
// imprime un mensaje

let numero = 10

if (numero > 0) {
    console.log("Es positivo")
} else if (numero = 0) {
    console.log("Es 0")
} else if (numero < 0) {
    console.log("Es negativo")
}


// 4. Verifica si una persona puede votar o no (mayor o igual a
// 18) e indica cuántos años le faltan

let edad = 18

if (edad >= 18) {
    console.log("La persona puede votar")
} else if (edad < 18) {
    console.log("Le queda(n)", (18 - edad), "año(s)")
}


// 5. Usa el operador ternario para asignar al valor "adulto" o
// "menor" a una variable dependiendo de la edad

const age = edad < 18 ? "Es menor" : "Es adulto"
console.log(age)


// 6. Muestra en que estación del año nos encontramos
// dependiendo del valor de una variable "mes"

let mes = 1
let mesNombre;

if (mes == 0) {
    mesNombre = "Enero"
} else if (mes == 1) {
    mesNombre = "Febrero"
} else if (mes == 2) {
    mesNombre = "Marzo"
} else if (mes == 3) {
    mesNombre = "Abril"
} else if (mes == 4) {
    mesNombre = "Mayo"
} else if (mes == 5) {
    mesNombre = "Junio"
} else if (mes == 6) {
    mesNombre = "Julio"
} else if (mes == 7) {
    mesNombre = "Agosto"
} else if (mes == 8) {
    mesNombre = "Septiembre"
} else if (mes == 9) {
    mesNombre = "Octubre"
} else if (mes == 10) {
    mesNombre = "Noviembre"
} else if (mes == 11) {
    mesNombre = "Diciembre"
}

console.log(mesNombre)

/*
switch(mes) {
    case 0:
        mesNombre = "Enero";
        break;
    case 1:
        mesNombre = "Febrero";
        break;
    case 2:
        mesNombre = "Marzo";
        break;
    case 3:
        mesNombre = "Abril";
        break;
    case 4:
        mesNombre = "Mayo";
        break;
    case 5:
        mesNombre = "Junio";
        break;
    case 6:
        mesNombre = "Julio";
        break;
    case 7:
        mesNombre = "Agosto";
        break;
    case 8:
        mesNombre = "Septiembre";
        break;
    case 9:
        mesNombre = "Octubre";
        break;
    case 10:
        mesNombre = "Noviembre";
        break;
    case 11:
        mesNombre = "Diciembre";
        break;
    default:
        mesNombre = "Mes incorrecto";
}

console.log(mesNombre)
*/

// 7. Muestra el número de días que tiene un mes dependiendo 
// de la variable del ejercicio anterior

let mesDias

if (mes == 0) {
    mesDias = "31 días"
} else if (mes == 1) {
    mesDias = "29 días"
} else if (mes == 2) {
    mesDias = "31 días"
} else if (mes == 3) {
    mesDias = "30 días"
} else if (mes == 4) {
    mesDias = "31 días"
} else if (mes == 5) {
    mesDias = "30 días"
} else if (mes == 6) {
    mesDias = "31 días"
} else if (mes == 7) {
    mesDias = "31 días"
} else if (mes == 8) {
    mesDias = "30 días"
} else if (mes == 9) {
    mesDias = "31 días"
} else if (mes == 10) {
    mesDias = "30 días"
} else if (mes == 11) {
    mesDias = "31 días"
}

console.log(mesNombre, mesDias)

/*switch(mes) {
    case 0:
        mesNombre = "Enero";
        mesDias = "31 días";
        break;
    case 1:
        mesNombre = "Febrero";
        mesDias = "29 días";
        break;
    case 2:
        mesNombre = "Marzo";
        mesDias = "31 días";
        break;
    case 3:
        mesNombre = "Abril";
        mesDias = "30 días";
        break;
    case 4:
        mesNombre = "Mayo";
        mesDias = "31 días";
        break;
    case 5:
        mesNombre = "Junio";
        mesDias = "30 días";
        break;
    case 6:
        mesNombre = "Julio";
        mesDias = "31 días";
        break;
    case 7:
        mesNombre = "Agosto";
        mesDias = "31 días";
        break;
    case 8:
        mesNombre = "Septiembre";
        mesDias = "30 días";
        break;
    case 9:
        mesNombre = "Octubre";
        mesDias = "31 días";
        break;
    case 10:
        mesNombre = "Noviembre";
        mesDias = "30 días";
        break;
    case 11:
        mesNombre = "Diciembre";
        mesDias = "31 días";
        break;
    default:
        mesNombre = "Mes incorrecto";
}

console.log(mesNombre, mesDias)
*/

// 8. Usa un switch para imprimir un mensaje de saludo
// diferente dependiendo del idioma

let idioma = 10
let saludo

switch(idioma) {
    case 0:
        saludo = "Español: Hola, ¿qué tal?";
        break;
    case 1:
        saludo = "English: Hello, what's up?";
        break;
    default:
        saludo = "No tenemos ese idioma disponible (todavía)";
        break;
}

console.log(saludo)


// 9. Usa un switch para hacer de nuevo el ejercicio 6

/*if (mes == 0) {
    mesNombre = "Enero"
} else if (mes == 1) {
    mesNombre = "Febrero"
} else if (mes != 0 & mes != 1) {
    mesNombre = "DESCONOCIDO!!!"
}

console.log(mesNombre)*/


switch(mes) {
    case 0:
        mesNombre = "Enero";
        break;
    case 1:
        mesNombre = "Febrero";
        break;
    case 2:
        mesNombre = "Marzo";
        break;
    case 3:
        mesNombre = "Abril";
        break;
    case 4:
        mesNombre = "Mayo";
        break;
    case 5:
        mesNombre = "Junio";
        break;
    case 6:
        mesNombre = "Julio";
        break;
    case 7:
        mesNombre = "Agosto";
        break;
    case 8:
        mesNombre = "Septiembre";
        break;
    case 9:
        mesNombre = "Octubre";
        break;
    case 10:
        mesNombre = "Noviembre";
        break;
    case 11:
        mesNombre = "Diciembre";
        break;
    default:
        mesNombre = "Mes incorrecto";
}

console.log(mesNombre)


// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch(mes) {
    case 0:
        mesNombre = "Enero";
        mesDias = "31 días";
        break;
    case 1:
        mesNombre = "Febrero";
        mesDias = "29 días";
        break;
    case 2:
        mesNombre = "Marzo";
        mesDias = "31 días";
        break;
    case 3:
        mesNombre = "Abril";
        mesDias = "30 días";
        break;
    case 4:
        mesNombre = "Mayo";
        mesDias = "31 días";
        break;
    case 5:
        mesNombre = "Junio";
        mesDias = "30 días";
        break;
    case 6:
        mesNombre = "Julio";
        mesDias = "31 días";
        break;
    case 7:
        mesNombre = "Agosto";
        mesDias = "31 días";
        break;
    case 8:
        mesNombre = "Septiembre";
        mesDias = "30 días";
        break;
    case 9:
        mesNombre = "Octubre";
        mesDias = "31 días";
        break;
    case 10:
        mesNombre = "Noviembre";
        mesDias = "30 días";
        break;
    case 11:
        mesNombre = "Diciembre";
        mesDias = "31 días";
        break;
    default:
        mesNombre = "Mes incorrecto";
}

console.log(mesNombre, mesDias)