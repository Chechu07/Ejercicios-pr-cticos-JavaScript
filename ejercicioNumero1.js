//EJERCICIO 1:
// Una tienda de golosinas necesita un programa que calcule el precio total de una compra. Cada caramelo cuesta $150. 
// El programa debe solicitar cuántos caramelos comprará el cliente y mostrar el total a pagar.


// const candyPrice = 150
// const buys = Number(prompt('How many candies would you like to buy?'))

// let totalPrice = candyPrice * buys

// console.log('You bought ' + buys + ' candies' + ' the total price is: ' + totalPrice)


//FUNCIONES

// function calcularPrecio(price, buys) {
//     return price * buys 
// }
// calcularPrecio(150, 15)

const calcularPrecio = (price, buys) => ({price: price * buys})
console.log(calcularPrecio(150, 5));