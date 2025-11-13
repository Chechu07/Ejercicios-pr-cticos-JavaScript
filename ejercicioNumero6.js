//EJERCICIO 6:
//Un supermercado solicita un programa que permita ingresar los precios de tres productos y mostrar el total,
//  el promedio y el precio más alto.

const priceProductOne = 28
const priceProductTwo = 34
const priceProductThree = 45
let highPrice;

const totalProducts = priceProductOne + priceProductTwo + priceProductThree
const average = totalProducts / 3

if (priceProductOne >= priceProductTwo && priceProductOne >= priceProductThree){
    highPrice = priceProductOne
} else if(priceProductTwo >= priceProductOne && priceProductTwo >= priceProductThree) {
    highPrice = priceProductTwo
} else{
    highPrice = priceProductThree
}

console.log('El total de los 3 productos es de $' + totalProducts)
console.log('El promedio es $' + average);
console.log('El precio más alto es $' + highPrice);