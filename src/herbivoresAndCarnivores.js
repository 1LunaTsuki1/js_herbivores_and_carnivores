'use strict';

class Animal {
  static aliveAnimal = [];
  static get alive() {
    return Animal.aliveAnimal.filter((animal) => animal.health > 0);
  }
  die() {
    this.health = 0;
  }
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.aliveAnimal.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;

      if (animal.health <= 0) {
        animal.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
