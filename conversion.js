// conversion example

(function () {
  'use strict';

  var totalInt = '100';
  var totalExact = '100.45';
  var total = 100;

  // convert a string to an integer use parseInt(), include a radix!!!
  var myIntTotal = parseInt(totalExact, 10);
  console.info('myIntTotal = ' + myIntTotal);

  // convert a string to a floating point use parseFloat()
  var myFloatTotal = parseFloat(totalExact);
  console.info('myFloatTotal = ' + myFloatTotal);

  // to convert a number to a string simply concat an empty string
  var myString = total + '';
  console.info('myString = ' + myString);

  var myIntShort = + totalInt;
  console.info('myIntShort typeof ' + (typeof myIntShort));

  var val1 = 120;
  var val2 = 240;

  // convert the sum of val1 + val2 to a string assigned to var str1
  // use console.info to display the string and its type

}());










