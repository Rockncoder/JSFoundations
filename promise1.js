// promises example 2

(function () {
  'use strict';

  let getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  //
  function sometimesWorks() {
    // note: all this function does is return a promise
    // the promise returns immediately to the caller
    return new Promise(
      function (resolve, reject) {
        // number of milliseconds to delay
        let delay = getRandomNum(1000, 3000);

        setTimeout(function () {
          // 50/50 give me either 0 or 1, then convert to binary true/false
          let worked = !!getRandomNum(0, 1);
          if (worked) {
            resolve('It worked!');
          } else {
            reject('It failed');
          }
        }, delay);
      });
  }

  // call our function which returns a promise and sometimes works
  sometimesWorks().then(
    // if it is successful, it will come here
    (data) => console.info(data),

    // if it fails it will come here
    (err) => console.info(err)
  );
  console.info('Back from promise land');

}());