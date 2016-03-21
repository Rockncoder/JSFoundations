// constructor pattern example

// when we say, new Vehicle
// the new operator creates a empty object, {}
// and passes to the this of the function
function Vehicle(name, numOfWheels, numOfCylinders){
  this.name = name;
  this.numOfWheels = numOfWheels;
  this.numOfCylinders = numOfCylinders;

}

Vehicle.prototype.id = function(){

};

Vehicle.prototype.toString = function(){
  return this.name + ' has ' + this.numOfWheels + ' wheels';
}


var myCar = new Vehicle('Edge', 4, 6);
var myMotorcycle = new Vehicle('Ninja', 2, 4);

console.info(myCar.toString());
console.info(myMotorcycle.toString());

var arr1 = [1, 2,3, 5];
console.info(myCar instanceof Vehicle);
console.info(typeof arr1 );

