/**
 * Created by jean-michel.legrand on 03/12/2015.
 */

// in the add() function, we have a reference to both variables y & x
// in the makeAdder() function, the return is the function itself (not a type)
// sometime, we pass value in as parameter - here we return a function back out
// closure takes some time to get used to
// the most powerful programming technique accross any programmning language - th emost intrinsic for js language


function makeAdder(x) {
  // parameter `x` is an inner variable

  // inner function `add()` uses `x`, so
  // it has a "closure" over it
  function add(y) {
    return y + x;
  };

  return add;
}

// fn function has a value that remembers its state when is was created
var fn = makeAdder(5);
console.log(fn);

console.log('the result is ', fn(10));



function alertMe(x) {
  function alerte() {
    alert(x);
  }
  return alerte();
}


