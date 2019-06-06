/************************************
* Ejercicio C: Diccionarios: parte 1
*************************************/

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
  
  /************************************
  * Ejercicio C: Diccionarios: parte 2
  *************************************/
  
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
  
  
  /************************************
  * Ejercicio C: Diccionarios: parte 3
  *************************************/
  
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