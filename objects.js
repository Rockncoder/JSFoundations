//
"use strict";

function delMe (){

  console.info("Hello delMe");
}

delMe();


(function () {
  'use strict';

  // object creator function
  function object(parent) {
    function F() {
    }

    F.prototype = parent;
    return new F();
  }

  var url = "http://www.kbb.com/sss/ttt?search=challenger";
  // this is identical to...
  var obj1 = {};
  // this but this is preferred due to its simplicity
  var obj2 = {
    // only access with bracket notation
    "http://www.kbb.com/sss/ttt?search=challenger": {
      "year": 2016,
      "model": "Cobra"
    },
    // can access with either dot or bracket
    sayHello: function (name) {

      console.info("Hello " + name + ", alpha = " + this.alpha);
    },
    alpha: 1,
    beta: 2
  };


  // we can augment objects dynamically
  // here we use bracket notation
  obj2[url] = {
    "year": 2016,
    "model": "Challenger",
    "make": "Dodge"
  };

  // here we use dot notation
  obj2.frisbee = "Fun!";

  // we can also add functions dynamically
  obj2.hiMatt = function () {
    console.info("Hi Matt");
  };

  obj2.sayHello("Troy");
  obj2.hiMatt();

  var key1 = false ? "alpha" : "beta";
  var results = obj2[key1];
  console.info("Results = " + results);


  // let's use prototypal inheritance to inherit from obj2
  var obj3 = object(obj2);

  obj2.delta = 3;
  // obj3 has delta now too since obj2 is its prototype
  console.info(obj3.delta);
  // but if I change obj3's delta it doesn't change obj2's delta
  obj3.delta = "three";
  console.info("obj2.delta = " + obj2.delta);
  console.info("obj3.delta = " + obj3.delta);

  // now display the value for the url
  //console.info(obj3[url]);

  obj3.yoyo = "Duncan";
  // delete removes properties from objects
  delete obj3.yoyo;


  var keyz, valz;

  for (keyz in obj3) {
    valz = obj3[keyz];
    if (obj3.hasOwnProperty(keyz)) {
      if (typeof valz == 'string') {
        console.info("Should not print");
      }
    }
  }

  var obj2String = JSON.stringify(obj2);
  console.info(obj2String);
  var newObj = JSON.parse(obj2String);
  console.info(newObj.alpha);

  console.info('*************************************');
  function extend(dst, src){
    var srcKey, srcVal;

    for (srcKey in src) {
      srcVal = src[srcKey];
      if (src.hasOwnProperty(srcKey) && typeof dst[srcKey] === "undefined") {
        dst[srcKey] = srcVal;
      }
    }
  }

  var obj4 = object({alpha: 0, beta: "0"});
  extend(obj4, obj2);

  console.info('*************************************');
  console.info(JSON.stringify(obj4));

}());

// lab: create extend(dst, src);
// copy the owned properties from the source to the destination
// don't copy a property if it already exists on the destination
// copy the properties on the source that the destination doesn't have
// clue: there is one minor trap to work around

