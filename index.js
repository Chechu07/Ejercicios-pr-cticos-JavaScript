








//EJERCICIO 8:
//Una tienda de ropa desea calcular el total a pagar por remeras. Cada una cuesta $4000. Si el cliente compra más de cinco, recibe un 20% de descuento.

let remeras = 4000
let descRemeras = 20 
let totalRemeras = Number(prompt('¿Cuantas remeras compro?'))

let totalSDescuento = remeras * totalRemeras 

let totalCDescuento = (totalSDescuento  * descRemeras )  / 100
let monto = totalSDescuento - totalCDescuento

let totalAbonar = (totalRemeras > 5) ? monto : totalSDescuento

console.log('El total a abonar es: $' + totalAbonar)



//EJERCICIO 9:
//Un parque de diversiones necesita un sistema que determine si una persona puede subir a la montaña rusa. Solo pueden hacerlo quienes tengan más de 12 años y midan más de 1.50 metros.

const edad = prompt('¿Ingrese su edad')
const altura = Number(prompt('Ingrese su altura'))

const ingreso = (edad > 12 && altura > 1.50) ? 'Si, puede ingresar' : 'Usted, no cumple con el requisito'

console.log(ingreso);

//EJERCICIO 10:
//Un cajero automático requiere un programa que permita ingresar el saldo disponible y el monto a retirar. Si hay suficiente dinero, debe mostrar el nuevo saldo; si no, indicar “Saldo insuficiente”.

const saldoDisponible = Number(prompt('Ingrese el saldo disponible'))
const montoARetirar = Number(prompt('¿Que monto desea retirar?'))

const nuevoSaldo = saldoDisponible - montoARetirar

const  cajeroAutomatico = (montoARetirar <= saldoDisponible) ? 'Su nuevo saldo es $' + nuevoSaldo : 'Saldo insuficiente' 

console.log( cajeroAutomatico)


//EJERCICIO 11:
//Una institución educativa desea un sistema que determine si un alumno aprobó un examen. Se ingresa una nota del 0 al 10 y el programa debe indicar si aprobó (nota 6 o más) o no.

const notasAlumno = Number(prompt('Ingrese la nota del alumno'))

const alumno = (notasAlumno >= 6) ? 'Alumno aprobado' : 'Alumno no aprobado'

console.log(alumno);


//EJERCICIO 12
//Una tienda online necesita calcular el costo de envío. Si el total del pedido es menor a $5000, el envío cuesta $300; si es igual o superior, el envío es gratuito.

let costoPedido = Number(prompt('¿Cuál es el total de su pedido?'))

let costoEnvio = (costoPedido >= 5000) ? 'El envío es gratis' : 'El envío cuesta $' + 300
console.log(costoEnvio);



//EJERCICIO 13
//Un restaurante ofrece tres platos con diferentes precios: pasta ($3500), pizza ($4000) y ensalada ($3000). Se debe ingresar el número del plato elegido y mostrar su precio.

let uno = 3500
let dos = 4000
let tres = 3000

let eleccionPlato = Number(prompt('Elija un número de plato: 1- 2- 3'))

let platoSeleccionado = (eleccionPlato == 1) ? 'Eligió plato número 1 de pasta y su valor es  de: $' + uno : (eleccionPlato == 2)  ? 'Eligió plato número 2 de pizza y su valor es  de: $' + dos : 'Eligió plato número 3 de ensalada y su valor es  de: $' + tres

console.log(platoSeleccionado);



//EJERCICIO 14
//Un simulador de tránsito requiere un programa que, al ingresar un color de semáforo (“rojo”, “amarillo” o “verde”), indique qué debe hacer el peatón.

let semaforo = prompt('Ingrese un color:rojo, amarillo o verde')

let semaforoSeleccionado = (semaforo == 'rojo') ? 'Detente' : (semaforo == 'amarillo') ? 'Espere' : 'Avance'

console.log(semaforoSeleccionado);


//EJERCICIO 15 
//Una aplicación de acceso necesita validar un inicio de sesión. Se ingresa un nombre de usuario y una contraseña, y se debe mostrar si el acceso es concedido o denegado según los datos guardados.


let userGuardado = 'ceci24'
let contraseñaGuardada = '1234'

let user = prompt('Ingrese su usuario')
let contraseña = prompt('Ingrese su contraseña')

let datosGuardados = (userGuardado == user && contraseñaGuardada == contraseña) ? 'Acceso concedido' : 'acceso denegado' 
console.log(datosGuardados);


//EJERCICIO 16
//Un casino online solicita un programa que determine si un número ingresado por el usuario es par o impar.

let numero = Number(prompt('Ingrese un número'))

let numeroIngresado = (numero % 2 === 0) ? 'es par' : 'es impar'

console.log(numeroIngresado);


//EJERCICIO 17
//Una escuela quiere calcular el promedio de tres notas de un estudiante y mostrar si aprobó (promedio igual o mayor a 6) o no.

let nota1 = Number(prompt('Ingrese la primer nota'))
let nota2 = Number(prompt('Ingrese la segunda nota'))
let nota3 = Number(prompt('Ingrese la tercer nota'))

let promedioNotas = (nota1 + nota2 + nota3) / 3

let notaFinal = (promedioNotas >= 6) ? ' Aprobo ' : ' Desaprobado'
console.log(notaFinal + ' ' + promedioNotas);