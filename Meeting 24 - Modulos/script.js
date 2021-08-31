////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////MEETING 24///////////////////////////////////
////////////////////////////////////////////////////////////////////////

let arrayPersonas = [
    {
        nombre: "Jhony",
        asistente: null,
        seccion: "gold",
        rol: "speaker",
        id: 1,
    },
    {
        nombre: "Manuel",
        asistente: true,
        seccion: "vip",
        rol: "viewer",
        id: 2,
    },
    {
        nombre: "Fran",
        asistente: true,
        seccion: "vip",
        rol: "viewer",
        id: 3,
    },
    {
        nombre: "Cintia",
        seccion: "platino",
        rol: "viewer",
        id: 4,
    },
    {
        nombre: "Marcos",
        asistente: null,
        seccion: "gold",
        rol: "viewer",
        id: 5,
    },
    {
        nombre: "Victoria",
        asistente: true,
        seccion: "platino",
        rol: "speaker",
        id: 6,
    },
]

/**  MOSTRAR /////////////////////////////////////////////////
 * Crea una función que reciba una lista de personas y muestre
 * por consolas sus nombres.*/

// arrayPersonas.forEach(function (x) {
//   console.log(x.nombre);
// });

/** MAYUSCULAS/////////////////////////////////////////////////
 * Crea una función que reciba una lista de personas y retorne
 * un nuevo array con los nombres de esas personas en mayúsculas. */

// arrayPersonas.forEach(function (x) {
//   console.log(x.nombre.toUpperCase());
// });

/** BUSCAR ////////////////////////////////////////////////////
 * Crea una función que reciba una lista de personas y un id (número)
 * como argumento, y que retorne el objeto de la persona que corresponda
 * con el id especificado */

// function buscador(array, id) {
//     return array.find(function (x) {
//         return x.id === id
//     })
// }
// console.log(buscador(arrayPersonas, 3))

/** FILTRADO /////////////////////////////////////////////////
 * Crea una función que reciba una lista de personas,
 * una propiedad y un valor, para retornar un nuevo array
 * de personas filtradas por esa propiedad y el valor */

// let arrayFiltrado = arrayPersonas.filter(function (x) {
//     return x.seccion === `gold` })
// console.log(arrayFiltrado)

////////////////////////////////   En este archivo deberás: //////////////////////////////////

//  * 1. Mostrar los nombres de las personas en el archivo "personas.js"
//  * a través de la función que creaste en "mostrar.js"
// DONE

//  * 2. Crear un nuevo array con los nombres de las personas en "personas.js"
//  * en mayúsculas.
// DONE

//  * 3. Búscar la primera persona con el rol de "viewer" en la lista de "personas.js"
// let findViewerFunction = arrayPersonas.find(function (x) {
//     return x.rol === `viewer` })
// console.log(findViewerFunction)

//  * 4. Crear un nuevo array con las personas pertenecientes al vip.
// let filterArrayVIP = arrayPersonas.filter(function (x) {
//     return x.seccion === `vip`
// })
// console.log(filterArrayVIP)

// const array = [0, 1, 2, 3, 4, 5]
// let arrayParaMultiplicarX2 = array.map(function (x) {
// return x * 20
// })
// console.log(arrayParaMultiplicarX2)
// let testArray = array.push(6, 7)
// console.log(array)
// array.splice(7, 1, 7, 8, 9, 10, `11 house`)
// console.log(array)
// console.log(array.indexOf(`house`))
// let arrayParaFiltrar = array.filter(function (x) {
// return x === `11 house`
// })
// console.log(arrayParaFiltrar)
