// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(num1, num2) {
    console.log(num1 + num2);
}

//suma(1,2)

// 2. Crea una función que reciba un array de números y 
// devuelva el mayor de ellos

function ej2 () {
    array_numeros = [1,2,3,4,5];
    num_mayor = Math.max(...array_numeros);
    console.log(num_mayor)
}

//ej2()

// 3. Crea una función que reciba un string y devuelva el número 
// de vocales que contiene

function ej3() {
    cadena_texto = "Hola, qué tal";
    vocales = "AEIOUÁÉÍÓÚaeiouaeiou";
    contador = 0;

    for (let text of cadena_texto) {
        if (vocales.includes(text)){
            contador++;
        }  
    }

    return contador++
}

//console.log("El número de vocales es: ", ej3())

// 4. Crea una función que reciba un array de strings y 
// devuelva un nuevo array con las strings en mayúsculas

function array_upper() {
    array_ej4 = ["Hola", "Qué tal", "Cómo estás"];
    //division_array = array_ej4.split('');
    //console.log(division_array)
    //console.log(array_ej4.toUpperCase())

    for (let i = 0; i < array_ej4.length; i++) {
        array_ej4[i] = array_ej4[i].toUpperCase();
    }
    
    return array_ej4
}

//array_upper() // Lo comento para no liarme con el siguiente

// 5. Crea una función que reciba un número y devuelva true si 
// es primo, y false en caso contrario

function funcion_ejercicio5 (numero) {
    
    numeros_primos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,59,61,
    67,71,71,79,83,89,97];
    console.log(numeros_primos.includes(numero))
}

//funcion_ejercicio5(6)
//funcion_ejercicio5(5)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga 
// los elementos comunes entre ambos

function funcion_ej6 () {
    array1 = ["Hola", "Adiós", "Qué tal", "Sopa"];
    array2 = ["Qué tal", "Hola", "Cebolla", "Sopa"];
    comunes = array1.filter(elemento => array2.includes(elemento))
    console.log(comunes)
}

//funcion_ej6()

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los 
// números pares

function suma_pares_array (array) {
    return array
        .filter(num => num % 2 === 0)
        .reduce((acumuladorr,num) => acumuladorr + num, 0);
}

array_ej7 = [0,1,2,3,4,5,6,7,8,9,10];

console.log(suma_pares_array(array_ej7));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada
// número elevado al cuadrado

array_ej8 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
array_ej8_2 = [];

function array_cuadrado (array) {
    
    for (let i = 0; i < array_ej8.length; i++) {
        array_ej8_2.push(Math.pow(array_ej8[i],2))
    }
    return console.log(array_ej8_2);
}

array_cuadrado(array_ej8);

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las
// palabras en orden inverso

function ej_9 (text) {
    separar = text.split("");
    hacia_atras = separar.reverse();
    console.log(hacia_atras)
}

texto_cadena = "Hola, qué tal";
ej_9(texto_cadena);

// 10. Crea una función que calcule el factorial de un número dado

function funcion_ej10 (num) {

    if (num <= 0) {
        console.log("No existe el factorial de números negativos ni de 0");
    }
    
    let factorial = 1;    
    for (i = 1; i <= num; i++) {
            factorial *= i;
    }
    return factorial;
}
const num = 5;
console.log(`El factorial de ${num} es ${funcion_ej10(num)}`)