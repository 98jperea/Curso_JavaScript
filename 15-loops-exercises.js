// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

    for (let i = 1; i <= 20; i++) {
        console.log(i)
    }

// 2. Crea un bucle que sume todos los números del 1 al 100 y 
// muestre el resultado

    for (let i = 1; i <= 100; i++) {
        console.log(i + i++)
    }

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

    for (let i = 2; i <= 50; i += 2) {
        console.log(i);
    }

// 4. Dado un array de nombres, usa un bucle para imprimir 
// cada nombre en la consola

    array_nombres = ["Jose", "Perea", "Bueno", "Luis",
        "Garcia", "Rodriguez"
    ]

    for (let valor of array_nombres) {
        console.log(valor)
    }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

    function contar_letras_vocales(texto) {
        let contador = 0;
        let vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";

        for (let char of texto) {
            if (vocales.includes(char)) {
                contador++;
            }
        }

        return contador;
    }

    let texto = "Hola, ¿cómo estás?"
    console.log(contar_letras_vocales(texto))

// 6. Dado un array de números, usa un bucle para multiplicar 
// todos los números y mostrar el producto

    array_numeros = [1,2,3,4,5];

    while(true) {
        console.log("La multiplicación es:",array_numeros[0]*array_numeros[1]*array_numeros[2]*
            array_numeros[3]*array_numeros[4]);
        break;
    }

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

    tabla_multiplicar_numero5 = [
        "5 x 0 = 0",
        "5 x 1 = 5",
        "5 x 2 = 10",
        "5 x 3 = 15",
        "5 x 4 = 20",
        "5 x 5 = 25",
        "5 x 6 = 30",
        "5 x 7 = 35",
        "5 x 8 = 40",
        "5 x 9 = 45",
        "5 x 10 = 50"
    ]

    while(true) {
        console.log("La tabla de multiplicar de 5 es:",
            tabla_multiplicar_numero5);
        break;
    }

// 8. Usa un bucle para invertir una cadena de texto

    while(true) {
        let cadena_texto = "Hola, mi nombre es José Perea Bueno";
        let cadena_texto_split = cadena_texto.split('');
        let cadena_texto_reverse = cadena_texto_split.reverse();
        let cadena_texto_join = cadena_texto_reverse.join();
        console.log("Cadena de texto invertida:",cadena_texto_join);
        break;
    }

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de 
// Fibonacci

function funcion_fibonacci(numero) {
    
    array_fibonacci = [0,1];

    for (i = 2; i < numero; i++) {
        array_fibonacci.push(array_fibonacci[i-1] + array_fibonacci[i-2]);
    }

    return array_fibonacci;
}

console.log(funcion_fibonacci(10));

// 10. Dado un array de números, usa un bucle para crear un nuevo 
// array que contenga solo los números
// mayores a 10 

    let arrayej10 = [5,6,7,8,9,10,11,12,13,14,15];
    let arrayej10_2 = [];

    for (let i = 0; i < arrayej10.length; i++) {
        if (arrayej10[i] > 10) {
            arrayej10_2.push(arrayej10[i]);
        }
    }


console.log(arrayej10_2)
console.log("El primer array tiene:",arrayej10.length)
//console.log(arrayej10[0])