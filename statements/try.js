// try example

(function () {
  'use strict';

  try {
    console.log(1);
    throw "bogus";
    console.log(2);
  } catch (e) {
    console.log(3);
  } finally {
    console.log(4);
  }
  console.log(5);

  if (typeof navigator["geolocation"] !== "undefined") {
    console.info("We have geolocation");
  } else {
    console.info("We don't have geolocation");
  }

}());