//EJERCICIO 8:
//Una tienda de ropa desea calcular el total a pagar por remeras. 
// Cada una cuesta $4000. Si el cliente compra más de cinco, recibe un 20% de descuento.

// const tShirts = 4000
// const discountShirts = 20 
// const totalTShirts = 6
// let totalPay;

// let totalWithoutDiscount = tShirts * totalTShirts 

// if(totalTShirts > 5) {
//     totalPay = totalWithoutDiscount * 0.80
    
// } else{
//     totalPay = totalWithoutDiscount
// }
//  console.log('El total a abonar es: $' + totalPay)


function calculateTheTotal(value, amount) {
    let totalWithoutDiscount = value * amount 

    if(amount > 5) {
        return totalWithoutDiscount * 0.80  
    } else{
        return totalWithoutDiscount
    }
}
calculateTheTotal(4000, 6)