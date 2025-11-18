//EJERCICIO 3:
// Un restaurante desea ofrecer una calculadora de propinas. 
// Se debe ingresar el monto de la comida y el porcentaje de propina, y mostrar el total a pagar incluyendo la propina.

const mealPrice = 20000
const tipPercentage = 2

const percentage = (mealPrice * tipPercentage) / 100
const total = mealPrice + percentage
console.log('El total a abonar es de: $' + total)