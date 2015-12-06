// promises example 2

(function () {
  'use strict';

   var getRandomNum = (min, max) => Math.random() * (max - min) + min;

  //
  function sometimesWorks() {
    // note: all this function does is return a promise
    // the promise returns immediately to the caller
    return new Promise(
      function (resolve, reject) {
        // number of milliseconds to delay
        let delay = getRandomNum(1000, 3000);
        // whether it is successful or not
        let worked = !!Math.floor(getRandomNum(0, 2));

        setTimeout(function(){
          if(worked){
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
    function (data) {
      console.info(data);
    },
    // if it fails it will come here
    function (err) {
      console.info(err);
    }
  );
  console.info('Back from promise land');

}());