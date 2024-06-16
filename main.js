/* Programación Orientada a Objetos */

/* En JavaScript implementamos clases haciendo uso de la palabra reservada class */

class Animal {
    //inicialización de atributos mediante el constructor
    constructor(nombre,edad) {
        this.nombre = nombre; 
        this.edad = edad;
    }
//métodos
dormir() {
    return `${this.nombre} está durmiendo`;
}

Comer(comida) {
    return `${this.nombre} está comiendo ${comida}`;
}
}

//generamos la instancia "perro" a partir de la clase "Animal"
const perro = new Animal("Firulais", 4);
console.log(perro.dormir());//Firulais está durmiendo


/* Objetos lietarales*/

//podemos crear un objeto en JavaScript asignando un valor literala de objeto a una variable

const dimensiones = {
    altura: 34,
    anchura: 455
}

/* Objetos (instancias)*/

//dentro de las llaves se encuentra el cuerpo de la clase y es donde se definen los miembros de la clase como el constructor y los métodos

class Poligono {
    constructor(alto,ancho) {
        this.alto = alto,
        this.ancho = ancho
    }

    getArea() {
        return (this.alto * this.ancho);
    }
};

const poligono = new Poligono (10,20);
console.log(poligono.getArea()); //200

//ejemplo
//OBJETO LITERAL

let snoopy = {
    //ESTAS SON PROPIEDADES
    nombre: "Snoopy",
    perro: true,
    raza: "Beagle",
    color: "Blanco y Negro",

    //ESTOS SON MÉTODOS, QUE LOS DEFINIMOS COMO UNA FUNCIÓN
    dormir: function() {
        return `zzzzz...`
    }
}

let scoobyDoo = {
    //ESTAS SON PROPIEDADES
    nombre: "Scooby",
    perro: true,
    raza: "Gran Danes",
    color: "Café",
    //ESTOS SON MÉTODOS, QUE LOS DEFINIMOS COMO FUNCIONES
    hablar: function() {
        return `Mi nombre es ${this.nombre}, y soy un ${this.raza}`
    }
}

console.log(`${scoobyDoo.nombre} es un ${scoobyDoo.raza}`);
console.log(`${snoopy.nombre} es un ${snoopy.raza} de color ${snoopy.color}`);
console.log(snoopy["raza"]);
console.log(scoobyDoo.hablar());
console.log(snoopy.dormir());

console.log(`${scoobyDoo.nombre} es un perro de color ${scoobyDoo.color}`);
//sobreescribir es muy sencillo, basta con reasignar el valor del objeto
scoobyDoo.color = "Morado";
console.log(`${scoobyDoo.nombre} ahora es un perro de color ${scoobyDoo.color}`);
//así podemos borrar

delete scoobyDoo.perro;
console.log(scoobyDoo);

/* Ejercicio 1 de la lectura objetos literales */

let myCat = {
    //Propiedades
    nombre: "Chesire Cat",
    gato: true,
    canSmile: true,
    movie: "Alice's Adventures in Wonderland.",
    canFly: true,
    //Método
    sayHello: function() {
        return `Hola, soy un gato ficticio. Mejor conocido como ${this.nombre}, 
        Aparecí por primera vez en ${this.movie}`
    },

    fly: function() {
        return `¡Puedo Volar!`
    }

}

console.log(`${myCat.nombre} es un gato`);
console.log(`${myCat.nombre} apareció por primera vez en ${myCat.movie}`);
console.log(myCat.sayHello());
console.log(myCat.fly());

/* Ejercicio 2 de la lectura Objetos Literales */

let receta = {
    //PROPIEDADES
    titulo: "Mole Poblano",
    porciones: 4,
    ingredientes: ["Chile pasilla", "Tomate", "Cebolla", "Ajo", "Aceite vegetal", "Chocolate", "Caldo de pollo"],

    //MÉTODO
    preparacion: function () {
        return `Coloca el agua con los ${receta.ingredientes[0]}, y colócalos en tu licuadora con los ${receta.ingredientes[1]}, el ${receta.ingredientes[3]} asado, y una taza de ${receta.ingredientes[6]}. Licúa hasta que tenga una salsa muy suave. Pon a hervir la salsa y agrega la tableta de ${receta.ingredientes[5]}. Mezcla todo hasta que se incorpore.`
    }
}

console.log(`Título: ${receta.titulo}`);
console.log(`Porciones: ${receta.porciones}`);
console.log(`Ingredientes: ${receta.ingredientes}`);
console.log(`Preparación: `);
console.log(receta.preparacion());