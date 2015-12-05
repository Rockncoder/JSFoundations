// try example

(function () {
  'use strict';

  try {
    console.log(1);
    throw "bogus";
    console.log(2);
  } catch(e) {
    console.log(3);
  } finally {
    console.log(4);
  }
  console.log(5);

}());