var myApi = (function () {
  // var delta = function () {
  //   console.info("Hi I am Delta");
  // };

  var al = 1;
  var theCount = 100;
  return {
    alpha: alpha,
    counter: counter,
    beta: 'two',
    speak: speak,
    //delta: delta
    showName: showName
  };

  function alpha() {
    return al;
  }

  function counter() {
    return theCount++;
  }

  //
  function speak(name) {
    console.info('Hello ' + name + ', from then');
  }

  function showName(firstName, lastName) {
    console.info(firstName + " " + lastName);
  }
}());

myApi.speak("Troy");
//myApi.delta();

console.info('The count is ' + myApi.counter());

console.info('The count is ' + myApi.counter());

console.info('The count is ' + myApi.counter());


myApi.showName("Troy", "Miles");

// lab: add a function to print first and last name as two discrete string, name it showName


function count(){
  var cnt = 0;
  return cnt++;

}

console.info(count());
console.info(count());
console.info(count());

