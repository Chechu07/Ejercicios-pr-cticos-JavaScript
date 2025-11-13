//EJERCICIO 7:
//Una escuela necesita una calculadora básica que, a partir de dos números, muestre la suma, la resta, la multiplicación y la división de ambos.
//Aclaración: para la división, se debe dividir al mayor por el menor, y devolver un mensaje de error si se intenta dividir por cero.

const numberOne = 20
const numberTwo = 0
let result;

const addition = numberOne  + numberTwo
console.log('The sum is: ' + addition);

const subtraction = numberOne  - numberTwo
console.log('The subtraction is: ' + subtraction);

const multiplication = numberOne  * numberTwo
console.log('Multiplication is: ' + multiplication);

 if(numberOne == 0 || numberTwo == 0) {
    console.log('Error, you cannot divide by 0');
 } else if(numberOne > numberTwo) {
    result = numberOne / numberTwo
    console.log('The division is:' + result)
 }