
//EJERCICIO 12
//Una tienda online necesita calcular el costo de envío. Si el total del pedido es menor a $5000, el envío cuesta $300; si es igual o superior, el envío es gratuito.

let costoPedido = Number(prompt('¿Cuál es el total de su pedido?'))

let costoEnvio = (costoPedido >= 5000) ? 'El envío es gratis' : 'El envío cuesta $' + 300
console.log(costoEnvio);
