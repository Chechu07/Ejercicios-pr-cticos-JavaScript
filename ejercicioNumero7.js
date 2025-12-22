//EJERCICIO 7:
//Una escuela necesita una calculadora básica que, a partir de dos números, muestre la suma, la resta, la multiplicación y la división de ambos.
//Aclaración: para la división, se debe dividir al mayor por el menor, y devolver un mensaje de error si se intenta dividir por cero.

// const firstNumber = 20 
// const secondNumber = 0 
// let result;

// const addition = firstNumber  + secondNumber
// console.log('The sum is: ' + addition);

// const subtraction = firstNumber  - secondNumber
// console.log('The subtraction is: ' + subtraction);

// const multiplication = firstNumber  * secondNumber
// console.log('Multiplication is: ' + multiplication);

//  if(firstNumber == 0 || secondNumber == 0) {
//    console.log('Error, you cannot divide by 0');
//  } else if(firstNumber > secondNumber) {
//    result = firstNumber / secondNumber
//    console.log('The division is:' + result)
//  } else {
//    result = secondNumber / firstNumber
//    console.log('The division is:' + result)
// }

let result;
let sum, rest, multiplication

function calculate(firstNumber, secondNumber) {
  sum = firstNumber + secondNumber
  rest = firstNumber - secondNumber
  multiplication =firstNumber * secondNumber


  if(firstNumber == 0 || secondNumber == 0) {
   console.log('Error, you cannot divide by 0');
  } else if(firstNumber > secondNumber) {
    result = firstNumber / secondNumber
  } else {
    result = secondNumber / firstNumber
  }
}
calculate(20,10)
console.log('La suma es', sum);
console.log('La resta es', rest);
console.log('La multiplicacion es', multiplication);
console.log('La división es', result);