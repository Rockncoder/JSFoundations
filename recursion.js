/**
 * Created by troymiles on 3/20/16.
 */


// lab: write a function to count from 10 to 1 without using a loop and without duplicating code


// recursive function
function recur(count) {
  // check the terminating case
  if (!count) {
    return;
  }

  // the base case
  console.info("count = " + count);
  recur(--count);

}

recur(100);
