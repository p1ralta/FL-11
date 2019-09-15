class User {
  constructor(name, orderTotalPrice, weekendDiscount, nightDiscount) {
    this.name = name;
    this.orderTotalPrice = orderTotalPrice;
    this.weekendDiscount = weekendDiscount;
    this.nightDiscount = nightDiscount;
    this.bonus = 0;
    this.count = 0;
  }

  makeOrder() {
    if (this.count < 2) {
      return `Price after discount and including bonuses is' ${this.orderTotalPrice - this.bonus}`;
    }
    return `${this.name} has already got discount`;
  }
}

function getDiscount(obj) {
  const user = obj;
  const date = new Date();
  const night = date.getHours() >= 23 || date.getHours() < 6;
  const weekend = date.getDay() === 6 || date.getDay() === 0;
  const nightDiscount = (obj.orderTotalPrice * obj.nightDiscount) / 100;
  const weekendDiscount = (obj.orderTotalPrice * obj.weekendDiscount) / 100;

  weekend ? user.orderTotalPrice = obj.orderTotalPrice - weekendDiscount : user.weekendDiscount = 0;
  night ? user.orderTotalPrice = obj.orderTotalPrice - nightDiscount : user.nightDiscount = 0;

  user.count += 1;
}

function setBonus(obj) {
  const user = obj;
  user.bonus = ((user.orderTotalPrice / 100) * 5);
}

const person = new User('Person', 1000, 15, 10);
person.makeOrder();
setBonus(person);
getDiscount(person);
person.makeOrder();
