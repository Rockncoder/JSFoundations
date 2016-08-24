(function () {
  "use strict";

  // 1: call it as a function
  function globalFunc() {
    // points to the global object or undefined under strict mode
    return this;
  }
  var globalThis = globalFunc();


  // 2: call it as a method of an object
  var anObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    objMethod: function () {
      return this;
    }
  };
  var objectThis = anObject.objMethod();
  console.log(JSON.stringify(objectThis));


  // 3: Invoke it as a function constructor:
  function ConstructorFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
    this.aMethod = function(){};
  }

  ConstructorFunction.prototype.aMethod = function(){};

  // This	creates a new object
  var constructObj = new ConstructorFunction("John", "Doe");
  console.log(JSON.stringify(constructObj));


  // 4: Invoke it using a function method

}());