/************************
 * Ejercicios Objetos
*************************/

//Crear un objeto que recibe como parámetros un nombre, un apellido y un numero de teléfono, y tengas dos métodos, uno con una fase mostrando los 3 atributos, y otro mostrando solo la dirección.
  
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