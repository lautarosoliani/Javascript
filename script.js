///////////////////////////////////////MEETING 19/////////////////////////////////////

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

///////////////////////////////////////MEETING 20/////////////////////////////////////
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

///////////////////////////////////////MEETING 21/////////////////////////////////////

let tareas = [
    "Terminar de leer la bitácora 21",
    "Hacer el challenge",
    "Empezar a ver The OA en Netflix",
    "Aprender sobre arrays",
]

for (let x = 0; x < tareas.length; x++) {
    //     console.log(tareas[x])
}

// for (let x = 10; x >= 1; x--) {
//     console.log(x)
// }

function repetir(n, mensaje) {
    for (let x = 0; x <= n; x++) {
        // console.log(`${x} ${mensaje}`)
    }
}
repetir(10, "veces repetidas papu, ahi tenes")

/////////////////////////////////////CRUD DE ARRAY////////////////////////////////////

// PARA CREARLO
const tareasEjemplo = [0, 1, 2, 3]

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

function quieroAgregarEsteNumeroAlArray(x) {
    tareasEjemplo.push(x)
}

quieroAgregarEsteNumeroAlArray(6_000_000)
console.log(tareasEjemplo)
