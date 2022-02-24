// ejemplo1 : vamos a usar operadores matematicos con variables
const numero1 = 10
const numero2 = 20

let resultado = 0

resultado = numero1 + numero2
resultado = numero1 - numero2
resultado = numero1 * numero2
resultado = numero1 / numero2

const numero3 = "10"
const numero4 = 20
// el simbolo + se puede usar para poder concatenar variables
resultado = numero3 + numero4

const nombre = "Linder "
const segundoNombre = "Anderson "
const apellido = "Hassinger"
// podemos concatenar mas de una variable
const nombreCompleto = nombre + " " + segundoNombre + " " + apellido
nombreCompleto

// ahora vamos a aprender las condicionales en JS
// Si = if

// quiero saber si la persona es mayor de edad 
// cuando hablamos de condionales usamos algunos simbolos
// > Simbolo mayor
// < Simbolo menor
// === Esto es para comparar si dos cosas son iguales
// !== Si algo es distinto 
// se puede combiar 
// >= mayor igual
// <= menor igual
const edad = 11
let mensaje = ""
// como esta condicion no se cumple no ingresa al if por ende el valor de mensaje no es alterado
if (edad >= 18) {
  // Verifico que esta persona es mayor de edad
  mensaje = "Es mayor de edad"
}

// tambien el si no = else
if (edad >= 18) {
    // Verifico que esta persona es mayor de edad
  mensaje = "Es mayor de edad"
} else {
  // no es mayor de edad
  //
  mensaje = "Es menor de edad"
}


// Usando el else if
// quiero que si edad es igual a 18 imprima mayor de edad
// si eadad es igual a 15
// quiero que imprima tiene 15 años
// Si no que imprima es menor

// ojo: if solo al iniciar luego si quiero anidar condiciones debeo el else if
if (edad === 18) {
  mensaje = "mayor de edad"
} else if (edad === 15) {
  mensaje = "tiene 15 años"
} else if (edad === 14) {
  mensaje = "tiene 14"
  // el else tambien va solo una vez y va al final, porque es el default
} else {
  mensaje = "es menor"
}