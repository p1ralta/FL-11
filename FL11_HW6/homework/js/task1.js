
let a1, a2, b1, b2, c1, c2;
const deno = 2; 
const pattern = /^\s*$/;;

do {
  a1 = prompt('Enter a1 coordinate', '');
  if (isNaN(a1)) {
    alert('Only numbers please');
  }else if(pattern.test(a1)){
    alert('Empty string');
  }
} while (isNaN(a1) || pattern.test(a1));

do {
  a2 = prompt('Enter a2 coordinate', '');
  if (isNaN(a2)) {
    alert('Only numbers please');
  }else if(pattern.test(a2)){
    alert('Empty string');
  }
} while (isNaN(a2) || pattern.test(a2));

do {
  b1 = prompt('Enter b1 coordinate', '');
  if (isNaN(b1)) {
    alert('Only numbers please');
  }else if(pattern.test(b1)){
    alert('Empty string');
  }
} while (isNaN(b1) || pattern.test(b1));

do {
  b2 = prompt('Enter b2 coordinate', '');
  if (isNaN(b2)) {
    alert('Only numbers please');
  }else if(pattern.test(b2)){
    alert('Empty string');
  }
} while (isNaN(b2) || pattern.test(b2));

do {
  c1 = prompt('Enter c1 coordinate', '');
  if (isNaN(c1)) {
    alert('Only numbers please');
  }else if(pattern.test(c1)){
    alert('Empty string');
  }
} while (isNaN(c1) || pattern.test(c1));

do {
  c2 = prompt('Enter c2 coordinate', '');
  if (isNaN(c2)) {
    alert('Only numbers please');
  }else if(pattern.test(c2)){
    alert('Empty string');
  }
} while (isNaN(c2) || pattern.test(c2));

if(+c1 === (+a1 + +b1)/deno && +c2 === (+a2 + +b2)/deno) {
  console.log(true);
}else{
  console.log(false);
}



