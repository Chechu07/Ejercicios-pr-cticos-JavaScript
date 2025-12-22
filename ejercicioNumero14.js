//EJERCICIO 14
//Un simulador de tránsito requiere un programa que, al ingresar un color de semáforo (“rojo”, “amarillo” o “verde”), indique qué debe hacer el peatón.

// let trafficLight = 'yellow'

// if(trafficLight == 'red') {
//     console.log('Detente');
// } else if(trafficLight == 'yellow') {
//     console.log('Espere');
// } else {
//     console.log('Avance');
// }


function choose(color) {
  if(color === 'red') {
    return 'Detente'
  }else if(color === 'yellow') {
    return 'Espere'
  }else{
    return 'Avance'
  }
}
choose('yellow')