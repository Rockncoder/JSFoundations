//

(function () {
  'use strict';

  var arr1 = [1, 2, 3, 4];
  var obj1 = {
    show1a: function () {
      console.info("Hi from show1a");
    }
  };

  function foo(thing1, thing2){
    if(this && this.money){
      console.info("Money = " + this.money);
      console.info("thing1 = " + thing1 + ", thing2 = " + thing2)
    } else {
      console.info("You've got no money!");
    }
  }

  function sum(){
    if(arguments.length > 0){
      foo.apply({money: "$999"}, arguments);
    }
    var ndx, sum = 0;
    for(ndx = 0; ndx < arguments.length; ndx += 1){
      if(typeof arguments[ndx] === 'number'){
        sum += arguments[ndx];
      }
    }
    return sum;
  }

  arr1.show = function(){
    console.info("Hello arr1 show");
  };

  function Point(x, y) {
    // this is a context which refers
    this.x = x;
    this.y = y;
  }

  Point.prototype.calc = function(){
    return x + y;
  }


  function show1() {
    console.info("Hi from show1");
  }

  show1.showbiz = function(){
    console.info("Hello from showbiz");
  };

  show1.showbiz();

  arr1.show();
  obj1.show1a();  // invoking a function method
  show1();


  // four ways to call a function

  show1();        // invoke as a function
  obj1.show1a(); // invoke as a method
  var myPoint = new Point(50, 100); // constructor

  foo.call({money: "$100"}, "apple", "banana");
  var arr2 = ["mango","durazno"];
  foo.apply({money: "$100"}, arr2);


  var total = sum(10, 20, 30, 40, 100);
  //console.info("Total = " + total);

  //var bob = 13;
  //// default operator
  //var weeks = bob || 52;
  //
  //
  //console.log("Bob's weeks = " + weeks);

  // invoking functions

  // return values from function

  // scope

  // the this keyword


  // call & apply


  // closures


}());