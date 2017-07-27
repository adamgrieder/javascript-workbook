//#1 for Loop carsinreverse//
var cars = ['ford', 'chevy', 'chystler', 'toyota', 'porsche', 'mercedes', 'audi', 'honda'];
function loops() {
  for (var reverse in cars) {
    console.log(cars[reverse]);
  }
}
loops();

//#2 for...in loop//
var obj = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 15, 1925',
  gender: 'female'
}

  for (var info in obj) {
    console.log(obj[info]);
  }

 for (var bday in obj) {
   if (bday === "birthDate") {
console.log(obj[bday]);
 }
 }

//#3 while loops//
x=0;
while(x < 1000) {
  console.log(x);
   x++;
}

//#4 do..while loop//
x=0;
do {
  console.log(x);
  x++;
}
while(x <= 1000);
  

console.log(num);
