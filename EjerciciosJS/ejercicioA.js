/*****************
* Ejercicios A
******************/

//Ejercicio A1
function suma(a, b) {
  return a + b;
}
console.log(suma(10, 10));
//con arrows functions
let sumNum = (a, b) => {
  return a + b;
};
console.log(sumNum(a, b));

//Ejercicio A2
function concat(str1, str2) {
  return `$ {str1} ${str2}. | Cadenas concatenadas.`;
}

console.log(concat("Hola", "mundo"));

//Ejercicio A3
function numBigger(num1, num2) {
  if (num1 > num2) {
    return true;
  } else {
    return false;
  }
}

console.log(numBigger(1, 2));

//Ejercicio A4
function minNumber(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(numLowwer(3, 6));