//EJERCICIO 15 
//Una aplicación de acceso necesita validar un inicio de sesión. Se ingresa un nombre de usuario y una contraseña, y se debe mostrar si el acceso es concedido o denegado según los datos guardados.


// let savedUser = 'ceci24'
// let savedPassword = '1234'

// let user = prompt('Ingrese su usuario')
// let password = prompt('Ingrese su contraseña')

// if(savedUser == user && savedPassword == password) {
//     console.log('Acceso concedido');
// } else{
//     console.log('acceso denegado');
// }


function enterData(user, password) {
  const savedUser = 'ceci24'
  const savedPassword = 333

  if(savedUser == user && savedPassword == password) {
    return 'Acceso concedido'
  }else {
    return 'Acceso denegado'
  }
}
enterData('ceci24', 333)