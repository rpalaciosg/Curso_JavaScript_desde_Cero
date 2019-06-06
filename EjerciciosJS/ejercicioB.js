/*******************************
 * Ejercicios B: parte 1 Arrays
********************************/

//1er ejercicio
let miArray = [1, 2, 3, -5, -6, -10];
//contar numero de enteros +

function contarPositivos() {
  let contador = 0;
  for (let i = 0; i < miArray.length; i++) {
    if (miArray[i] >= 0) {
      contador++;
    }
  }
  return contador;
}

function contarPositivos2() {
  let contador = 0;
  miArray.forEach(item => {
    if (item >= 0) contador++;
  });
  return contador;
}

console.log(contarPositivos2());


//2do ejercicio
let miArray = [2, 4, 6, 7, 9, 8];
//contar numeros divisibles para 2
function divisibles() {
  let contador = 0;
  for (let i = 0; i < miArray.length; i++) {
    if (miArray[i] % 2 === 0) {
      contador++;
    }
  }
  return contador;
}

function divisibles2() {
  let contador = 0;
  miArray.forEach(item => {
    if (item % 2 === 0) contador++;
  });
  return contador;
}

console.log(divisibles2());


/*******************************
 * Ejercicios B: parte 2 Arrays
********************************/

//3er ejercicio
let miArray = [2, true, 4, "hola"];

//devolver primer valor booleano caso contrario undefined
function valorBooleano() {
  for (let i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
    if (typeof miArray[i] === "boolean") {
      return miArray[i];
    }
  }
}

function valorBooleano2() {
  miArray.forEach(item => {
    console.log(item);
    if (typeof item === "boolean") {
      return item;
    }
  });
}

console.log(valorBooleano2());


//4to ejercicio
let miArray = [1, -2, 3];
miArray[0] = 10;

//devolver array con números opuestos
function arrOpuesto(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * -1;
  }
  return arr;
}

function arrOpuesto2(arr) {
  miArray.forEach((item, i) => {
    arr[i] = item * -1;
  });
  return arr;
}

console.log(arrOpuesto2(miArray));