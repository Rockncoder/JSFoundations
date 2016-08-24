// constructor pattern example

// when we say, new Vehicle
// the new operator creates a empty object, {}
// and passes to the this of the function
function Vehicle(name, numOfWheels){
  this.name = name;
  this.numOfWheels = numOfWheels;
}

Vehicle.prototype.toString = function(){
  return this.name + ' has ' + this.numOfWheels + ' wheels';
}

var myCar = new Vehicle('Edge', 4);
var myMotorcycle = new Vehicle('Ninja', 2);

console.info(myCar.toString());
console.info(myMotorcycle.toString());

