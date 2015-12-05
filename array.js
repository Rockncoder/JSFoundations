// array example

(function () {
  'use strict';

  var junk = [1, 2, 3, 4, 'Alpha', 5, {name: 'Jason'}];
  var letters = ['A','B','C','D','E','F','G','H','I','J','K'];
  var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  console.log(nums);

  // forEach iterates over the array, once for each element, but there is no way to break out
  nums.forEach(function(elem, index, arr){
    console.log(index + ': ' + elem);
  });

  // map iterates over all of the elements and returns a new array with the same number of elements
  var nums2 = nums.map(function (elem) {
    return elem * 2;
  });
  console.log(nums2);

  // filter iterates over the array and returns a new array with only the elements that pass the test
  var nums3 = nums.filter(function (elem) {
    return elem % 2;
  });
  console.log(nums3);

  // reduce iterates over the array passing the previous value and the current element
  // it is up to you what the reduction does, let's concatenate the strings
  var letters2 = letters.reduce(function (previous, current ) {
    return previous + current;
  });
  console.log(letters2);

  // reduceRight does the same but goes from right to left
  var letters3 = letters.reduceRight(function (previous, current ) {
    return previous + current;
  });
  console.log(letters3);

  // every makes sure that every element matches the expression
  var isEveryNumbers = junk.every(function(elem){
    return typeof elem === 'number'
  });
  console.log('Are all members of junk numbers: '+ isEveryNumbers);

  // some makes sure at least one element matches the expression
  var areSomeNumbers = junk.some(function(elem){
    return typeof elem === 'number'
  });
  console.log('Are some members of junk numbers: '+ areSomeNumbers);

  // write code which iterates over the array, junk and sums up only the numbers
  // use the array methods

}());
