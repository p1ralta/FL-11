const num1 = 1, 
num2 = 2, 
num3 = 3, 
num5 = 5,
num8 = 8,
num1000 = 1000, 
num60 = 60, 
num24 = 24, 
num365 = 365,
num18 = 18;


function getNumbers(str) {
  const arr = [];
  for(let i = 0; i < str.length; i++) {
    if(parseInt(Number(str[i])) === Number(str[i])) {
      arr.push(Number(str[i]));
    } 
  }
  return arr;
}
console.log(getNumbers('n1um3ber95'));


function findTypes() {
  const obj = {};
  for(let i = 0; i < arguments.length; i++) {
    obj[typeof arguments[i]] = (obj[typeof arguments[i]] || 0) + num1; 
  } 
  return obj;
}
console.log(findTypes(null, num5, 'hello'));


function executeforEach(a, b) {
  for(let i = 0; i < a.length; i++) {
     b(a[i]);
  } 
}
executeforEach([num1,num2,num3], function(el) { 
  console.log(el);
});


function mapArray(a, b){
  const newArr = [];
  executeforEach(a, function(e){
    newArr.push(b(e));
  });
  return newArr;
} 
console.log(mapArray([num2, num5, num8], function(el) { 
  return el + num3;
}));


function filterArray(a, b){
  const newArray = [];
  executeforEach(a, function (e) {
    if(b(e)){
        newArray.push(e);
    }
  });
  return newArray;
} 
console.log(filterArray([num2, num5, num8], function(el) { 
  return el > num3 
}));


function showFormattedDate(e) {
  const arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const year = e.getFullYear();
  const month = arr[e.getMonth()];
  const day = e.getDate();
  return `Date: ${month} ${day} ${year}`;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));


function canConvertToDate(e) {
  const date = new Date(e);
  if(date.toString() === 'Invalid Date') {
    return false;
  }else{
    return true;
  }
}
console.log(canConvertToDate('2016-13-18T00:00:00'));


function daysBetween(a, b) {
  const time = Math.abs(b.getTime() - a.getTime());
  const days = Math.ceil(time / (num1000 * num60 * num60 * num24)); 
  return days;
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));


const data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor':'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];


function getAmountOfAdultPeople(data) {
  const filterData = filterArray(data, function (e) {
  const birthday = new Date(e[' birthday ']);
  const date = new Date();
  const age = daysBetween(birthday, date);
    return age/num365 > num18;
});
  return filterData.length;
} 
console.log(getAmountOfAdultPeople(data));


function keys(obj) {
  const newArr = [];
  for(let item in obj) {
    if(obj.hasOwnProperty(item)) {
        newArr.push(item);
    }
  }
  return newArr;
}
console.log(keys({keyOne: num1, keyTwo: num2, keyThree: num3}));


function values(obj) {
  const newArr = [];
  for(let itemValue in obj) {
    if(obj.hasOwnProperty(itemValue)) {
        newArr.push(obj[itemValue]);
    }
  }
  return newArr;
}
console.log(values({keyOne: num1, keyTwo: num2, keyThree: num3})); 