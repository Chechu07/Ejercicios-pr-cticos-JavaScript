//EJERCICIO 9:
//Un parque de diversiones necesita un sistema que determine si una persona puede subir a la montaña rusa. 
// Solo pueden hacerlo quienes tengan más de 12 años y midan más de 1.50 metros.

const age = 12
const height = 1.50
let minimum_age = 12
let minimum_height = 1.5

if(age > minimum_age && height > minimum_height) {
    console.log('Usted, puede ingresar')
} else{
    console.log('Usted, no cumple con el requisito')
}