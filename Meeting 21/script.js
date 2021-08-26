//////////////////////////////////////////////////////////////////////// MEETING 19
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// const num1 = 20
// const num2 = 20

// if (num1 > num2) {
//     console.log(`${num1} es mayor que ${num2}`)
// } else if (num1 < num2) {
//     console.log(`${num1} es menor que ${num2}`)
// } else {
//     console.log("Los numeros son iguales")
// }

// --> ESTRUCTURA DE UN IF
// if (aca va la condicion) {aca va la consecuencia si la condicion es true}
// el orden es IF - ELSE IF - ELSE

// let decibelesPersona1 = 10
// let decibelesPersona2 = 20
// let decibelesPersona3 = 30

// const sumaDecibelesPersonas =
//     decibelesPersona1 + decibelesPersona2 + decibelesPersona3

// if (sumaDecibelesPersonas > 99) {
//     console.log(`Las personas estan gritando`)
// } else if (sumaDecibelesPersonas <= 99 && sumaDecibelesPersonas > 49) {
//     console.log(`Las personas estan cumpliendo con los decibeles permitidos`)
// } else {
//     console.log(`Las personas estan susurrando`)
// }

//////////////////////////////////////////////////////////////////////// MEETING 20
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// function verificarEdad(edad) {
//     if (edad >= 18) {
//         console.log(`Esta persona es mayor de edad`)
//     } else {
//         console.log(`Es menor de edad`)
//     }
// }

// function saludo() {
//     return "hola"
// }

// let elRetornoNoDelReySinoDeLaFunctionSaludo = saludo()

// // la nueva variable creada es igual al retorno de la funcion
// // otro ejemplo debajo

// function trueFunction() {
//     return true
// }

// let siMeLlamasTeRetornoTrue = trueFunction()

// function mayoriaDeEdad(edad) {
//     if (edad >= 18) {
//         return true
//     } else {
//         return false
//     }
// }

// let edadDeLautaro = 2
// let esLautaroMayorOqueOnda = mayoriaDeEdad(edadDeLautaro)
// // console.log(esLautaroMayorOqueOnda)

// function cualEsMayor(num1, num2) {
//     if (num1 > num2) {
//         console.log(`El numero ${num1} es mayor que el numero ${num2}`)
//     } else {
//         console.log(`El numero ${num2} es mayor que el numero ${num1}`)
//     }
// }
// // cualEsMayor(80, 200)

// function cualEsMenor(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         return `El menor es ${num1}`
//     } else if (num2 < num1 && num2 < num3) {
//         return `El menor es ${num2}`
//     } else {
//         return `El menor es ${num3}`
//     }
// }

// let numeroMenor = cualEsMenor(50, 70, 20)
// // console.log(numeroMenor)

// function Sumar(num1, num2) {
//     return num1 + num2
// }

// console.log(Sumar(2, 100))

// function Dividir(num1, num2) {
//     return num1 / num2
// }

// console.log(Dividir(15, 30))

// function mayorQue(a, b) {
//     if (a > b) {
//         return true
//     } else if ((a = b)) {
//         return `Los numeros son iguales`
//     } else {
//         return false
//     }
// }

// console.log(mayorQue(100, 100))

/////////////////////////////////////////////////////////////////////// MEETING 21
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////MEETING 22
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////CRUD OBJETOS
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
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
