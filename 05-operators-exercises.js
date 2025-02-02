// 1. Crea una variable para cada operación aritmética

    let numero1 = 10;
    let numero2 = 20;

    // Suma
    let suma = numero1 + numero2
    console.log("Suma:", suma);

    // Resta
    let resta = numero1 - numero2
    console.log("Resta:", resta);

    // Multiplicación
    let multiplicacion = numero1 * numero2
    console.log("Multiplicacion:", multiplicacion);

    // División
    let division = numero1 / numero2
    console.log("División:", division)

    // Módulo
    let modulo = numero1 % numero2;
    console.log("Módulo:", modulo)

    // Exponenciación
    let potencia = numero1 ** numero2;
    console.log("Potencia:", potencia);



//2. Crea una variable para cada tipo de operación de asignación, 
// que haga uso de las variables utilizadas para las operaciones aritméticas

    numero1 += 10
    numero2 += 20
    console.log(numero1)
    console.log(numero2)

    numero1 -= 10
    numero2 -= 20
    console.log(numero1)
    console.log(numero2)

    numero1 *= 10
    numero2 *= 20
    console.log(numero1)
    console.log(numero2)

    numero1 /= 10
    numero2 /= 20
    console.log(numero1)
    console.log(numero2)

    numero1 %= 10
    numero2 %= 20
    console.log(numero1)
    console.log(numero2)

    numero1 **= 10
    numero2 **= 20
    console.log(numero1)
    console.log(numero2)



//3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

    let a = 10
    let b = 20

    console.log(a < b)
    console.log(a <= b)
    console.log(a == 10)
    console.log(b == 20)
    console.log(a != b)



//4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

    console.log(a > b)
    console.log(a >= b)
    console.log(a != 10)
    console.log(b != 20)
    console.log(a == b)



//5. Utiliza el operador lógico and

    console.log(5 > 10 && 15 > 20)
    console.log(5 < 10 && 15 > 20)
    console.log(5 < 10 && 15 < 20) // Solo es True si los dos son verdaderos



//6. Utiliza el operador lógico or

    console.log(5 > 10 || 15 > 20)
    console.log(5 < 10 || 15 > 20)
    console.log(5 < 10 || 15 < 20) // Si al menos uno es verdadero da TRUE



//7. Combina ambos operadores lógicos

    console.log(5 > 10 && 15 > 20 || 5 < 10) // Da true porque una parte es 
    // TRUE (al menos)



//8. Añade alguna negación

    console.log(!(5 < 10 && 15 < 20 || 18 > 20))



//9. Utiliza el operador ternario

    const uno = true

    uno ? console.log("Unoo") : console.log("Dos")



//10. Combina operadores aritméticos, de comparación 
// y lógicos

    let nuevonumero = 1
    console.log(5 < 10 && (nuevonumero + 1) == 2)
    console.log(5 > 15 || nuevonumero == 1)