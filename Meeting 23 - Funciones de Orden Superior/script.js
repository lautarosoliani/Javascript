////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////MEETING 23///////////////////////////////////
////////////////////////////////////////////////////////////////////////

// let arrayPersonas = [
//     {
//         nombre: "Jhony",
//         asistente: null,
//         seccion: "gold",
//         rol: "speaker",
//     },
//     {
//         nombre: "Manuel",
//         asistente: true,
//         seccion: "vip",
//         rol: "viewer",
//     },
//     {
//         nombre: "Fran",
//         asistente: true,
//         seccion: "vip",
//         rol: "viewer",
//     },
//     {
//         nombre: "Cintia",
//         asistente: true,
//         seccion: "platino",
//         rol: "viewer",
//     },
//     {
//         nombre: "Marcos",
//         asistente: null,
//         seccion: "gold",
//         rol: "viewer",
//     },
//     {
//         nombre: "Victoria",
//         asistente: true,
//         seccion: "platino",
//         rol: "speaker",
//     },
// ]

// function asistentes(listaObtenida) {
//     for (let i = 0; i < arrayPersonas.length; i++) {
//         let listaObtenida = arrayPersonas[i]
//         if (listaObtenida.asistente === true) {
//             console.log("test")
//         }
//     }
// }

// asistentes(listaObtenida)

/**
 * Esta fución debe calcular el total de asistentes
 * según una lista de personas.
 * Se considera que una persona esta "asistente" si
 * la propiedad respectiva es distinta a null y undefined
 * La función debe retornar el número de asistencias.
 */

/**
 * La implementación debe ser:
 * let totalAsistentes = asistentes(personas);
 * console.log(totalAsistentes); // debe ser 3
 */

//  📝 1. Sigue las instrucciones de [este sandbox](https://codesandbox.io/s/asistentes-xfi36)
//  y calcula la cantidad de personas asistentes a un evento.
//  📝 2. Sobre el sandbox anterior, desarrolla una función que te permita crear
//  un nuevo array que tenga solo las personas asistentes.
//  Es decir, que tengan la propiedad “asistente” dentro de su objeto,
//  y que esta sea igual a “true”.
//  📝 3. Además, desarrolla una función que te permite crear un nuevo array
//  que tenga solo las personas de la sección “platino”.
//  📝 4. Finalmente, crea una única función que cree un nuevo array
//  según un filtro y un valor especificado,
//  los cuales tendrán que ser pasados como argumentos a la función. Por ejemplo:
//  let speakers = filtrarPersonas(“rol”, “speaker”);
//  Lo anterior deberá retornar un nuevo array solo con los objetos
//  donde la propiedad “rol” sea igual a “speaker.
//  Encuentra unos tipos en [este sandbox](https://codesandbox.io/s/filtro-cqvzx).

// Vamos a ver 4 maneras nuevas de recorrer un array que no sea con 'for'.
// Son map, filter, find, for each.
// Y funciones de orden superior, a las que les podemos pasar funciones de parametro,
// o tambien que lo que nos retorna sea una funcion.

// function sumar(array) {
//     let acumulado = 0

//     for (let i = 0; i < array.length; i++) {
//         acumulado = acumulado + array[i]
//     }

//     return acumulado
// }

// console.log(sumar([1, 2, 3]))

/////////////////////////////////////////////////////

// function rango(inicio, final) {
//     let lista = []

//     for (let i = inicio; i <= final; i++) {
//         lista.push(i)
//     }

//     return lista
// }

// console.log(rango(0, 10))
// console.log(sumar(rango(1, 6)))

// function saludar(nombre) {
//     return `Hola, bienvenido ${nombre}`
// }
// // console.log(saludar(`Lautaro`))

// function gritando(mensaje) {
//     return `${mensaje.toUpperCase()}!`
// }

// console.log(saludar(`Lautaro`))
// console.log(saludar(gritando(`Lautaro`)))
// console.log(gritando(saludar(`Lautaro`)))

//////////////////////////////// .forEach /////////////////////////////////////////////////
//////////////////////////////// SE USA PARA ACCEDER A CADA UNO DE LOS ELEMENTOS //////////
// const array = [0, 1, 2, 3, 4]

// array.forEach(function (x) {
//     console.log(x)
// })

//////////////////////////////// .map /////////////////////////////////////////////////
/// Itera sobre un Array y permite aplicar una transformacion sobre cada uno //////////

// const array = [0, 1, 2, 3, 4]
// const arrayAlCuadrado = array.map(function (X) {
//     return X * X
// })
// console.log(arrayAlCuadrado)

//////////////////////////////// .filter /////////////////////////////////////////////////
// Crea un nuevo array con los elementos que pasen cierta condicion //////////////////////
// En este caso la condicion es que su tamano (.length) sea al menos de 3/////////////////

// const array = [`ej0`, `ej1`, `ej2`]

// const resultadoDelFilter = array.filter(function (x) {
//     return x.length <= 3
// })
// console.log(resultadoDelFilter)

//////////////////////////////// .find /////////////////////////////////////////////////
// Devuelve el valor del primer elemento que cumpla con la condicion ///////////////////

// let array = [5, 12, 6, 7, 8, 11]
// let numeroMayorQueDiez = array.find(function (x) {
//     return x > 10
// })
// console.log(numeroMayorQueDiez)

//////////////////////////////// EJERCICIO /////////////////////////////////////////////////

const arrayPersonas = [
    { first: "Albert", last: "Einstein", nacio: 1879, murio: 1955 },
    { first: "Isaac", last: "Newton", nacio: 1643, murio: 1727 },
    { first: "Galileo", last: "Galilei", nacio: 1564, murio: 1642 },
    { first: "Marie", last: "Curie", nacio: 1867, murio: 1934 },
    { first: "Johannes", last: "Kepler", nacio: 1571, murio: 1630 },
    { first: "Nicolaus", last: "Copernicus", nacio: 1473, murio: 1543 },
    { first: "Max", last: "Planck", nacio: 1858, murio: 1947 },
    { first: "Katherine", last: "Blodgett", nacio: 1898, murio: 1979 },
    { first: "Ada", last: "Lovelace", nacio: 1815, murio: 1852 },
    { first: "Sarah E.", last: "Goode", nacio: 1855, murio: 1905 },
    { first: "Lise", last: "Meitner", nacio: 1878, murio: 1968 },
    { first: "Hanna", last: "Hammarström", nacio: 1829, murio: 1909 },
]

// Utiliza .map para crear un nuevo array de objetos,
// donde cada objeto tenga solo el nombre y apellido de cada persona

let nuevoArray = arrayPersonas.map(function (x) {
    return { Nombre: x.first, Apellido: x.last }
})
console.log(nuevoArray)

// Utiliza .map para crear un nuevo array de objetos,
// donde cada objeto tenga solo el nombre y la fecha de nacimiento de cada persona

let nuevoArray2 = arrayPersonas.map(function (x) {
    return { Nombre: x.first, FechaDeNacimiento: x.nacio }
})
console.log(nuevoArray2)

// Utiliza .filter para crear un nuevo array de objetos
// donde cada objeto represente la persona que haya nacido durante el 1800 y 2000

let nuevoArray3 = arrayPersonas.filter(function (x) {
    return x.nacio >= 1800 && x.murio <= 2000
})
console.log(nuevoArray3)

// Utiliza .map para crear un nuevo array de objetos con el apellido
// de cada persona y su edad (murio - nacio)

const nuevoArray4 = arrayPersonas.map(function (x) {
    return { Apellido: x.last, Edad: x.murio - x.nacio }
})
console.log(nuevoArray4)

// Utiliza .filter para crear un nuevo array de objetos con las personas
// cuyo nombre sea mayor a 6 letras

const nuevoArray5 = arrayPersonas.filter(function (x) {
    return x.first.length > 6
})
console.log(nuevoArray5)

// Utiliza .filter para crear un nuevo array de objetos con las personas
// que hayan nacido después de 1850

const nuevoArray6 = arrayPersonas.filter(function (x) {
    return x.nacio >= 1850
})
console.log(nuevoArray6)

// Utiliza .filter  para para crear un nuevo array de objetos con las personas
// que hayan tenido una edad par (edad % 2 === 0, busca en google el operador "modulo")

const nuevoArray7 = arrayPersonas.filter(function (x) {
    let edad = x.murio - x.nacio

    return edad % 2 === 0
})

console.log(nuevoArray7)

// utiliza .forEach para mostrar por consola el primer nombre de cada persona

arrayPersonas.forEach(function (x) {
    console.log(x.first)
})

// utiliza .find para encontrar por apellido

const nuevoArray8 = arrayPersonas.find(function (x) {
    return x.last === `Curie`
})
console.log(nuevoArray8)

// EJEMPLO DE BUSCADOR PARA PROYECTO DE HOTELES

function buscador(array, palabraParaBuscar) {
    return array.find(function (x) {
        return x.last === palabraParaBuscar
    })
}
console.log(buscador(arrayPersonas, `Curie`))
