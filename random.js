(function () {
  'use strict';

  // gives us random numbers from min to max inclusive on both ends
  let getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


  // tests the random number by repeatedly calling it with a range of 0 to 1 inclusive
  // and reporting the results
  function testRandom(attempts = 100) {
    let ndx = 0;
    let count1 = 0;

    for (; ndx < attempts; ndx++) {
      let val = getRandomNum(0, 1);
      count1 += val;
      console.log(`${ndx} - ${getRandomNum(0, 1)}`);
    }
    console.log(`We got ${count1}/ ${ndx}`);
  }

  testRandom(1000);
}());

