//MEETING 19

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

// MEETING 20
function verificarEdad(edad) {
    if (edad >= 18) {
        console.log(`Esta persona es mayor de edad`)
    } else {
        console.log(`Es menor de edad`)
    }
}

function saludo() {
    return "hola"
}

let elRetornoNoDelReySinoDeLaFunctionSaludo = saludo()

// la nueva variable creada es igual al retorno de la funcion
