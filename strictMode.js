// strict mode example
'use strict';


// unintentional global creation
//bob = "monocles";

// this is a function constructor
function Point(x, y){
  this.x = x;
  this.y = y;
}

// if new is forgotten this will be undefined resulting in a Type Error
var myPoint = Point(10, 20);

// can't have duplicate parameters
function sameParams(param1, param1){
  console.log('Should be an error in the parameters');
}

// question: Why is the dupe parameter error found before the 'new' error, when both enabled?