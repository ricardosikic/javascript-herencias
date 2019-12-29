// En Javascript existen maneras de pasar atributos y metodos otras clases a partir de una clase  padre.

// Esto se hace a partir de las herencias y la palabra usada en js para definir una herencia es extends, miremos un ejemplo

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hablar() {
    console.log(`hola soy ${this.name} y tengo ${this.age}`)
  }
}

