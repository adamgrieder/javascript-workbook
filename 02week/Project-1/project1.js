//length of array//
function arr() {
  var cars = ['ford', 'chevy', 'honda', 'toyota'];
  return cars.length;
  }
  arr();

  //concat//
  function arr() {
    var cars = ['ford', 'chevy', 'chystler', 'toyota'];
    var morecars = ['porsche', 'mercedes', 'audi', 'honda']
    var totalcars = cars.concat(morecars);
    return totalcars;
  }
  arr();

  //indexOf//
  var car = ['honda', 'toyota', 'ford'];
    car.indexOf('honda');


  //Join//
    var totalcars = ['ford', 'chevy', 'chystler', 'toyota', 'porsche', 'mercedes', 'audi', 'honda'];
     totalcars.join();

//reverse//
  var a = ['ford', 'chevy', 'chystler', 'toyota', 'porsche', 'mercedes', 'audi', 'honda'];
  a.reverse();

//sort//
var a = [ 'honda', 'audi', 'mercedes', 'porsche', 'toyota', 'chystler', 'chevy', 'ford'];
a.sort();

//slice//
var a = [ 'honda', 'audi', 'mercedes', 'porsche', 'toyota', 'chystler', 'chevy', 'ford'];
var sliced = a.slice[1, 8];

console.log(a);
console.log(sliced);

//splice//
var a = [ 'honda', 'audi', 'mercedes', 'porsche', 'toyota', 'chystler', 'chevy', 'ford'];
a.splice(2, 4);

//push//
var a = ['audi', 'mercedes', 'porsche', 'toyota', 'chystler', 'chevy'];
a.push(honda,ford);

//pop//
var a = ['ford', 'chevy', 'chystler', 'toyota', 'porsche', 'mercedes', 'audi', 'honda'];
a.pop();

//shift//
var a = ['ford', 'chevy', 'chystler', 'toyota', 'porsche', 'mercedes', 'audi', 'honda'];
a.shift();

//unshift//
  var a = ['ford', 'chevy', 'chystler', 'toyota', 'porsche', 'mercedes', 'audi', 'honda'];
a.unshift('cadillac');

//forEach//
var numbers = ['23', '45', '0', '2']

numbers.forEach(function(element) {
    console.log(element);
});
