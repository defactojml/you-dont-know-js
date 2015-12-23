/**
 * Created by jean-michel.legrand on 02/12/2015.
 */

// b exists only on the scope of the function
function foo(b) {
  // outside side effect on variable a
  // access variable outside of the function scope (the reverse is not true)
  a = a * 2;
  a = a + b;
  return a / 2;
}

var a = 10;

// b is known on the scope of the program

var b = foo(3);

console.log(a);
console.log(b);
