//EJERCICIO 9:
//Un parque de diversiones necesita un sistema que determine si una persona puede subir a la montaña rusa. 
// Solo pueden hacerlo quienes tengan más de 12 años y midan más de 1.50 metros.

// const age = 12
// const height = 1.50
// const minimumAge = 12
// const minimumHeight = 1.5

// if(age > minimumAge && height > minimumHeight) {
//     console.log('Usted, puede ingresar')
// } else{
//     console.log('Usted, no cumple con el requisito')
// }

let minimumAge = 12
let minimumHeight = 1.5

function determineAgeAndHeight(age, height) {
    if(age > minimumAge && height > minimumHeight) {
        return true
    }else {
        return false
    }
}

determineAgeAndHeight(13, 1.55)