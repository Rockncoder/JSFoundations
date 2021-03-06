// hoisting example
(function () {
  'use strict';

  // global num declaration and definition
  var num = 56;

  function calculateSomething() {
    const PI = 3.1459;

    var num;  // hoisting actually defines num at the top of the function
    // the global value is hidden by the local num
    console.info(num);

    var num = 12;
    console.info(num);
  }

  calculateSomething();
}());
