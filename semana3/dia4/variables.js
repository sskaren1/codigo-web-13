// Estoy un ejcutador JS en tiempo real
// Todo lo que escriba se va ejecutar al costado del prorgrama
/*
 * Las variables
 son contenedores que internamente guarda un valor
 puede ser
 numerico => En JS esto es un number
 decimal => En JS esto es un number
 texto => En JS esto es un string
 true | false => Boolean
 */
/*
En JS existen 3 formas de declarar una variable
var 
let 
const
Estas 3 formas van acompañadas del nombre de la variable ejemplo:
*/
var nombre = 'Pepito';
let edad2 = 109;
const esMayor = true;
// En JS no es requerido poner que tipo de variable es, JS interpreta en base al valor



// Vamos a ver la diferencia entre let - var - const


// var => Es la forma mas antigua de declarar, actualmente no se debe usar 
// var es la forma de declarar variables globales, lo cual hace que sean pesadas y a lo largo nos puede traer problemas

var miNombre = "Pepe"

// JS - var nos permite cambiar el valor de las variables
// uno puede asignar un nuevo valor a una variable ya existente 
// miNombre = "Pepe"
// si yo quiero cambiar el valor de la variable miNombre tengo solamente que llamar a la variable y darle el nuevo valor

miNombre = "Juan"
// al asignarle el valor Juan a miNombre es valor antuguo queda elminado

// ahora var permite cambiar el tipo de valor, es decir yo puedo cambiar el valor de mi variable a caulquier tipo, puede ser un number, boolean 
miNombre = 10



// let => Es parecido a var, la diferencia es que let no es global
let edad = 50
// como let es parecido a var tambien podemos cambiar su valor
// en la actualidad debemos usar let si queremos que el valor de la variable cambie
// nota: si tiene comillas es un string
edad = "100"


// const => Const es un tipo de variable constante, es decir su valor no cambia (no puede ser alterado) una vez declaro el valor este no cambia

const fechaNacimiento = "01/01/100"
// esto no es posible porque cuando usamos const solo podemos usar un valor
// fechaNacimiento = "02/02/02"