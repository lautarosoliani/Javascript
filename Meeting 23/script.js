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
// Son map, filter, for each y una mas.
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

function saludar(xxx) {
    return `Hola, bienvenido ${xxx}`
}

console.log(saludar(`Lautaro`))

function gritando(yyy) {
    return `${yyy.toUpperCase()}!!!!`
}

console.log(saludar(gritando(`Horacio`)))
