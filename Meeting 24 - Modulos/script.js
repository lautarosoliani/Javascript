////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////MEETING 24///////////////////////////////////
////////////////////////////////////////////////////////////////////////

let arrayPersonas = [
    {
        id: 1,
        nombre: "Jhony",
        asistente: null,
        seccion: "gold",
        rol: "speaker",
    },
    {
        id: 2,
        nombre: "Manuel",
        asistente: true,
        seccion: "vip",
        rol: "viewer",
    },
    {
        id: 3,
        nombre: "Fran",
        asistente: true,
        seccion: "vip",
        rol: "viewer",
    },

    {
        id: 4,
        nombre: "Cintia",
        seccion: "platino",
        rol: "viewer",
    },
    {
        id: 5,
        nombre: "Marcos",
        asistente: null,
        seccion: "gold",
        rol: "viewer",
    },
    {
        id: 6,
        nombre: "Victoria",
        asistente: true,
        seccion: "platino",
        rol: "speaker",
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

let listaDeTareas = [
    {
        id: 0,
        titulo: `lavar los platos`,
        completada: false,
        fechaCrada: `08/31/2021`,
    },
    {
        id: 1,
        titulo: `lavar los platos`,
        completada: false,
        fechaCrada: `08/31/2021`,
    },
    {
        id: 2,
        titulo: `lavar los platos`,
        completada: false,
        fechaCrada: `08/31/2021`,
    },
    {
        id: 3,
        titulo: `lavar los platos`,
        completada: false,
        fechaCrada: `08/31/2021`,
    },
    {
        id: 4,
        titulo: `lavar los platos`,
        completada: false,
        fechaCrada: `08/31/2021`,
    },
    {
        id: 5,
        titulo: `lavar los platos`,
        completada: false,
        fechaCrada: `08/31/2021`,
    },
]

////////////////////// TASKINATOR: mostrarInformacionTarea() /////////////////
// function buscadorPorArrayYPorPropiedad(array, id) {
//     return array.find(function (x) {
//         return x.id === id
//     })}
// console.log(buscadorPorArrayYPorPropiedad(listaDeTareas, 5))

//////////////////////////// TASKINATOR: agregarTarea() ///////////////////////

// function agregarTarea(array, nuevaTarea) {
//     let idUltimaTarea = array[array.length - 1].id
//     nuevaTarea.id = idUltimaTarea + 1

//     return array.push(nuevaTarea)
// }

let objetoNuevaTarea = {
    id: null,
    titulo: `NUEVA TAREA`,
    completada: false,
    fechaCrada: `08/31/2021`,
}
// let objetoNuevaTarea2 = {
//     id: null,
//     titulo: `NUEVA TAREA 2`,
//     completada: false,
//     fechaCrada: `08/31/2021`,
// }
// let objetoNuevaTarea3 = {
//     id: null,
//     titulo: `NUEVA TAREA 3`,
//     completada: false,
//     fechaCrada: `08/31/2021`,
// }

// agregarTarea(listaDeTareas, objetoNuevaTarea)
// agregarTarea(listaDeTareas, objetoNuevaTarea2)
// agregarTarea(listaDeTareas, objetoNuevaTarea3)

//////////////////////////// TASKINATOR: modificarTarea() ///////////////////////

function modificarTarea(array, idDeObjetoParaModificar, nuevoObjeto) {
    //
    objetoTareaEncontrada = array.find(function (x) {
        return x.id === idDeObjetoParaModificar
    })

    nuevoObjeto.id = idDeObjetoParaModificar

    let varSplice = array.indexOf(objetoTareaEncontrada)

    return array.splice(varSplice, 1, nuevoObjeto)
}

modificarTarea(listaDeTareas, 4, objetoNuevaTarea)
console.log(listaDeTareas)

modificarTarea(arrayPersonas, 4, objetoNuevaTarea)
console.log(arrayPersonas)
