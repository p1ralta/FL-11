// Pokemon
function Pokemon() {
  this._fly = false;
  this._name = this.constructor.name;
}
Pokemon.prototype.getType = function() {
  return this._type;
}
Pokemon.prototype.getSpecie = function() {
  return this._specie;
}
Pokemon.prototype.canFly = function() {
  return this._fly;
}
Pokemon.prototype.getPokemonType = function() {
  return this._name;
}

// Charmander
function Charmander() {
  Pokemon.call(this);
  this._type = 'Fire';
  this._specie = 'Lizard Pokémon';
}
Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;
Charmander.prototype.evolve = function() {
  return new Charmeleon();
}

// Charmeleon
function Charmeleon() {
  Charmander.call(this);
  this._specie = 'Flame Pokémon';
}
Charmeleon.prototype = Object.create(Charmander.prototype);
Charmeleon.prototype.constructor = Charmeleon;
Charmeleon.prototype.evolve = function() {
  return new Charizard();
}

// Charizard
function Charizard() {
  Charmeleon.call(this);
  this._fly = true;
}
Charizard.prototype = Object.create(Charmeleon.prototype);
Charizard.prototype.constructor = Charizard;
Charizard.prototype.evolve = function() {
  return this;
}

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

// Pichu
function Pichu() {
  Pokemon.call(this);
  this._type = 'Electric';
  this._specie = 'Mouse Pokémon';
}
Pichu.prototype = Object.create(Pokemon.prototype);
Pichu.prototype.evolve = function() {
  return new Pikachu();
}
Pichu.prototype.constructor = Pichu;

// Pikachu
function Pikachu() {
  Pichu.call(this);
}
Pikachu.prototype = Object.create(Pichu.prototype);
Pikachu.prototype.constructor = Pikachu;
Pikachu.prototype.evolve = function() {
  return new Raichu();
}

// Raichu
function Raichu() {
  Pikachu.call(this);
}
Raichu.prototype = Object.create(Pikachu.prototype);
Raichu.prototype.constructor = Raichu;
Raichu.prototype.evolve = function() {
  return this;
}

const pichu = new Pichu();
const pikachu = pichu.evolve();
const raichu = pikachu.evolve();





