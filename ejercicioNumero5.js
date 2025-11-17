//EJERCICIO 5:
// Una pastelería necesita calcular el precio final de una torta. 
// El costo base es de $1200 y cada vela cuesta $20 adicionales. El sistema debe mostrar el total según la cantidad de velas.

const baseCost = 1200
const candle = 20
const totalCandle = 5

const totalCost = baseCost + (candle * totalCandle)

console.log('The total price according to the number of candles is: $' + totalCost)