class Fighter {
  constructor(obj) {
    this._name = obj.name;
    this._damage = obj.damage;
    this._hp = obj.hp;
    this._agility = obj.agility;
    this._wins = 0;
    this._losses = 0;
    this._total = this._hp;

    this.getName = function() {
      return this._name;
    }

    this.getDamage = function() {
      return this._damage;
    }

    this.getHealth = function() {
      return this._hp;
    }

    this.getAgility = function() {
      return this._agility;
    }

    this.dealDamage = function(e) {
      let a = this._hp -= e;
      return a; 
    }

    this.addWin = function() {
      return this._wins++;
    }

    this.addLoss = function() {
      return this._losses++;
    }

    this.logCombatHistory = function() {
      return `Name: ${this._name}, Wins: ${this._wins}, Losses: ${this._losses}`;
    }

    this.heal = function(points) {
      this._hp += points;
      if (this._hp > this._total) {
        this._hp = this._total;
      }
    }
  }

  attack(defender) {
    let hundred = 100;
    let agility = defender.getAgility();
    let probability = hundred - agility;
    let random = Math.random();
    
    if (random < probability/hundred) {
      defender.dealDamage(this.getDamage());
      console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
    }else{
      console.log(`${defender.getName()} attack missed`);
    }
  }
}

const fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const fighter2 = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40}); 

function battle(person1, person2) {

  if (person1.getHealth() <= 0) {
    console.log(`${person1.getName()} is dead and can't fight`);
    
  }else if(person2.getHealth() <= 0){
    console.log(`${person2.getName()} is dead and can't fight`);
  }

  while(person2.getHealth() > 0 && person1.getHealth() > 0){
    person1.attack(person2);
    if (person2.getHealth() <= 0) {
      person1.addWin();
      person2.addLoss();
      break;
    }
    person2.attack(person1);
    if (person1.getHealth() <= 0) {
      person2.addWin();
      person1.addLoss();
      break;
    } 
  }
}

