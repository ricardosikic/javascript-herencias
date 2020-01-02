// En Javascript existen maneras de pasar atributos y metodos otras clases a partir de una clase  padre.

// Esto se hace a partir de las herencias y la palabra usada en js para definir una herencia es extends, miremos un ejemplo

class Human {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  speak() {
    console.log(`hello i'm ${this.name}  my age is ${this.age} my weight is ${this.weight} kg \u{1F602}`);
  }
}

// a continuacion creare una subclase hija que hereda del padre 

class Person extends Human {
}

let persona_1 = new Person('ricardo', 31, 85);
console.log(persona_1.speak());


class Animal {
  constructor(name, age) {
    this.name = name;
    // operador logico || (o);
    this.age = age || 0;
  }

  info() {
    console.log(`the name is ${this.name} and the age is ${this.age}`);
  }
}

// new instance of Animal class
let animal_1 = new Animal('elefante');
console.log(animal_1.info());



// operador logico or ||:
let variable = '' || 'otro valor';
/* console.log(variable); */
variable = 'este valor';
console.log(variable);


class Auto {
  constructor(peso, color, ruedas) {
    this.peso = peso;
    this.color = color || 'black';
    this.ruedas = ruedas;
  }

  info() {
    console.log(`el peso es ${this.peso}, de color ${this.color} tiene ${this.ruedas}`);
  }
}


class Autito extends Auto {
  constructor(peso, color, ruedas, marca) {
    // super me permite llamar a los metodos y argumentos 
    // de la clase padre
    super(peso, color, ruedas);
    this.marca = marca;
  }

  sayModel() {
    console.log(`el modelo ${this.marca} el peso es ${this.peso}, de color ${this.color} tiene ${this.ruedas}`);
  }

  // segun documentacion para acceder al metodo del padre 
  // super debe ir dentro del metodo de subclase.
  call() {
    super.info;
  }
}


let auto_1 = new Autito(2000, 4, 'hyundai');
console.log(auto_1.sayModel());

// aqui se ve como super me permite llamar al metodo del padre.
console.log(auto_1.info());


// SUPER me permite acceder y llamar a los metodos y argumentos
// de la clase padre en la subclase que hereda sus atributos
// super().metodo


//FALTA OTRO EJEMPLO CON SUPER PARA APRENDERLO BIEN!!!!

class Computador {
  constructor(procesador, ram, disco_duro){
    this.procesador = 'Intel';
    this.ram = '16gb';
    this.disco_duro = 'ssd';
    this.encendido = false;
  }

  encender() {
    this.encendido = true;
    console.log(`Welcome back...`);
    return this;
  }

  apagar() {
    console.log(`See you...`);
    this.encendido = false;
    return this;
  }
}



class Notebook extends Computador {
  constructor(sistema_operativo, ...args) {
    super(...args);
    this.sistema_operativo = this.sistema_operativo || 'linux';
  }

  on() {
    setTimeout(() => {
      console.log(`welcome back, sistema operativo ${this.sistema_operativo}, ${this.ram} disco duro ${this.disco_duro}`);
    }, 5000);
  }

  off() {
    super.apagar;
  }
}

notebook_1 = new Notebook();
notebook_1.on();



// HACER EJERCICIO DE JS BUSCANDO LAS LETRAS MAYUSCULAS A PALABRAS

// HACER OTRO EJERCICIO DE JS CAMBIANDO UN NUMERO A PRECIO CHILENO! 

// AMBOS EJEMPLOS USANDO FUNCIONES PARA ELLO CON NOMBRES APROPIADOS

// EJERCICIO QUE RECOGE UN NUMERO DEL ARRAY Y PASA POR UN CONDICIONAL SWITCH

// CREAR OBJETOS, PASAR ATR DE UN OBJETO, USAR FREEZE, RECORRER CON VALUES O KEYS


// hacer un ejemplo con operadores or/ternarios/&& en las variables.