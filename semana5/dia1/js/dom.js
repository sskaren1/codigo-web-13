/**
 * * Existe dentro de JS el document, este atributo de JS me va a permitir
 * * obtener los elementos de HTML
 */

/**
 * * Obteniendo elementos en base a su tag
 * * tag = etiquetar
 * <h1></h1> tagname = h1
 * <input /> tagname = input
 * <form></form> tagname = form
 */

// ? como tengo 4 elementos con el tagname input esto sera un array de inputs
const inputs = document.getElementsByTagName("input");
console.log("inputs", inputs);

//! Recordemos que input es un HTMLCollection, pero para poder ser iterado debe ser convertido aun array
//! normal vamos a usar Array.from para convertir este HTMLColletion a un array normal
const newIputs = Array.from(inputs);
console.log("new inputs", newIputs );

// un map a inputs
newIputs.map((input)=>{
    console.log(input);
})

// accedan al form
const form = document.getElementsByTagName("form");

// accedan al boton
const buttons = document.getElementsByTagName("button");
console.log("buttons", buttons);


const divContent = document.getElementsByTagName("div");
console.log("divContent", divContent);

const newDivContent = Array.from(divContent);
console.log("new DivContent", newDivContent);

newDivContent.forEach((element) => {
    // aca solo quiero que imprima algo en consola
    console.log("element",element);
});

console.log("========================");
/**
 * * Otra forma de acceder a los elementos del DOM es utilizando el ID
 * TODO: Recuerden que podemos asignarle un id a cualquier elemento de nuestro HTML
 */
//* Esta variable solo sera dedicada para mi email
const inputEmail = document.getElementById("input_email");
console.log("========================");
console.log(inputEmail);
console.log("========================");
// no se puede poner dos id iguales, si se pone solo toma el valor del primero

// de esta forma estoy accediendo al value de mi input
inputEmail.style.backgroundColor = "#f01";
console.log(inputEmail.value);
console.log("inputEmail", inputEmail);
// usando puedo acceder directamente a las propiedades de mi input

const inputPassword = document.getElementById("input_password");
inputPassword.style.backgroundColor = "#000";
inputPassword.style.color = "#fff";
console.log("password", inputPassword.value);



/**
 * * Vamos a obtener elementos por su class
 * * en JS al class se traduce como className
 */

 const inputsName = document.getElementsByClassName("input_name");
 console.log(inputsName);
 // el getElementsByClassName como el getElementsByTagName devuelve un htmlcollectiuon en cmabio el getElementById no

 const newInputsName = Array.from(inputsName);
 newInputsName.forEach((input) => {
   console.log(input.value);
 });
 
 const buttons = document.getElementsByClassName("btn_registro");
 
 console.log(button);


