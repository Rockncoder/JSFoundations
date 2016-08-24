// array examples

(function () {
  'use strict';

  let junk = [1, 2, 3, 4, 'Alpha', 5, {name: 'Jason'}];
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  console.log(nums);

  //
  function argsToArray(){
    return Array.prototype.slice.call(arguments);
    return Array.from(arguments);
  }

  let myArray = argsToArray(1,2,3,4,5);
  console.log(myArray);

  // forEach iterates over the array, once for each element, but there is no way to break out
  nums.forEach(function (elem, index, arr) {
    console.log(index + ': ' + elem);
  });

  // map iterates over all of the elements and returns a new array with the same number of elements
  let nums2 = nums.map((elem) => elem * 2);
  console.log(nums2);

  // filter iterates over the array and returns a new array with only the elements that pass the test
  let nums3 = nums.filter((elem) => !!(elem % 2));
  console.log(nums3);

  // reduce iterates over the array passing the previous value and the current element
  // it is up to you what the reduction does, let's concatenate the strings
  let letters2 = letters.reduce((previous, current) => previous + current);
  console.log(letters2);

  // reduceRight does the same but goes from right to left
  let letters3 = letters.reduceRight((previous, current) => previous + current);
  console.log(letters3);

  // every makes sure that every element matches the expression
  let isEveryNumbers = junk.every((elem) => typeof elem === 'number');
  console.log('Are all members of junk numbers: ' + isEveryNumbers);

  // some makes sure at least one element matches the expression
  let areSomeNumbers = junk.some((elem) => typeof elem === 'number');
  console.log('Are some members of junk numbers: ' + areSomeNumbers);

  // write code which iterates over the array, junk and sums up only the numbers
  // use the array methods

  let junkSum = junk.reduce((previous, current) => {
    if (typeof current === 'number') {
      previous += current;
    }
    return previous;
  }, 100);
  console.info("Junk sum = " + junkSum);

  // using the array, nums, sum the values of all numbers which are
  // multiples of 3 or 5

  let fizzBuzz = nums.reduce((previous, current) => {
    if (current % 3 == 0 || current % 5 == 0) {
      previous += current;
    }
    return previous;
  }, 0);

  console.info("Fizzbuzz = " + fizzBuzz);

  // write a map function which translates the nums array to the
  // modulo 6 of each number in the array
  // then display the array
  let mod6 = nums.map((elem) => elem % 6);
  console.log(mod6);
}());





