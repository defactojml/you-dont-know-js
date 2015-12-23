/**
 * Created by jean-michel.legrand on 03/12/2015.
 */

// module design : the most important design pattern in js
// closure based on outer functions & inner functions

// hello: the outer function
function hello(name) {
  // speak: the inner funciton that use the name variable
  function speak() {
    console.log(name);
  }
  // we return the function back
  return speak;
}

var fn = hello('jm');
// speak is not available (as this is the inner function)
// to execute it, we need to execute fn
fn();




function helloWithObject(firstName) {

  function upper(str) {
    return str.toUpperCase();
  }

  function speak(lastName) {
    console.log(firstName, upper(lastName));
  }

  function first() {
    return firstName;
  }
  // we pass on an entire object and not only a single function
  return {
    say: speak,
    firstName: first
  };
}

var object = helloWithObject('jm');
object.say("legrand");
object.firstName();

// an internal function only accessible in the hello function
// we have sth on the outside that is accessible as an external name

// returning such objects result in creating a public api

// the stuff that is inside is private
// the stuff is the public api to accessible to the entire module is the public api to access the entire module
// an object would be better than the function to return N functions