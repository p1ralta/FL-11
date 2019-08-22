// Task 1
function maxElement(arr) {
  return Math.max(...arr);
}

// Task 2
function copyArray(arr) {
  return [...arr];
}

// Task 3
function addUniqueId(obj) {
  const newObj = {...obj};
  const id = Symbol('id');
  newObj[id] = 12345;
  return newObj;
}

// Task 4
function regroupObject(obj) {
  let{name, details} = obj;
  let{university, ...user} = {name, ...details};
  let{firstName, id, age} = user;

  firstName = name;
  user = {age, firstName, id};
  
  return {university, user};
}

// Task 5
function findUniqueElement(arr) {
 return [...new Set(arr)];
}

// Task 6
function hideNumber(num) {
  const fourDigits = num.slice(-4);
  return fourDigits.padStart(num.length, '*');
}

// Task 7
function add(a = 0, b = 0) {
  if(a === 0 || b === 0) {
    throw Error('Missing property as required');
  }
  return a + b; 
}

// Task 8
function showNames1(url) {
  fetch(url)
  .then((res) => res.json())
  .then((users) => {
    users.sort((a, b) => a.name.localeCompare(b.name));
    users.forEach((user) => console.log(user.name));
  });
}

// Task 9
async function showNames2(url) {
  let res = await fetch(url);
  const users = await res.json();
  users.sort((a, b) => a.name.localeCompare(b.name));
  users.forEach((user) => console.log(user.name));
}
