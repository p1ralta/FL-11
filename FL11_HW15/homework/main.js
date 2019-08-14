function Hamburger(type, calories, secretAdded) {
  let cheeseCount = 0,
      tomatoCount = 0,
      secretCount = 0,
      biteCount = 0;

  this.type = type;

  this.getCalories = function() {
    return calories;
  }

  this.setCalories = function(value) {
    calories = value;
  }

  this.addCheese = function() {
    cheeseCount++;
    if(cheeseCount > 1) {
      console.log('Sorry, you can add cheese only once');
    }else{
      calories += 120;
    }
  }

  this.addTomato = function() {
    tomatoCount++;
    if(tomatoCount > 2) {
      console.log('Sorry, you can add tomato only twice');
    }else{
      calories += 20;
    }
  }

  this.addSecretIngredient = function() {
    if(cheeseCount === 0 && tomatoCount === 0) {
      secretCount++;
      if(secretCount > 1) {
        console.log('Sorry, you can add secret ingredient only once');
      }else{
        calories += 100;
      }
    }else{
      console.log('Sorry, you can add secret ingredient only before another ingredient');
    }
  }

  this.bite = function() {
    biteCount++;
    this.addCheese = function(){console.log('Sorry, you cannot add cheese')};
    this.addTomato = function(){console.log('Sorry, you cannot add tomato')};
    this.addSecretIngredient = function(){console.log('Sorry, you cannot add secret ingredient')};
  }

  this.info = function() {
    let space = ': ';
    if(secretCount !== 0) space += 'with secret ingredient';
    if(cheeseCount !== 0) space += ', with cheese';
    if(tomatoCount !== 0) space += `, with ${tomatoCount} tomato`;
    if(biteCount !== 0) space += `, is bit ${biteCount} times`;

    return `Classic hamburger${space}. Total calories: ${calories}.`;
  }

  if(secretAdded === true) {
    this.addSecretIngredient();
  }
}

const myHamburger = new Hamburger('classic', 600);

  myHamburger.addSecretIngredient();
  myHamburger.addTomato();
  myHamburger.addCheese();
  myHamburger.bite();
  myHamburger.bite();
  myHamburger.bite();
  console.log(myHamburger.info());














