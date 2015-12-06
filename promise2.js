// promises example 2

(function () {
  'use strict';

  //
  function httpGet(url) {
    // note: all this function does is return a promise
    // the promise returns immediately to the caller
    return new Promise(
      function (resolve, reject) {
        // create a new http request object
        let request = new XMLHttpRequest();
        // add a listener to monitor it
        request.addEventListener('load', function() {
          // status = 200, means all is ok
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error(this.statusText));
          }
        });
        request.onerror = function () {
          reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        }
        // our HTTP verb is 'GET', other options are post, put, delete, etc.
        request.open('GET', url);
        // executes the request
        request.send();
      });
  }

  function success(data){

  }

  // call the http get method -> you will probably need to allow cross-origin support

  var myPromise = httpGet('http://fast-ocean-4426.herokuapp.com/api/quiz');

  myPromise["then"](
    // if it is successful, it will come here
    function (data) {
      console.info(JSON.stringify(data));
    },
    // if it fails it will come here
    function (err) {
      console.error(err);
    }
  );
  console.info("Back from promise land");

}());