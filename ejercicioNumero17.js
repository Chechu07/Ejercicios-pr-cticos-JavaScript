//EJERCICIO 17
//Una escuela quiere calcular el promedio de tres notas de un estudiante y mostrar si aprobó (promedio igual o mayor a 6) o no.

const firstNote = 6 
const secondNote = 5
const thirdNote = 7

const averageGreaterThanOrEqual = 6

const averageNotes = (firstNote + secondNote + thirdNote) / 3

if(averageNotes >= averageGreaterThanOrEqual) {
    console.log('Aprobado');
}else{
    console.log('Desaprobado');   
}