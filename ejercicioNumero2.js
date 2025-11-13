//EJERCICIO 2:
// Un cine necesita calcular el total a cobrar por la venta de entradas. 
// Cada entrada cuesta $2500. Si el cliente compra tres o más, obtiene un 10% de descuento. Mostrar el total final.

const cinemaTicket = 2500
const buyTickets = 4
let total;

if(buyTickets >= 3) {
    const discount = (cinemaTicket * buyTickets) * 0.1
    const total = cinemaTicket * buyTickets
    const priceFinal = total - discount
    console.log('El total de la compra de ticket es $' + priceFinal)
} else{
    const total = cinemaTicket * buyTickets
    console.log('La compra de ticket es de: $' + total);
}