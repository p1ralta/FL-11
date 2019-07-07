let a = +prompt('Enter A length', '');
let b = +prompt('Enter B length', '');
let c = +prompt('Enter C length', '');

if (a > b+c || b > a+c || c > a+b || a<=0 || b<=0 || c<=0 || isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Triangle doesn't exist");
 }else if(a === b && b === c && c === a) {
  console.log('Equivalent triangle');
 }else if(a === b || b === c || c === a) {
  console.log('Isosceles triangle');
 }else{
  console.log('Normal triangle');
 }