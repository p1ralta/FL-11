function create(proto) {
  function F() {
    return undefined;
  }
  F.prototype = proto;
  let object = new F();
  return object;
}

