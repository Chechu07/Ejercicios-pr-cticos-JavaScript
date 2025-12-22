//EJERCICIO 16
//Un casino online solicita un programa que determine si un número ingresado por el usuario es par o impar.

// let number = 10

// if(number % 2 == 0) {
//     console.log('Es par');
// }else{
//     console.log('Es impar');
// }

function enterNumber(number) {
    if(number % 2 == 0) {
        return 'Es par'
    }else {
        return 'impar'
    }
}
enterNumber(8)