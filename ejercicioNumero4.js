//EJERCICIO 4:
// Una aplicación de bienvenida necesita generar un mensaje personalizado. 
// Se debe ingresar el nombre del usuario y su comida favorita, y mostrar un mensaje del tipo: “Hola Ana, tu comida favorita es la pizza”.

// const user = prompt('Please enter your name')
// const favoriteFood = prompt('Enter your favorite food')

// console.log('Hello ' + user + ', ' + 'your favorite food is ' + favoriteFood)



function showMessage (user, favoriteFood) {
   return `Hola ${user}, tu comida favorita es ${favoriteFood}`
}
showMessage('Emma', 'canelones')