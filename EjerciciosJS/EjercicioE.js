/************************************************
* Ejercicio E: Diccionarios: parte 1 y parte 2
*************************************************/

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