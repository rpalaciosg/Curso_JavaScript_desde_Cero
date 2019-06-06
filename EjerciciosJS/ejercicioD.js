/*****************************************
*Ejercicio D: Diccionarios: parte 1
/*****************************************/

//ejercicio 5
// [1,2,3,4] -> rane(1,4,1)
// [2,4,6,8,10] -> range(2,10,2)
function range(star, end, step) {
  if (step === undefined) step = 1;
  let result = [];
  for (let i = star; i <= end; i += step) {
    result.push(i);
  }
  return result;
}
let firstRange = range(3, 10, 2);
console.log(firstRange);


/*****************************************
*Ejercicio D: Diccionarios: parte 2
/*****************************************/

// [1,2,3,4] -> range(1,4,1)
// [1,2,3,4] -> range(1,4)
// [2,4,6,8,10] -> range(2,10,2)
// [10,8,6,4,2] -> range(10,2,-2)
function range(star, end, step = 1) {
  //if (step === undefined) step = 1;
  console.log(step);
  let result = [];

  if (step > 0) {
    for (let i = star; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = star; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
}
let firstRange = range(1, 5);
console.log(firstRange);

/*****************************************
*Ejercicio D: Diccionarios: parte 3
/*****************************************/

// [1,2,3,4] -> rane(1,4,1)
// [1,2,3,4] -> rane(1,4)
// [2,4,6,8,10] -> range(2,10,2)
// [10,8,6,4,2] -> range(10,2,-2)
function range(star, end, step = 1) {
  //if (step === undefined) step = 1;
  let result = [];

  if (step > 0) {
    for (let i = star; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = star; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
}
let firstRange = range(1, 5);
//console.log(firstRange);

//funcion que sume todos los valores de un array
// [1,2,3] => 6
// [-1,1,5] => 5
function sum(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}
//las 2 funciones se usen entre sí
console.log(sum(range(1, 5)));

//funcion que filtre los elementos de un array y nos devuelva solo numeros
// [1,2,3] = > [1,2,3]
// [1,2,'a',3,'b'] = [1,2,3]


/*****************************************
*Ejercicio D: Diccionarios: parte 4
/*****************************************/

//funcion que sume todos los valores de un array
// [1,2,3] => 6
// [-1,1,5] => 5
function sum(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}
//las 2 funciones se usen entre sí
//console.log(sum(range(1,5)));

//funcion que filtre los elementos de un array y nos devuelva solo numeros
// [1,2,3] = > [1,2,3]
// [1,2,'a',3,'b'] = [1,2,3]
function filterNumbers(array) {
  let result = [];
  array.forEach(item => {
    if (typeof item === "number") {
      result.push(item);
    }
  });
  return result;
}

let numbers = filterNumbers([1, 2, "a", 3, "b"]);
console.log(sum(numbers));



//---------------------------------------------
//Juntar arrays con diccionarios. Funcion que devuelva cuantas apariciones hay
// [1,2,2,3,5,1]  => {1:2, 2:2, 3:3, 4:4}

function countNumbers(array) {
  let result = {};

  for (let i = 0; i < array.length; i++) {
    if (!result.hasOwnProperty(array[i])) {
      result[array[i]] = 0;
    }
    result[array[i]]++;
  }
  return result;
}

console.log(countNumbers([1, 2, 2, 3, 5, 1]));