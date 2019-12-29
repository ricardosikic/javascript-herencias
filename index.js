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
