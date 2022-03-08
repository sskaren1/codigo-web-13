/**
 * * API (Application Programming Interface)
 * * Es un servicio el cual puede proveer informacion o tambien puede crearla
 * * Para este caso vamos a usar el API de github la cual al pasarle un usuario
 * * esta nos devulve la informacion
 */

// * En js existe una funcion la cual se encarga de poder hacer una peticion a un URL
// TODO: fetch()
//* Es una funcion nativa de JS
// * Existen varios tipos de peticiones donde las principales son
// ? GET => Sirve para obtener informacion
// ? POST => Sirve para crear datos
// ? PUT => Sirve para actualizar datos
// ? DELETE => Sirve para eliminar

//* Funcion async
//* La funciones async fueron creadas para poder ejecutar algo y en caso la ejecucion de esto
//* demore mas de lo normal se espere para poder ejecutar el siguiente

//? https://api.github.com/users/WillyPAtino
//* HAY UN TIEMPO DE ESPERA el cual no sabemos cuanto es, ahora como la ejecucion de la peticion a la url
//* no es automatica debemos decirle a nuestra funcion que se espere un poquito antes de pasar
//* a la siguiente linea

//! Estructura de una funcion async
// al aumentar el async estamos convirtiendo nuestra funcion a un funcion async
// * async function obtenerDatos() {}

//* const obtenerDatosGit = async () => {};

//* Existe una palabra clave la cual le dira al codigo que se espere
// * await =>

const imageProfile = document.querySelector("#img-profile");
const usuario = document.querySelector("#usuario");
const nameuser = document.querySelector("#name");
const bios = document.querySelector("#bio");
const repos = document.querySelector("#repos");
const numFollowers = document.querySelector("#followers");
const numFollowing = document.querySelector("#following");
const address = document.querySelector("#location");
const twitter = document.querySelector("#twitter");
const web = document.querySelector("#web");
const user = document.querySelector("#user");
const joined = document.querySelector("#joined");
// console.log(address);
const formSearch = document.querySelector("#formSearch");

// Evento para el input
const btnSearch = document.querySelector("#btnSearch");

btnSearch.onclick = function (event) {
  event.preventDefault();
  console.log("clic en el boton");

  const formSearch = document.querySelector("#formSearch");
  // console.log(formSearch);
  // console.log(formSearch.value);
  localStorage.setItem(formSearch.name, formSearch.value);
  obtenerDatosGitHub();
  formSearch.value = "";
};

// formSearch.addEventListener{}

// let date = "";
// function formatDate(date) {
//   var d = new Date(date),
//     month = "" + (d.getMonth() + 1),
//     day = "" + d.getDate(),
//     year = d.getFullYear();

//   if (month.length < 2) month = "0" + month;

//   if (day.length < 2) day = "0" + day;

//   return [year, month, day].join("-");
// }
// console.log(formatDate("Sun May 11,2014"));

const obtenerDatosGitHub = async () => {
  const userGitSearch = localStorage.getItem("userGitSearch");
  // console.log(userGitSearch);
  let usuarioBuscado = `https://api.github.com/users/${userGitSearch}`;
  // console.log(usuarioBuscado);

  //* En este ejemplo await esta haciendo lo siguiente
  //* Ejecuta fetch con la url y una vez que acabe la ejecucion de fetch recien haz el console.log
  console.log(usuarioBuscado);

  const response = await fetch(usuarioBuscado);
  // const response = await fetch("https://api.github.com/users/linder3hs");
  //* es decir hasta que la ejecucion de fetch no termine no se ejecutura la siguiente linea
  //* ahora necesitamos leer la data que estamos solicitando
  //* para poder leer esta informacion debemos transformar el response a un JSON

  const data = await response.json();

  // Encontrando la imagen y agregandola
  imageProfile.src = data.avatar_url;
  // console.log(data);

  // Encontrando el usuario y agregandolo
  usuario.textContent = data.login;

  // Encontrando la fecha de creación de la cuenta y agregandolo
  //   console.log(data.created_at);
  let date = new Date(`${data.created_at}`);
  console.log(date);
  let createdDate = date.toISOString().split("T")[0];
  console.log(createdDate);
  let newDate = date.toDateString();
  console.log(newDate);
  // console.log(date.toISOString().split("T")[0]);
  joined.textContent = `Joined ${newDate}`; 
  
  // Encontrando el nombre de usuario y agregandolo
  nameuser.textContent = data.name;

  // Encontrando la bio y agregandolo
  if (data.bio === "") {
    bios.textContent = "This profile has no bio";
  } else {
    bios.textContent = data.bio;
  }

  // Encontrando la cantidad de repositorios y agregandolo
  repos.textContent = data.public_repos;

  // Encontrando la cantidad de followers y agregandolo
  numFollowers.textContent = data.followers;

  // Encontrando la cantidad de following y agregandolo
  numFollowing.textContent = data.following;

  // Encontrando address y agregandolo
  address.childNodes[2].textContent = ` ${data.location}`;
  // console.log(address.childNodes[2]);

  // Encontrando twitter y agregandolo
  twitter.childNodes[2].textContent = ` ${data.twitter_username}`;

  // Encontrando web y agregandolo
  web.childNodes[2].textContent = ` ${data.blog}`;

  // Encontrando user y agregandolo
  user.childNodes[2].textContent = ` ${data.login}`;
};
obtenerDatosGitHub();
