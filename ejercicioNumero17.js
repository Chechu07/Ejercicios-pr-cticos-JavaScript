//EJERCICIO 17
//Una escuela quiere calcular el promedio de tres notas de un estudiante y mostrar si aprobó (promedio igual o mayor a 6) o no.

let noteOne = 6
let noteTwo = 5
let noteThree = 7

let average_greater_than_or_equal = 6

let averageNotes = (noteOne + noteTwo + noteThree) / 3

if(averageNotes >= average_greater_than_or_equal) {
    console.log('Aprobado');
}else{
    console.log('Desaprobado');   
}
