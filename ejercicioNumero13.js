//EJERCICIO 13
//Un restaurante ofrece tres platos con diferentes precios: pasta ($3500), pizza ($4000) y ensalada ($3000). Se debe ingresar el número del plato elegido y mostrar su precio.

let firstPriceOfTheDish = 3500
let secondPriceOfTheDish = 4000
let thirdPriceOfTheDish = 3000

let choicePlate = 2

switch(choicePlate) {
    case 1:
        console.log('Eligió plato número 1 de pasta y su valor es  de: $' + firstPriceOfTheDish);
        break;
    case 2:
        console.log('Eligió plato número 2 de pizza y su valor es  de: $' + secondPriceOfTheDish);
        break;
    case 3:
        console.log('Eligió plato número 3 de ensalada y su valor es  de: $' + thirdPriceOfTheDish);   
        break;
    default:
        console.log('ERROR! Elija el plato: 1- 2 O 3')
}