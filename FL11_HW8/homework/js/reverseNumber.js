function reverseNumber(a) {
  var reverse = 0;
  let bool = false;
  if(a < 0) {
      a = 0 - a;
      bool = true;
    }
  while(a > 0) {
    reverse = (reverse * 10) + (a % 10);
    a = Math.floor(a / 10);
  }
  if(bool === true) {
      reverse = 0 - reverse;
    }
  return reverse;
}

reverseNumber(123);