//

(function () {
  'use strict';


  var arr1 = [1, 2, 3, 4];
  var obj1 = {
    show1a: function () {
      console.info("Hi from show1a");
    }
  };

  function foo(thing1, thing2) {
    if (this && this.money) {
      console.info("Money = " + this.money);
      console.info("thing1 = " + thing1 + ", thing2 = " + thing2)
    } else {
      console.info("You've got no money!");
    }
  }

  function sum() {
    var ndx, sum = 0;
    for (ndx = 0; ndx < arguments.length; ndx += 1) {
      var val = arguments[ndx];
      if (typeof val === 'number' && !(val % 2)) {
        sum += val;
      }
    }
    return sum;
  }

  arr1.show = function () {
    console.info("Hello arr1 show");
  };

  function Point(x, y, func) {
    // this is a context which refers
    this.x = x;
    this.y = y;
    this.speak = func;
  }

  Point.prototype.calc = function () {
    return x + y;
  }


  function show1() {
    console.info("Hi from show1");
  }

  show1.showbiz = function () {
    console.info("Hello from showbiz");
  };

  show1.showbiz();

  arr1.show();
  obj1.show1a();  // invoking a function method
  show1();


  // four ways to call a function

  show1();        // invoke as a function
  obj1.show1a(); // invoke as a method
  var myPoint = new Point(50, 100, function () {
    console.info("Bananas are tasty");
  }); // constructor
  var myPoint2 = new Point(50, 100, function () {
    console.info("Apples are better");
  }); // constructor

  function generalSpeak() {
    console.info("Eat lots of veggies");
  }

  var myPoint3 = new Point(5, 1000, generalSpeak); // constructor
  var myPoint4 = new Point(550, 750, generalSpeak); // constructor


  // using call and apply
  // call takes a "this" and parameters to pass
  foo.call({money: "$100"}, "apple", "banana");

  // apply takes a "this" and
  var arr2 = ["mango", "durazno"];
  foo.apply({money: "$999"}, arr2);

  // the this context and arguments
  var total = sum(10, 20, 30, 40, 100);
  console.info("Total = " + total);
  var total2 = sum(false, 10, 20, "banana", 30, 40, 100, {}, [10, 20, 30]);
  console.info("Total = " + total2);

  // sidebar: the default operator
  var bob = 13;
  // if bob is falsy, it will take the right side of the OR
  var weeks = bob || 52;
  console.log("Bob's weeks = " + weeks);


  // rewrite the sum function to convert the arguments list
  // to an array, then filter the array to only include number
  // then sum the numbers
  // call the function coolSum
  // hint #1: Array.from

  function coolSum() {
    var args = Array.from(arguments).filter((elem) => typeof elem === 'number');
    return args.reduce((previous, current) => previous + current, 0);

    // return Array.from(arguments)
    //   .filter((elem) => typeof elem === 'number')
    //   .reduce((previous, current) => previous + current, 0);
  }

  function coolSumEvensOnly() {
    return Array.from(arguments).
    filter((elem) => typeof elem === 'number' && !(elem % 2)).
    reduce((previous, current) => previous + current, 0);
  }


  console.info("*******************************************");
  console.info('Total = ' + coolSum(5, 10, 15, 20, 'hippo', 'rhino', 50));
  console.info('Total = ' + coolSum());

  // return values from function


  // scope

  // the this keyword


  // call & apply

  console.info("*******************************************");

  // closures
  function addX(num) {
    return function (x) {
      return num + x;
    }
  }

  var add10 = addX(10);
  console.info(add10(25));
  var add50 = addX(50);
  console.info(add50(40));
  console.info(add10(5));

  // first create a modulo function factory
  // then create an isEven function from it

  function moduloMaker(num) {
    return function (x) {
      return (x % num) === 0;
    }
  }

  var isEven = moduloMaker(2);
  [1, 2, 3, 4, 5, 6, 7, 8].forEach(function (elem) {
    console.info("Is even " + elem + " = " + isEven(elem));
  });

  [1, 2, 3, 4, 5, 6, 7, 8].forEach(
    (elem) => console.info("Is even " + elem + " = " + isEven(elem))
  );

  var mod6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (elem) {
    return elem % 6;
  });

  var mod6b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
    (elem) => {
      return elem % 6
    }
  );

  console.log(mod6);


}());













