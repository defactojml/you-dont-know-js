/**
 * Created by jean-michel.legrand on 03/12/2015.
 */
// foo() is the outer function
// bar() is the inner function
// functions can be nested within each others
// baz() exists only in the scope of bar()
// nested scope is important tpo how we structure complex js program

// closure
// - why is this important
// - why is this useful
function foo() {
  var a = 1;

  function bar() {
    var b = 2;

    function baz() {
      var c = 3;

      console.log( a, b, c ); // 1 2 3
    }

    baz();
    console.log( a, b );        // 1 2
  }

  bar();
  console.log( a );               // 1
}

foo();