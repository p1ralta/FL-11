function assign() {
  let newObj = {};
  for(let i=0; i < arguments.length; i++) {
    let obj = arguments[i];
    for(let item in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, item)) {
        newObj[item] = obj[item];
      }
    }
  }
  return newObj;
}





