//EJERCICIO 2:
// Un cine necesita calcular el total a cobrar por la venta de entradas. 
// Cada entrada cuesta $2500. Si el cliente compra tres o más, obtiene un 10% de descuento. Mostrar el total final.

const cinemaTicket = 2500
const buyTickets = 4
let total = cinemaTicket * buyTickets
let discount = total * 0.9

if(buyTickets >= 3) {
    const priceFinal = total - discount
    console.log('El total de la compra de ticket es $' + priceFinal)
} else{
    console.log('La compra de ticket es de: $' + total);
}