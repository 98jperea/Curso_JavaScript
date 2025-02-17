// 1. Crea una clase que reciba dos propiedades

class Empleo {

    constructor(empresa, puesto) {
        this.empresa = empresa
        this.puesto = puesto
    }
}

// 2. Añade un método a la clase que utilice las propiedades

let empleado = new Empleo("Accenture", "CTO")

// 3. Muestra los valores de las propiedades e invoca a la función

console.log(empleado)

// 4. Añade un método estático a la primera clase

class Empleo2 {
    static sum(salario, bonus) {
        return salario + bonus
    }

}

// 5. Haz uso del método estático

console.log(Empleo2.sum(30000,15000))

// 6. Crea una clase que haga uso de herencia

class Empleado {
    
    constructor(name, puesto) {
        this.name = name
        this.puesto = puesto
    }

    empresa() {
        console.log("La empresa es Accenture")
    }
}

class Departamento extends Empleado {

    empresa() {
        console.log("La empresa sigue siendo Accenture")
    }

    proyecto() {
        console.log("El proyecto es de Ing Aeroespacial")
    }
}

let miempleado = new Empleado("Jose", "CTO")
console.log(miempleado)

let midepartamento = new Departamento("Tecnología","Jefe")
midepartamento.empresa()

// 7. Crea una clase que haga uso de getters y setters

class empresa_publica {

    #nombre
    #sector
    #facturacion
    #num_empleados

    constructor(nombre, sector, facturacion, num_empleados) {
        this.#nombre = nombre
        this.#sector = sector
        this.#facturacion = facturacion
        this.#num_empleados = num_empleados
    }

    get nombre() {
        return this.#nombre
    }

    set sector(newsector) {
        this.#sector = newsector
    }
}

empresa2 = new empresa_publica("Indra", "TIC", 750000, 15)
console.log(empresa2)
console.log(empresa2.nombre)
console.log(empresa2.sector)

// 8. Modifica la clase con getters y setters para que use propiedades privadas

//Hecho en 7

// 9. Utiliza los get y set y muestra sus valores

//Hecho en 7

// 10. Sobreescribe un método de una clase que utilice herencia

class salario extends Empleado {
    empresa() {
        console.log("La empresa es Indra")
    }
}

let misalario = new salario()
misalario.empresa()