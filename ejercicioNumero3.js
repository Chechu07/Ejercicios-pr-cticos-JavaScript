//EJERCICIO 3:
// Un restaurante desea ofrecer una calculadora de propinas. 
// Se debe ingresar el monto de la comida y el porcentaje de propina, y mostrar el total a pagar incluyendo la propina.

const meal = 20000
const tips = 2

const percentage = (meal / 100 ) * tips
const total = meal + percentage
console.log('El total a abonar es de: $' + total)