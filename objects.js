
//

(function () {
  'use strict';

  // object creator function
  function object(parent){
    function F() {}
    F.prototype = parent;
    return new F();
  }

  var url = "http://www.kbb.com/sss/ttt?search=challenger";
  // this is identical to...
  var obj1 = new Object(); // = {};
  // this but this is preferred due to its simplicity
  var obj2 = {
    // only access with bracket notation
    "http://www.kbb.com/sss/ttt?search=mustang": {
      "year":2016,
      "model":"Cobra"
    },
    // can access with either dot or bracket
    sayHello: function(name){
      console.info("Hello " + name);
    },
    alpha: 1,
    beta: 2
  };

  // we can augment objects dynamically
  // here we use bracket notation
  obj2[url] =  {
    "year":2016,
    "model":"Challenger",
    "make":"Dodge"
  };

  // here we use dot notation
  obj2.frisbee = "Fun!";

  // we can also add functions dynamically
  obj2.hiMatt = function(){
    console.info("Hi Matt");
  };

  obj2.sayHello("Troy");
  obj2.hiMatt();

  var key1 = false? "alpha": "beta";
  var results = obj2[key1];
  console.info("Results = " + results);


  // let's use prototypal inheritance to inherit from obj2
  var obj3 = object(obj2);

  obj2.delta = 3;

  // now display the value for the url
  console.log(obj3[url]);

  obj3.yoyo = "Duncan";

  delete obj3.yoyo;


  var keyz, valz;

  for(keyz in obj3){
    valz = obj3[keyz];
    if(obj3.hasOwnProperty(keyz)) {
      if (typeof valz == 'string') {
        console.info("Should not print");
      }
    }
  };


  debugger;



}());