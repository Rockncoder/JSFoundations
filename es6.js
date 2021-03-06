// es6 examples
(function () {
    'use strict';
    // Template Strings
    // a template string is indicated by the use of enclosing backticks ` and ${}
    // the ${} is a template and the value of the expression inside of it replaces the template
    var state = 'California';
    var city = 'Long Beach';
    console.info("This weekend's workshop is in " + city + ", " + state + ".");
    // template strings can run simple expressions like addition
    var cup_coffee = 4.5;
    var cup_tea = 2.5;
    console.info("coffee: $" + cup_coffee + " + tea: $" + cup_tea + " = $" + (cup_coffee + cup_tea) + ".");
    // they can allow us to create multi-line strings
    console.info("This is line #1.\nthis is line #2.");
    // Arrow/lambda functions
    // arrow functions are syntactic sugar for the anonymous function you already know and love
    var anon_func = function (num1, num2) {
        return num1 + num2;
    };
    console.info("Anonymous func: " + anon_func(1, 2));
    var arrow_func = function (num1, num2) { return num1 + num2; };
    console.info("Arrow func: " + arrow_func(3, 4));
    // let
    // let allows us to create a block scoped variables
    // they live and die within the curly braces
    var val = 2;
    console.info("val = " + val);
    {
        var val_1 = 59;
        console.info("val = " + val_1);
    }
    console.info("val = " + val);
    // const
    // const creates a variable which can't be changed once set
    var name = 'Troy';
    console.info("My name is " + name);
    // the line below triggers a type error
    //name = 'Miles';
    // array.from
    // array.from has a lot of different uses
    // create an array from - supply the length in an object and arrow
    // like other array method it is passed an element and an index, but element is undefined
    // let instantArr = Array.from({length: 20}, (elem, index) => index + 1);
    // console.info(instantArr);
    // make an array from a string
    // let pirateArray = Array.from("happy pirates");
    // console.info(pirateArray);
    //
    // // for of lets us iterate over an array
    // for (let elem of pirateArray) {
    //   console.info(elem);
    // }
    //
    // // if we want the element and its index we can get it too
    // for (let [index, elem] of pirateArray.entries()) {
    //   if (index === 5) {
    //     break;
    //   }
    //   console.info(`${index}. ${elem}`);
    // }
    // unlike forEach, continue and break work
    // for (let [index, elem] of pirateArray.entries()) {
    //   if (index === 5) {
    //     continue;
    //   }
    //   console.info(`${index}. ${elem}`);
    // }
    // break stop iterating and resumes processing on the line after the loop
    // continue stops process of the current loop iteration
    // Default values
    // we can now give functions parameters default values
    var add = function (x, y) {
        if (x === void 0) { x = 1; }
        if (y === void 0) { y = 2; }
        return x + y;
    };
    console.info(add(10));
    // Destructuring
    // allows us to extract values from objects and arrays
    // destructuring an object
    {
        var obj = { firstName: 'Troy', lastName: 'Miles' };
        var f = obj.firstName, l = obj.lastName;
        console.info("My names is: " + f + " " + l);
    }
    //
    // {
    //   let [firstLetter, secondLetter] = pirateArray;
    //   console.info(`First letter = ${firstLetter}, second letter = ${secondLetter}`);
    // }
}());
// lab: count from 1 to 10 in a loop use an arrow function to render to the console. 
//# sourceMappingURL=es6.js.map