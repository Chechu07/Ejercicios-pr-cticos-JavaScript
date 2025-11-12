//EJERCICIO 1:
// Una tienda de golosinas necesita un programa que calcule el precio total de una compra. Cada caramelo cuesta $150. 
// El programa debe solicitar cuántos caramelos comprará el cliente y mostrar el total a pagar.


let precioCaramelo = 150
let compra = Number(prompt('¿Cuantos caramelos desea comprar?'))

let precioTotal = precioCaramelo * compra

console.log('Usted compro ' + compra + ' caramelos ' + ' el precio total es de: ' + precioTotal)


//EJERCICIO 2:
// Un cine necesita calcular el total a cobrar por la venta de entradas. Cada entrada cuesta $2500. Si el cliente compra tres o más, obtiene un 10% de descuento. Mostrar el total final.

let entradaCine = 2500
let totalEntrada = Number(prompt('¿Cuantas entradas desea comprar?'))
let total = entradaCine * totalEntrada
let descuento = total * 0.1 *  Math.min(Math.floor(totalEntrada / 3), 1)

let precioFinal = total - descuento
console.log('El total de sus entradas es de: $' + precioFinal)


//EJERCICIO 3:
// Un restaurante desea ofrecer una calculadora de propinas. Se debe ingresar el monto de la comida y el porcentaje de propina, y mostrar el total a pagar incluyendo la propina.

const Comida = Number(prompt('¿Cuál es el monto de la comida?'))
const Propinas = Number(prompt('Que porcentaje de propina desea dar?'))

const Porcentaje = (Comida / 100 ) * Propinas
const Total = Comida + Porcentaje
console.log('El total a abonar es de: $' + Total)


//EJERCICIO 4:
// Una aplicación de bienvenida necesita generar un mensaje personalizado. Se debe ingresar el nombre del usuario y su comida favorita, y mostrar un mensaje del tipo: “Hola Ana, tu comida favorita es la pizza”.

let usuario = prompt('Ingrese su nombre, por favor')
let comidaFavorita = prompt('Ingrese su comida favorita')

console.log('Hola ' + usuario + ', ' + 'su comida favorita es la ' + comidaFavorita)


//EJERCICIO 5:
// Una pastelería necesita calcular el precio final de una torta. El costo base es de $1200 y cada vela cuesta $20 adicionales. El sistema debe mostrar el total según la cantidad de velas.

let costoBase = 1200
let vela = 20
let velasTotal = Number(prompt('¿Cuantas velas lleva?'))

let costoTotal = costoBase + vela * velasTotal

console.log('El precio total según la cantidad de velas es de: $' + costoTotal)


//EJERCICIO 6:
//Un supermercado solicita un programa que permita ingresar los precios de tres productos y mostrar el total, el promedio y el precio más alto.

let precioProducto = Number(prompt('Ingrese el precio del primer producto'))
let precioProducto2 = Number(prompt('Ingrese el precio del segundo producto'))
let precioProducto3 = Number(prompt('Ingrese el precio del tercer producto'))


let totalProductos = precioProducto + precioProducto2 + precioProducto3
let promedio = totalProductos / 3
let precioAlto = Math.max(precioProducto, precioProducto2, precioProducto3)

console.log('El total de los 3 productos es de $' + totalProductos)
console.log('El promedio es $' + promedio);
console.log('El precio más alto es $' + precioAlto);


//EJERCICIO 7:
//Una escuela necesita una calculadora básica que, a partir de dos números, muestre la suma, la resta, la multiplicación y la división de ambos.
//Aclaración: para la división, se debe dividir al mayor por el menor, y devolver un mensaje de error si se intenta dividir por cero.

let calcNum1 = Number(prompt('Ingrese el primer número'))
let calcNum2 = Number(prompt('Ingrese el segundo número'))

let suma = calcNum1  + calcNum2
console.log('La suma es: ' + suma);

let resta = calcNum1  - calcNum2
console.log('La resta es: ' + resta);

let multiplicacion = calcNum1  * calcNum2
console.log('La multiplicación es: ' + multiplicacion);

let mayorDivision = Math.max(calcNum1, calcNum2) 
let menorDivision = Math.min(calcNum1, calcNum2) 

let division = mayorDivision / menorDivision
console.log('La división del mayor entre el menor es: ' + division);



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