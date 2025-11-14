//EJERCICIO 10:
//Un cajero automático requiere un programa que permita ingresar el saldo disponible y el monto a retirar. Si hay suficiente dinero, debe mostrar el nuevo saldo; si no, indicar “Saldo insuficiente”.

const availableBalance = 3000
const amountAWithdraw = 1000

const newBalance = availableBalance - amountAWithdraw

if(amountAWithdraw <= availableBalance) {
    console.log('Su nuevo saldo es $' + newBalance)
}else{
    console.log('Saldo insuficiente')
}