
//EJERCICIO 11:
//Una institución educativa desea un sistema que determine si un alumno aprobó un examen. Se ingresa una nota del 0 al 10 y el programa debe indicar si aprobó (nota 6 o más) o no.

const notasAlumno = Number(prompt('Ingrese la nota del alumno'))

const alumno = (notasAlumno >= 6) ? 'Alumno aprobado' : 'Alumno no aprobado'

console.log(alumno);