//EJERCICIO 6:
//Un supermercado solicita un programa que permita ingresar los precios de tres productos y mostrar el total,
//  el promedio y el precio más alto.

// const firstProductPrice = 28 
// const secondProductPrice = 34  
// const thirdProductPrice = 45 
// let highestPrice;

// const totalProducts = firstProductPrice + secondProductPrice + thirdProductPrice
// const average = totalProducts / 3

// if (firstProductPrice >= secondProductPrice && firstProductPrice >= thirdProductPrice){
//     highestPrice = firstProductPrice
// } else if(secondProductPrice >= firstProductPrice && secondProductPrice >= thirdProductPrice) {
//     highestPrice = secondProductPrice
// } else{
//     highestPrice = thirdProductPrice
// }

// console.log('El total de los 3 productos es de $' + totalProducts)
// console.log('El promedio es $' + average);
// console.log('El precio más alto es $' + highestPrice);


let highestPrice;
let average;
let sum;

function sumProduct (productOne, productTwo, productThree) {
    sum = productOne + productTwo + productThree
    average = sum / 3

    if(productOne >= productTwo && productOne >= productThree) {
        highestPrice = productOne
    } else if(productTwo >= productOne &&  productTwo >= productThree) {
        highestPrice = productTwo 
    }else {
       highestPrice = productThree   
    }
}
sumProduct(10,15,35)
console.log('El total de los 3 productos es de:',sum);
console.log('El promedio es $',average);
console.log('El precio más alto es $', highestPrice);