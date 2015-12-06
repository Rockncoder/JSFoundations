
var myApi = (function () {
  var al = 1;
  var theCount = 100;
  return {
    alpha: alpha,
    counter: counter,
    beta: 'two',
    then: banana
  };

  function alpha(){
    return al;
  }

  function counter(){
    return theCount++;
  }
  //
  function banana(name) {
    console.log('Hello ' + name + ', from then');
  }

}());


console.info('The count is ' + myApi.counter());

console.info('The count is ' + myApi.counter());

console.info('The count is ' + myApi.counter());