// * Un blucle es una estructura repetitiva, es decir hacer algo muchas veces

// * los bucles son usados para poder leer arrays, porque un bucle me va a permitir
// * lee cada elemento idenpendiemente

// TODO: for, es español es para y es el bucle mas antiguo y conocido
// ? EJM

// iterador => indice de mi bucle
// i++
// i = i + 1
// indica que se hara de 1 en 1

for (let i = 0; i < 10; i++) {
  console.log("Iterador", i);
}

for (let i = 5; i < 20; i++) {
  console.log("Iterador 2", i);
}

for (let j = 10; j < 50; j++) {
  console.log("Iterador3", j);
}

const alumnos = ["Pepe", "Juana", "Stephanie", "Carlos", "Luis"];

for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let j = 0; j < numeros.length; j++) {
  // como haria si solo quiero imprimir los numeros pares?
  if (numeros[j] % 2 === 0) {
    console.log(numeros[j]);
  }
}

const laptops = [
  {
    marca: "Lenovo",
    imagen: "https://logo.com",
    nombre: "Ide Centre AIO I3",
    vendedor: "Falabella",
    precioOferta: 1599,
    precioNormal: 3599,
    calificacion: 2,
  },
  {
    marca: "Acer",
    imagen: "https://logo.com",
    nombre: "AN515 15.6",
    vendedor: "Falabella",
    precioOferta: 3399,
    precioNormal: 4999,
    calificacion: 5,
  },
];

for (o = 0; o < laptops.length; o++) {
  console.log(laptops[o].marca);
}

// array de objetos de alumnos
const alumnos = [
  {
    nombre: "Pepe",
    edad: 21,
  },
  {
    nombre: "Juan",
    edad: 30,
  },
  {
    nombre: "Lucho",
    edad: 22,
  },
];

//* .length devuele el numero de elementos de un array
//! recurden que el indice de un array inicial en 0

//  variable inicial - condicion de limite - de cuanto en cuanto se hace la accion
for (let obj = 0; obj < alumnos.length; obj++) {
  // obj es el numero que se incrementa de 1 en 1
  // console.log("obj", obj);
  // console.log(alumnos[0]);
  // console.log(alumnos[1]);
  // console.log(alumnos[2]);
  console.log(alumnos[obj]);
  // como acceso a la propiedad objeto?
  console.log(alumnos[obj].nombre);

  console.log("------------------");
  console.log("Imprimir solo si la edad del alumno es menor 30");

  if (alumnos[obj].edad < 30) {
    console.log(alumnos[obj]);
  }

  console.log("------------------");
}

// Escribe un programa que pida una frase y escriba cuántas
// veces aparecen cada una de las vocales

const contarVocales = (frase) => {
  // saber cuando mide la frase
  const fraseMayuscula = frase.toUpperCase();
  // para poder saber cuantos vocales tengo necesito un contador
  // este contador se va a encargar de guardar cuantas vocales tengo
  let contadorA = 0;
  let contadorE = 0;
  let contadorI = 0;
  let contadorO = 0;
  let contadorU = 0;

  for (let i = 0; i < fraseMayuscula.length; i++) {
    const letra = fraseMayuscula[i];

    if (letra === "A") {
      // contador = contador + 1;
      contadorA++;
    } else if (letra === "E") {
      contadorE++;
    } else if (letra === "I") {
      contadorI++;
    } else if (letra === "O") {
      contadorO++;
    } else if (letra === "U") {
      contadorU++;
    }
  }

  console.log(
    `La frase tiene ${contadorA} vocales a, ${contadorE} vocales e, ${contadorI} vocales i, ${contadorO} vocales o, ${contadorU} vocales u`
  );
};

contarVocales("Hola me llamo Juan");
contarVocales("aeiou");

//Ejercicio anterior con todas las letras
const contarVocales = (frase) => {
  // saber cuando mide la frase
  const fraseMayuscula = frase.toUpperCase();
  // para poder saber cuantos vocales tengo necesito un contador
  // este contador se va a encargar de guardar cuantas vocales tengo
  let contador = 0;

  for (let i = 0; i < fraseMayuscula.length; i++) {
    const letra = fraseMayuscula[i];

    if (
      letra === "A" ||
      letra === "E" ||
      letra === "I" ||
      letra === "O" ||
      letra === "U"
    ) {
      // contador = contador + 1;
      contador++;
    }
  }

  return `La frase tiene ${contador} vocales`;
};

contarVocales("Hola me llamo Juan");
contarVocales("aeiou");

// Divisores comunes de dos numeros dados
// Metodo realizado por el profesor
const hallarDivisoresComunes = (numero1, numero2) => {
  const arrayDivisores = [];

  const primerosDivisores = hallarDivisores(numero1, arrayDivisores);
  // entonces la variable primerosDivisores es un array
  const segundosDivisores = hallarDivisores(numero2, primerosDivisores);
  // hasta aqui tengo almacenado un array con los divisores del primer y segundo número

  // se procede a ordenar el array obtenido anteriormente
  // sort sirve para ordenar un array
  const arrayOrdernado = segundosDivisores.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arrayOrdernado.length; i++) {
    if (arrayOrdernado[i] === arrayOrdernado[i + 1]) {
      console.log(arrayOrdernado[i]);
    }
  }

};

// para que funcion sea operativa debe retornar un arreglo con los numeros que son divisores
// se utilizó esta funcion porque el for se repetia dos veces para los divisores
const hallarDivisores = (numero, divisores) => {
  for (let j = 1; j <= numero; j++) {
    if (numero % j === 0) {
      // push sirve para agregar un elemento en la ultima posicion a un array
      divisores.push(j);
    }
  }
  return divisores;
};
hallarDivisoresComunes(12, 24);

//Metodo trabajado
const hallarDivisores = (num1, num2) => {
  const divisores = [];

  for (let i = 1; i <= num1; i++) {
    if (num1 % i == 0) {
      // console.log(i);
      divisores.push(i);
    }
  }
  for (let j = 1; j <= num2; j++) {
    if (num2 % j == 0) {
      // console.log(j);
      divisores.push(j);
    }
  }

  console.log(divisores);

  const divisoresOrdernado = divisores.sort();
  console.log(divisoresOrdernado);

  for (let w = 0; w < divisoresOrdernado.length; w++) {
    if (divisoresOrdernado[w] === divisoresOrdernado[w + 1]) {
      console.log(divisoresOrdernado[w]);
    }
  }
};
hallarDivisores(625, 125);

// Otra solucion a lo anterior
const numMenor = (num1, num2) => (num1 > num2 ? num2 : num1); //para detectar cual es el mayor

const divisoresComunes = (num1, num2) => {
  const divisores = [];
  for (let i = 0; i <= numMenor(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisores.push(i);
    }
  }
  return divisores;
};

console.log(divisoresComunes(625, 125));
