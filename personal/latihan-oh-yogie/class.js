// given a class Hero dan sub-class Sidekick.
// Class Hero has three constructors in a form of hero, city, dan abilityHero,
// Sub-class Sidekick has six constructors. three are from class Hero and the other three are sidekick, age, and abilitySidekick
// create three objects from the class Hero and three objects from sub-class Sidekick.
// those six objects must have setters, getters, and a function to return all values from their constructors.
// example:
// Input -> console.log(Batman.getDetailHero())
// Output -> "I am Batman. I am from Gotham and I can beat people up with gadgets"
// Input -> console.log(Robin.getDetailSidekick())
// Output -> "I am Batman. I am from Gotham and I can beat people up with gadgets.
// I have a sidekick and their name is Robin. They are 12 years old and help me with acrobatics"

class Hero {
  constructor(hero, city, abilityHero) {}
  set setHero(value) {}
  get getHero() {}
  getDetailHero() {}
}

class Sidekick extends Hero {
  constructor(hero, city, abilityHero, sidekick, age, abilitySidekick) {
    super(hero, city, abilityHero);
  }
  getDetailSidekick() {}
}

let Batman = new Hero()
let Robin = new Sidekick()
