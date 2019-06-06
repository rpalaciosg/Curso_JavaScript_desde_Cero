#
Curso de Java Script desde Cero

## Historia

## Variables y Tipos

### Variables: Parte 1

  -
  tipado debil -
  Hay diferentes tipos primitvos, que son Number, String, Boolean, null, Undefined y symbol. -
  Las variables en Javascript tienen tipado dinamico.

  *Valores numericos(Number)

  *
  Operadores Binarios

## 3. Funciones

### Ejercicio A

```js
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
```

### Funciones: Parte 7: Arrow Functions

```js
let arrowFunction = () => {
  return "Hola";
};

console.log(arrowfunction());
```

## Seccion 4: Arrays

### Parte 1

```js
let miArray = [1, 2, 3, "hello", "world"];
console.log(miArray);

//añadir un elementro al aray
function addToArray(item) {
  miArray.push(item);
}

//Sacar un elemento del array
function popFromArray() {
  miArray.pop();
}

addToArray(4);
addToArray(5);
console.log(miArray);

popFromArray();
console.log(miArray);
```

### Parte 2

```js
let miArray = [1, 2, ["hellow", "world"]];

function restParameters(...params) {
  console.log(params);
  console.log(params[0]);
}

console.log(restParameters(1, 2, 3));
```

### Parte 3: Iteracion

```js
let miArray = [1, 2, 3, "hola"];

for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[i]);
}

//Una forma diferente de iterar o recorrer un array usando forEach
miArray.forEach((item, i) => {
  console.log(item);
});
```

### Ejercicio B: parte 1 Arrays

```js
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
```

```js
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
`
``

###
Ejercicio B: parte 2 Arrays

``
`js
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
`
``

``
`js
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
`
``

##
Sección 5: Diccionarios

### Diccionarios: parte 1

  -
  Permite agrupar datos en forma calve y valor, y no estan ordenados.

``
`js
let miDiccionario = {
  clave: "valor",
  clave_2: 2
};

console.log(miDiccionario);
`
``

-
Las claves tienen que ser unicas y no se pueden repetir. -
  Hay 2 formas de insertar claves - valor a un diccionario:

  ``
`js
let miDiccionario = {};
//1ra forma con corchetes
miDiccionario["clave_1"] = 1;
//2da forma con punto
miDiccionario.clave_1 = 4;
console.log(miDiccionario);
`
``

###
Diccionarios: parte 2

  -
  **
  Iteración **

  ``
`js
let miDiccionario = {
  clave_1: 100,
  clave_2: 200,
  key: "hola"
};

//primera forma (nueva) de recorrer un diccionario
for (let key in miDiccionario) {
  console.log(miDiccionario[key]);
}
//2da forma de recorrer un diccionario
console.log(Object.keys(miDiccionario));

//hacer nuestro propio object.keys()
function getKeys(dic) {
  let aux = [];
  for (let key in dic) {
    aux.push(key);
  }
  return aux;
}
console.log("Mi metodo ->", getKeys(miDiccionario));
`
``

###
Diccionarios: parte 3

  -
  Tambien se puede recorrer un diccionario con forEach

``
`js
let miDiccionario = {
  clave_1: 100,
  clave_2: 200,
  key: "hola"
};

//esto se puede hacer con una funcion anonima
Object.keys(miDiccionario).forEach(function(item) {
  console.log(miDiccionario[item]);
});
// o con un arrow function
Object.keys(miDiccionario).forEach(item => console.log(miDiccionario[item]));
`
``

###
Ejercicio C: Diccionarios: parte 1

``
`js
//ejercicio 1
//crear objeto con 2 propiedades (nombre y apellido), y imprimir una frase que sea, "Hola (nombre apellido), encantado"

let persona = {
  nombre: "Richard",
  apellido: "Palacios",
  direccion: {
    calle: "123",
    numero: 12
  },
  arrays: [1, 2, 3]
};

function saludar() {
  return `
Hola ${persona.nombre}
${persona.apellido}, encantado.
Vivo en ${persona.direccion.calle}
Tengo un array ${persona.arrays[2]}
`;
}

console.log(saludar());
`
``

###
Ejercicio C: Diccionarios: parte 2

``
`js
//ejercicio C: ejercicio 2
//Contar el numero de propiedades que tiene un objeto

let dict = {
  nombre: "Richard",
  apellido: "Palacios",
  direccion: {
    calle: "123"
  }
};

function contarPropiedadesDiccionarios() {
  let contador = 0;
  for (key in dict) {
    contador++;
  }
  return contador;
}

console.log(contarPropiedadesDiccionarios());
`
``

``
`js
//ejercicio 3
let dict1 = {
  nombre: "Rchard"
};

let dict2 = {
  apellido: "Palacios"
};

function unirDiccionario(diccionario1, diccionario2) {
  let diccionarioFinal = {};
  for (let key in diccionario1) {
    diccionarioFinal[key] = diccionario1[key];
  }
  for (let key in diccionario2) {
    diccionarioFinal[key] = diccionario2[key];
  }
  return diccionarioFinal;
}

console.log(unirDiccionario(dict1, dict2));
`
``

###
Ejercicio C: Diccionarios: parte 3

``
`js
//ejercicio 4
//Juego papel o tijera.
const play = (player1, player2) => {
  const rules = { piedra: "tijera", papel: "piedra", tijera: "papel" };
  debugger;
  if (player1 === player2) {
    return "Empate";
  } else if (rules[player1] === player2) {
    return "Gana Jugador 1";
  } else {
    return "Gana jugador 2";
  }
};

console.log(play("tijera", "papel"));
```

###
Ejercicio D: Diccionarios: parte 1

```js
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
```

### Ejercicio D: Diccionarios: parte 2

```js
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
`
``

###
Ejercicio D: diccionarios: parte 3

``
`js
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
`
``

###
Ejercicio D: Diccionarios: parte 4

``
`js
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
`
``

###
Ejercicio E: Diccionarios: parte 1 y parte 2

``
`js
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
```

## Sección 6. Objetos

Hay objetos los cuales son diccionarios, y hay obsjetos constructores los cuales se llaman con new.

```js
  function Jugador(nombre, posicion) {
    this.nombre = nombre;
    this.posicion = posicion;
    this.getInfo = function () {
      return `Mi nombre es ${this.nombre} y juego de ${this.posicion}`;
    }
  }

  let ronaldo = new Jugador('Ronaldo', 'delantero');
  let messi = new Jugador('messi', 'delantero');
  let keylor = new Jugador('keylor', 'portero');

  console.log(ronaldo.nombre);
  console.log(messi.nombre);
  console.log(keylor.getInfo());
```
### Ejercicios

- Crear un objeto que recibe como parámetros un nombre, un apellido y un numero de teléfono, y tengas dos métodos, uno con una fase mostrando los 3 atributos, y otro mostrando solo la dirección.
  
```js
//Ejercicios
  function Persona(nombre, apellido, direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;    
    this.getInfo = function () {
      return `Me llamo ${this.nombre} ${this.apellido} y vivo en la calle ${this.direccion}`;
    };
    this.getDireccion = function (numero) {
      return `Vivo en la calle ${this.direccion} en el número ${numero}`;
    };
  }
  let persona1 = new Persona('Richard', 'Palacios', 'Vasco Nuñez');
  console.log(persona1.getDireccion(123));
```

* En este ejercicio modificaremos y mejoramos el juego de piedra, papel o tijera, usando objetos y constructores y diccionarios.

Descripción: Reescribir el juego de 'piedra, papel y tijera' utilizando objeto para los jugadores, con un método jugar que nos devuelva un sprint con lo que cada jugador juega.

```js
//objeto player y un metodo jugar
  const game = (player1, player2) => {
    let player1Game = player1.play();
    let player2Game = player2.play();
    const rules = { piedra: "tijera", papel: "piedra", tijera: "papel" };
    debugger;
    if (player1Game === player2Game) return "Empate!";
    if (rules[player1Game] === player2Game) {
      return `${player1.nombre} gana`;
    } else {
      return `${player2.nombre} gana`;
    }
  };

  function Player (nombre){
    let actions = ['piedra', 'papel', 'tijera'];
    this.nombre = nombre;
    this.play  = function (){
      return actions[Math.floor(Math.random() * actions.length)];
    }
  }

  let player1 = new Player('Richard');
  let player2 = new Player('Batman');

  for (let i =0; i<3; i++){
      console.log(game(player1,player2));
  }
```

### Proyecto A

En esta parte se crea el proyecto GameJS, el cual es un juego 2D usando solo javascript y html.
- Se creó clases que crean o dibujan el canvas del juego en el html.

## Sección 7 : Prototipos

Todos los objetos que hemos visto hasta aquí tiene una propiedad especial llamada `prototype`, la cual también es un objeto y nos permite añadir variables y métodos.

```js
function Persona (nombre, apellidos) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.getNombre = function () {
    return  `${this.nombre} ${this.apellidos}.`;
  }
}

Persona.prototype.getNombre = function (){
  return `${this.nombre} ${this.apellidos}`;
}
```
 Los `prototypes` tambien nos ayudan a extender la funcionalidad de objetos nativos de JS. Ejm. `Array`

## Sección 8: High-order functions

Funciones de alto nivel.
En Js se conocen como `firts-class objects` , es decir pueden ser tratados como cualquier otro objeto, es decir son como ciudadanos de primera clase. Pueden ser tratados como cualquier otro objeto.

Es decir, pueden ser pasados como parámetro, pueden ser devueltas como función.

Esto quiere decir que cuando son funciones de alto nivel, pueden ser pasados como parámetros y pueden ser devueltas por otras funciones en el _return_.
 
```js
  function multiplicador (x) {
    let magicNumber = 2;
    return function (y) {
      return x * y + magicNumber;
    }
  }
  let doblar = multiplicador(2);
  let triplicador = multiplicador(3);
  console.log(doblar(10));
  console.log(triplicador(3));
```

Lo que se hace en esta funcion que el parámetro 'x' se lo guarda para luego multiplicar con la funcion interna.



#### Funcion como parámetro
Es otra de las cosas que se puede hacer con la High-orders functions.

El siguiente ejemplo de código lo que hará es a filtrar el contenido de un array.

```js
  let numbers = [1,2,3,4];

  function filter(filterFunction, array) {
    let result = [];
    for (let i=0; i< array.length; i++){
      if (filterFunction(array[i])){
        result.push(array[i]);
      }
    }
    return result;
  }

  let result = filter(number => number % 2 === 0 , numbers);

  let result3 = filter(number => number % 3 === 0 , numbers);

  console.log(result);
  console.log(result3);
```

Las high-order function nos permiten reutilizar código.

Es bueno recordar la funcion `map`:

```js
  let numbers = [1,2,3,4];

  let result = numbers.map(number => number * 5);
  console.log(result);
```

En esta función podemos entender que a _map_ se le pasa una función la cual se ejecutara por cada elemento del array.

#### Constructores

Todas las funciones constructor tienen una propiedad `prototype`.

```js
  function Player (name) {
    this.name = name;
  }

  Player.prototype.getName = function () {
    return this.name; 
  }

  let player = new Player('Rosi');

  console.log(player);
```

De una funcion constructor podemos ver su prototipo.

```js
  function Player (name) {
    this.name = name;
  }

  Player.prototype.getName = function () {
    return this.name; 
  }

  let player = new Player('Rosi');

  console.log(Player.prototype);
```

Lo que se intenta decir es que todas las funciones tienen un objeto prototype, éste no esta vacio es decir es una propiedad oculta que se crea automaticamente, esta función se llama `constructor`

```js
  function Player (name, apellidos) {
    this.name = name;
    this.apellidos = apellidos;
  }

  Player.prototype.getName = function () {
    return this.name; 
  }

  let player = new Player('Rosi');

  console.log(Player.prototype.constructor);
```

Es decir cada vez que creamos una funcion se le crea un prototipo que es un objeto que tiene un constructor:

```js
  {
    function Player (name, apellidos) {
      this.name = name;
      this.apellidos = apellidos;
    } 
  }
```

Por debajo se crea algo como lo anterior.

#### IndexOf

Existe una funcion en JS que se usa tanto para Strings como para Arrays.
Esta función busca un caracter dentro de un array; en caso de encontrar el caracter, este devuelve o retona el numero del indice en el que 

#### Funcion some()

La función prototipo `some()` en los arrays, nos permite verificar si un elemento del array cumple un test, y devuelve true o false en como resultado.

```JS
  return level.some( row => row.indexOf('@') !== -1);
```

#### Manejo de Excepciones en JavaScript

PAra lanzar excepciones en JS se usa la palabra reservada throw, y JS tiene una clase implementada llamada Error que es un constructor y como para usar a los constructores se usa un _new_ lo llamamos de la siguiente manera.

```JS
  if (!validateLevel(plan)) throw new Error('Yo need a player and a coin.')
```