////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////////////////////////MEETING 21/////////////////////////////////
////////////////////////////////////////////////////////////////////////

// let tareas = [
//     "Terminar de leer la bitácora 21",
//     "Hacer el challenge",
//     "Empezar a ver The OA en Netflix",
//     "Aprender sobre arrays",
// ]

// for (let x = 0; x < tareas.length; x++) {
//     //     console.log(tareas[x])
// }

// // for (let x = 10; x >= 1; x--) {
// //     console.log(x)
// // }

// function repetir(n, mensaje) {
//     for (let x = 0; x <= n; x++) {
//         // console.log(`${x} ${mensaje}`)
//     }
// }
// repetir(10, "veces repetidas papu, ahi tenes")

// ////////////////////////////////////////////////////////////////// CRUD DE ARRAY
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// // PARA CREARLO
// const tareasEjemplo = [0, 1, 2, 3]

// PARA LEER, LO CONSOL.LOGGEO
// console.log(tareasEjemplo)
// sino mando un indexOf buscando algo en particular,
// si devuelve -1 no existe en el array
// si existe devuelve el index
// console.log(tareasEjemplo.indexOf("este va al principo del array"))

// PARA UPDATE
// tareasEjemplo.push("este va al final del array")
// console.log(tareasEjemplo)

// tareasEjemplo.unshift("este va al principo del array")
// console.log(tareasEjemplo)
// console.log(tareasEjemplo.indexOf("este va al final del array"))

//PARA DELETE
//.splice (donde empieza, cuantos elimina, agregar1, agregar2, agregarX)
// tareasEjemplo.splice(0, 4, 10, 11, "NN")
// console.log(tareasEjemplo)

// function quieroAgregarEsteNumeroAlArray(x) {
//     tareasEjemplo.push(x)
// }
// quieroAgregarEsteNumeroAlArray(6_000_000)
// console.log(tareasEjemplo)

// function agregarEstaFruta(X) {
//     tareasEjemplo.unshift(X)
// }
// agregarEstaFruta("limon")
// console.log(tareasEjemplo)

// let tareas = [
//     "Terminar de leer la bitácora 21",
//     "Hacer el challenge",
//     "Empezar a ver The OA en Netflix",
//     "Aprender sobre arrays",
// ]
/////////////////////////////////////////////////////////////// EJERCICIOS DEL 1 AL 4
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

/**
 * 1. Construye una función que agregue una tarea al array "tareas".
 * Esta función debe tomar como parametro la descripción de la tarea
 * nueva (un string), agregandola al principio o al final.
 *
 * Por ejemplo, si la función se llama "agregar()", la invoación
 * deberá ser entonces:
 *
 * agregar("Lavar los platos");
 *
 * La función deberá mostrar un mensaje indicando el éxito de la
 * operación.
 *
 * Al hacer un console.log() del array "tareas", este deberá
 * de tener el nuevo ítem.
 */

// function agregarEstaTareaAlPrincipio(X) {
//     tareas.unshift(X)
// }
// agregarEstaTareaAlPrincipio("nueva tarea al princpio")
// console.log(tareas)

// function agregarEstaTareaAlFinal(X) {
//     tareas.push(X)
// }
// agregarEstaTareaAlFinal("nueva tarea al final")
// console.log(tareas)
// console.log(`La tarea se agrego correctamente rey`)

/**
 * 2. Construye una función que elimine una tarea existente del array.
 *
 * Esta función debe tomar como parametro la descripción de la tarea
 * (un string) a eliminar.
 *
 * Deberás de verificar si la tarea existe, y de existir, eliminarla.
 *
 * Muestra un mensaje indicativo del éxito de la operación.
 * Si la tarea no existe, muestra un mensaje respectivo.
 */

// function eliminarTarea(X, Y) {
//     tareas.splice(X, Y)
// }
// eliminarTarea(0, 1)

// function EliminarEstaTarea(X) {
//     if (tareas.indexOf(X) === -1) {
//         return console.log(`No existe esa tarea Reiki`)
//     } else {
//         return tareas.splice(tareas.indexOf(X), 1)
//     }
// }

// EliminarEstaTarea("Hacer el challenge")
// console.log(tareas)

/**
 * 3. Construye una función que modifique el nombre de una tarea.
 *
 * Esta función debe tomar como parametros la descripción de la tarea
 * (un string) a modificar, junto a la nueva descripción, por ejemplo:
 *
 * modificar("Hacer el challenge", "Hacer el challenge de la bitácora 121")
 *
 * Deberás de verificar si la tarea existe antes de modificarla.
 *
 * Muestra los mensajes correspondientes.
 */

// function modificaElNombreDeUnaTarea(X, M) {
//     if (tareas.indexOf(X) !== -1) {
//         return tareas.splice(tareas.indexOf(X), 1, M)
//     } else {
//         return console.log(`no se encuentra la tarea indicada pipi`)
//     }
// }
// modificaElNombreDeUnaTarea(
//     "Hacer el challenge",
//     "Hacer el challenge de la bitácora 121"
// )
// console.log(tareas)

/**
 * 4. Construye una función que muestre por consola todas las tareas del array.
 *
 */
// function mostrarTodasLasTareasPorConsola() {
//     for (let x = 0; x <= 3; x++) {
//         console.log(tareas[x])
//     }

//     //     console.log(tareas[0])
//     //     console.log(tareas[1])
//     //     console.log(tareas[2])
//     //     console.log(tareas[3])
// }

// mostrarTodasLasTareasPorConsola()
// // console.log(tareas)
