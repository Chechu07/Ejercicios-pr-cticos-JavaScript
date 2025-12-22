
//EJERCICIO 12
//Una tienda online necesita calcular el costo de envío. Si el total del pedido es menor a $5000, el envío cuesta $300; si es igual o superior, el envío es gratuito.

// let orderCost = Number(prompt('¿Cuál es el total de su pedido?'))
// let shippingCost = 300

// if(orderCost >= 5000) {
//     console.log('El envío es gratis')
// } else{
//    console.log('El envío cuesta $' + shippingCost)
// }


function calculateShipping(order) {
  const shippingCost= 300

  if(order >= 5000) {
    return 'Envío gratis'
  }else{
    return 'El envío tiene un valor de $' + shippingCost
  }
}
calculateShipping(6500)