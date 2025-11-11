//EJERCICIO 1:
// Una tienda de golosinas necesita un programa que calcule el precio total de una compra. Cada caramelo cuesta $150. 
// El programa debe solicitar cuántos caramelos comprará el cliente y mostrar el total a pagar.


let precioCaramelo = 150
let compra = Number(prompt('¿Cuantos caramelos desea comprar?'))

let precioTotal = precioCaramelo * compra

console.log('Usted compro ' + compra + ' caramelos ' + ' el precio total es de: ' + precioTotal)


//EJERCICIO 2:
// Un cine necesita calcular el total a cobrar por la venta de entradas. Cada entrada cuesta $2500. Si el cliente compra tres o más, obtiene un 10% de descuento. Mostrar el total final.

let entradaCine = 2500
let totalEntrada = Number(prompt('¿Cuantas entradas desea comprar?'))
let total = entradaCine * totalEntrada
let descuento = total * 0.1 *  Math.min(Math.floor(totalEntrada / 3), 1)

let precioFinal = total - descuento
console.log('El total de sus entradas es de: $' + precioFinal)


//EJERCICIO 3:
// Un restaurante desea ofrecer una calculadora de propinas. Se debe ingresar el monto de la comida y el porcentaje de propina, y mostrar el total a pagar incluyendo la propina.

const Comida = Number(prompt('¿Cuál es el monto de la comida?'))
const Propinas = Number(prompt('Que porcentaje de propina desea dar?'))

const Porcentaje = (Comida / 100 ) * Propinas
const Total = Comida + Porcentaje
console.log('El total a abonar es de: $' + Total)


//EJERCICIO 4:
// Una aplicación de bienvenida necesita generar un mensaje personalizado. Se debe ingresar el nombre del usuario y su comida favorita, y mostrar un mensaje del tipo: “Hola Ana, tu comida favorita es la pizza”.

let usuario = prompt('Ingrese su nombre, por favor')
let comidaFavorita = prompt('Ingrese su comida favorita')

console.log('Hola ' + usuario + ', ' + 'su comida favorita es la ' + comidaFavorita)


//EJERCICIO 5:
// Una pastelería necesita calcular el precio final de una torta. El costo base es de $1200 y cada vela cuesta $20 adicionales. El sistema debe mostrar el total según la cantidad de velas.

let costoBase = 1200
let vela = 20
let velasTotal = Number(prompt('¿Cuantas velas lleva?'))

let costoTotal = costoBase + vela * velasTotal

console.log('El precio total según la cantidad de velas es de: $' + costoTotal)


//EJERCICIO 6:
//Un supermercado solicita un programa que permita ingresar los precios de tres productos y mostrar el total, el promedio y el precio más alto.

let precioProducto = Number(prompt('Ingrese el precio del primer producto'))
let precioProducto2 = Number(prompt('Ingrese el precio del segundo producto'))
let precioProducto3 = Number(prompt('Ingrese el precio del tercer producto'))


let totalProductos = precioProducto + precioProducto2 + precioProducto3
let promedio = totalProductos / 3
let precioAlto = Math.max(precioProducto, precioProducto2, precioProducto3)

console.log('El total de los 3 productos es de $' + totalProductos)
console.log('El promedio es $' + promedio);
console.log('El precio más alto es $' + precioAlto);


//EJERCICIO 7:
//Una escuela necesita una calculadora básica que, a partir de dos números, muestre la suma, la resta, la multiplicación y la división de ambos.
//Aclaración: para la división, se debe dividir al mayor por el menor, y devolver un mensaje de error si se intenta dividir por cero.




//EJERCICIO 8:
//Una tienda de ropa desea calcular el total a pagar por remeras. Cada una cuesta $4000. Si el cliente compra más de cinco, recibe un 20% de descuento.

let remeras = 4000
let descuentoRemeras = 20
let totalRemeras = Number(prompt('¿Cuantas remeras compro?'))





//EJERCICIO 9:
//Un parque de diversiones necesita un sistema que determine si una persona puede subir a la montaña rusa. Solo pueden hacerlo quienes tengan más de 12 años y midan más de 1.50 metros.

const edad = prompt('¿Ingrese su edad')
const altura = Number(prompt('Ingrese su altura'))

