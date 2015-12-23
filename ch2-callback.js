/**
 * Created by jean-michel.legrand on 04/12/2015.
 */

function bar() {
  console.log("Hello World");
}

// passing a function by its value - not calling / executing the function
// this is callback
setTimeout(bar, 1000);


// related to a base concept closure
// function as first class value - its a calue we can pass around
