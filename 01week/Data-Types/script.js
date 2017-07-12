//Date//
function getDate() {
  return new Date();
}
//String to Number//
function convertToString(num){
 return num.toString();
}

//adding 2 numbers//
function add2nums (x, y) {
  return x + y;
}
//type of function//
function type (x) {
  return typeof (x);
}
//both are true//
function true2 (x) {
  if (x > 1 && x < 10) {
    console.log('both true');
  }
}
//1 of 2 things is true//
function true1 (x) {
  if (x > 10 || x > 20) {
    console.log('only one is true');
  }
}
//both not true//
function false1 (x) {
  if (x > 1 && x < 1) {
    console.log('both are false');
  }
}
getDate();
convertToString(12345);
