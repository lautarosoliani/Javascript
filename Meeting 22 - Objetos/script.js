////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////MEETING 22///////////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////////////////CRUD OBJETOS//////////////////////////////////
////////////////////////////////////////////////////////////////////////

//CREATE
// let friendsCharactersRoss = {
//     friends: [`Phoebe`, `Chandler`],
//     childrens: true,
//     marreid: false,
//     work: `Paleontologist`,
// }

// READ
// console.log(friendsCharactersRoss.work)
// console.log(friendsCharactersRoss[`work`])

// UPDATE
// friendsCharactersRoss.work = `Delivery Man`
// friendsCharactersRoss[`work`] = `Delivery Man`

// DELETE
// delete friendsCharactersRoss.work
// console.log(friendsCharactersRoss)

// let personLautaro = {
//     nombre: `Lautaro`,
//     edad: 28,
//     esMayorDeEdad: function () {
//         if (this.edad >= 18) {
//             return `${this.nombre} es mayor de edad`
//         } else {
//             return `${this.nombre} no es mayor de edad`
//         }
//     },
// }

// console.log(personLautaro.esMayorDeEdad())

// 2. Partiendo de este sandbox completa la función “disponible”
// la cual indica si el producto está disponible o no.
// Un producto no está disponible cuando el valor de “cantidad” es menor o igual a cero.
// Mostrar los mensajes correspondientes para cada caso.
// Sobre el mismo sandbox, modifica la propiedad “cantidad” para que tenga un valor de cero,
//  y vuelve a invocar la función “disponible”.

// let producto = {
//     id: "AAFC29",
//     nombre: "producto",
//     cantidad: 20,
//     disponible: function () {
//         if (this.cantidad >= 0) {
//             return `el producto ${this.id}, SI esta disponible`
//         } else {
//             return `el producto ${this.id}, NO esta disponible`
//         }
//     },
// }
// console.log(producto.disponible())

// console.log(producto.disponible())
// 2. Invoca la función aquí
// producto.disponible()
// El resultado debe ser un mensaje que indique que el producto
// esta disponible

// 3. Modifica la propiedad "cantidad" a 0

// 4. Vuelve a invocar la función "disponible"
// El resultado debe ser un mensaje que indique que el producto
// no esta disponible

// function burguer(carne, panceta, tomate, nombre) {
//     let vegetariana
//     if (carne === 0 && panceta === 0) {
//         vegetariana = true
//     } else {
//         vegetariana = false
//     }

//     return {
//         carne,
//         panceta,
//         tomate,
//         nombre,
//         vegetariana,
//     }
// }
// let burguerRetornada = burguer(0, 1, 1, `Veggie Burguer With Tomato`)
// console.log(burguerRetornada)

// function pizza(AAnombre, salsa, queso, aceitunas, morrones) {
//     let zzaptoIntolerantesAlaLactosa
//     if (queso === false) {
//         zzaptoIntolerantesAlaLactosa = true
//     } else {
//         zzaptoIntolerantesAlaLactosa = false
//     }
//     return {
//         AAnombre,
//         salsa,
//         queso,
//         aceitunas,
//         morrones,
//         zzaptoIntolerantesAlaLactosa,
//     }
// }
// let tuPizzaPapu = pizza(`muzzarella`, false, true, true, true)

// console.log(tuPizzaPapu)

// function functionToOrderBurguer(nombre, pan, carne, tomate, vegetariana) {
//     const objectBurguer = {
//         nombre: nombre,
//         pan: pan,
//         carne: carne,
//         tomate: tomate,
//         vegetariana: vegetariana,
//     }
//     return objectBurguer
// }

// let burguerOrdenada = functionToOrderBurguer(
//     "veggie with tomate",
//     "casero",
//     0,
//     1
// )

// burguerOrdenada.pan = "negro"
// burguerOrdenada["vegetariana"] = true
// delete burguerOrdenada.tomate
// burguerOrdenada.nombre = `veggie without tomate`

// console.log(burguerOrdenada)

// 3. Declara un array de objetos. Diseña cada objeto considerando que cada uno
// debe representar una tarea dentro del Taskineitor.
// Tienes la libertad de crear las propiedades que consideres,
// como título o nombre de la tarea, el estado en el que se encuentra,
// (completada/no completada), entre otras.
// Trae tu array de tareas para la próxima clase.

// function functionTareasTaskinator() {
//     return
// }
// console.log(arrayTareas[0][`tarea`])
// console.log(arrayTareas[1][`tarea`])
// console.log(arrayTareas[2][`tarea`])

// function mostrarInfoDeTarea(id) {
//     for (let i = 0; i < arrayTareas.length; i++) {
//         const tareaObtenida = arrayTareas[i]
//         if (tareaObtenida.id === id) {
//             console.log(tareaObtenida)
//         }
//     }
// }
// mostrarInfoDeTarea(2)

// function mostrarInfoDeTarea(id) {
//     for (let i = 0; i < arrayTareas.length; i++) {
//         let tareaObtenida = arrayTareas[i]
//         if (tareaObtenida.id === id) {
//             console.log(tareaObtenida)
//         }
//     }
// }

//////////////////////////////////////////MOSTRAR TAREA//////////////////////////////////////
// mostrarInfoDeTarea(0)
// function mostrarInfoDeTarea(id) {
//     for (let i = 0; i < arrayTareas.length; i++) {
//         let objetoTareaObtenida = arrayTareas[i]
//         if (objetoTareaObtenida.id === id) {
//             console.log(objetoTareaObtenida)
//         }
//     }
// }
// mostrarInfoDeTarea(1)
// mostrarInfoDeTarea(2)
// mostrarInfoDeTarea(3)

/////////////////////////////////////////AGREGAR TAREA/////////////////////////////////////
// function agregarTarea(nuevaTarea) {
//     let idUltimaTarea = arrayTareas[arrayTareas.length - 1].id
//     nuevaTarea.id = idUltimaTarea + 1
//     arrayTareas.push(nuevaTarea)
// }
// let tareaParaAgregar = {
//     id: 4,
//     tarea: `Nueva tarea`,
//     estado: false,
//     urgencia: null,
// }
// agregarTarea(tareaParaAgregar)
// console.log(arrayTareas)

// function funModificarTarea(objTareaModificada) {
//     let idAModificar = objTareaModificada.id
//     for (let i = 0; i < arrayTareas.length; i++) {
//         if (arrayTareas[i].id === idAModificar) {
//             arrayTareas[i] = objTareaModificada
//         }
//     }
// }

/////////////////////////////////////////ELIMINAR TAREA/////////////////////////////////////
// const arrayTareas = [
//     { id: 1, tarea: `Hacer el Challenge`, estado: false, urgencia: null },
//     { id: 2, tarea: `Lavar ropa`, estado: false, urgencia: null },
//     { id: 3, tarea: `Ir al supermercado`, estado: false, urgencia: null },
// ]

// function eliminarTarea(tareaEliminada) {
//     let idParaEliminar = tareaEliminada.id
//     for (let i = 0; i < arrayTareas.length; i++) {
//         if (arrayTareas[i].id === idParaEliminar) {
//             let posicion = arrayTareas.indexOf(arrayTareas[i])
//             arrayTareas.splice(posicion, 1)
//         }
//     }
// }

// let tareaEliminada = {
//     id: 3,
// }

// eliminarTarea(tareaEliminada)

// console.log(arrayTareas)
