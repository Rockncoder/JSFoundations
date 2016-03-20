// examples of loops

(function () {
  'use strict';

  var ndx, key, val;
  var whileCount = 0;
  var doWhileCount = 0;
  var myObj = {
    firstName: 'Troy',
    lastName: 'Miles',
    handle: 'the rockncoder'
  };

  for (ndx = 0; ndx < 10; ndx += 1) {
    console.info('ndx = ' + ndx);
  }

  //whileCount = 10;
  while (whileCount < 10) {
    console.info('whileCount = ' + whileCount);
    whileCount++;
  }

  //doWhileCount = 10;
  do {
    console.info('doWhileCount = ' + doWhileCount);
    doWhileCount++;
  } while (doWhileCount < 10)

  // to see the difference between while and do/while - set the counter to 10 before the loop

  function printObj(obj) {
    for (key in obj) {
      val = obj[key];
      console.info(key + ' = ' + val);
    }
  }

  printObj(myObj);

  // let's add a function to our object, this is JS we can do that
  myObj.sayHello = function (name) {
    console.info('Hello ' + name);
  };

  // why does this function call fail now?
  printObj(myObj);

  JSON.stringify(myObj);

  console.info("For Loop");
  for (ndx = 0; ndx < 21; ndx += 2) {
    console.info(ndx);
  }


  console.info("While Loop");
  ndx = 10
  while (ndx >= 1) {
    console.info(ndx);
    ndx -= 1;
  }

}());


// lab: write a for loop to print the numbers 0 to 20 by two

// lab: write a while loop to print the 10 to 1 decrementing down