function pipe(a) {
  let total = a;
  for(let i = 1; i < arguments.length; i++) {
    total = arguments[i](total);
  }
  return total;
}

pipe(); 