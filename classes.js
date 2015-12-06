// constructor pattern example

function Vehicle(name, numOfWheels, numOfCylinders){
  this.name = name;
  this.numOfWheels = numOfWheels;
  this.numOfCylinders = numOfCylinders;
}

Vehicle.prototype.toString = function(){
  return this.name + ' has ' + this.numOfWheels + ' wheels';
}


var myCar = new Vehicle('Edge', 4, 6);
var myMotorcycle = new Vehicle('Ninja', 2, 4);

console.info(myCar.toString());
console.info(myMotorcycle.toString());

