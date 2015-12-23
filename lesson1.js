/**
 * Created by jean-michel.legrand on 24/11/2015.
 */
// an (assignement) statement: a = b * 2;
// an expression:  b * 2
a = b * 2;

// operator precede; in our case mulitplication is more precedent
((a) = ( ((b) * (2)) + ((foo)(((c) * (3)))) ) );

// to overwrite precedence, add parenthesis
// othersise, for readability sake, it will be useful to put the parentheesis
// (the developper that read the code will not need to know the rule of precedence)

// in such statement,
// - b * 2 will be executed first
// - then the foo() function will be called
// if the foo() would have been in the left position of the statement, it will have been exexuted first
// the porgram  evaluates the expression in the left first then the right expression
a = b * 2 + foo(c * 3);


// in es5, there is no type difference between 2 & 2.0. It represents the Number type

// the javascript engine enable to execute the js (in the browser or on the server)
// javascript a scripting language? NOT anymore, it is a compiled language
// scripting language are interpreted (line by line)
// by compilation, there is more than one path
// the first path  is not about executing the program but understanding the program (to make sure is is valid)

// a = 2;
// 2();

// command line execution: node

// in the dev tools, for statement that do not have return statement, a undefined will be return
//var a;
//undefined


// 30+ operators in js

// approche 1 - more explicit ?
a = a + 2;
// add sth to my existing variable


// // approche 2 (with shortcut variable) - conceptually simpler
a += 2;

//readability & understandabilty are inherently & completely subjective
// make my code more readable = > there is no precise definition


// types
a = 42; // a number
console.log(a);

"42"; // a string

// number have a different behaviors than string
// you can have double quote or single quote : a stylist part => pick one and stick with it consistely in the program


// conversion from a type to another
// conversion in js : coexercion

a = 42;
a = a / 2;

// explicit coexercion
a = String(a); // will convert anything into a string
console.log(a); // string representation

b = Number(a);


// in js , variable does not hold type - it is the value that have a type
// or static language, you declare type on variable

// implicit coerxion
c = 34;
c = c / 2;
c = c + "";
console.log(c);

// a comment does not say what BUT why and/or how  : that makes very good program

// assiging a value to a veriable that has never been declared is a BAD idea
// every variable use in a program should be formally declared (beofre the first time you use it)
var a;
a = 42;

var b = 45;

// 2 more ways in es6 with let & const
// let b = 5;
// const c = 5;
// difference
// - let and const : block scoping declaration (inside a block)
// - var : function scoping declaration (inside a function)

// there is another way in es5 with function declaration
// function d(){}


// a collection of statement represents a block within a pairing of curly braces
// a block can appear
// - as part of function statements
// - as part of conditional

// function declaration
function foo() {
}

// function expression attached to a variable declaration
var bar = function() {
};
var foo = function baz() {
};

// major takeway: a block is associated to these funcctions. The block will not run unless you execute the function

// conditions
// type conversion between any value and a boolean value
// falsy value : 0, -0, NaN "" false null undefined
void a;

// loops
// for loop
for (a = 5; a < 10; a = a + 1) {
  console.log(a);
}

// the equivalent with a while loop
b = 5;
while (true) {
  if (b >= 10) {
    break;
  }
  console.log(a);
  b = b + 1;
}


// the foo loop will infinite loop because the condition will never fail
// it does not run forever because the condition is indifinetly true but because there is never a condition that fails
function infiniteLoop() {
  for (; ;) {
  }
}


// functions
//logically group a set of tasks together
// tip to format euro
var pi = 3.1415926;
pi.toFixed(3);


function loveYouMarjo() {
  console.log("Love you Marjorie");
}

loveYouMarjo();
loveYouMarjo();
loveYouMarjo();
loveYouMarjo();


function foo() {
  a = a * 2;
  a = a + 3;
}

// if we declare a before the function declaration, no impact (hoisting)
// as long as you have all the declarations at the top, there will not be any surprise
var a = 10;
foo(); // display 23

foo();
foo(); // display 101

// a good rule: have A consistent rule - whatever it is

// parameters get passed in functions declaration
function fooWithParameter(b) {
  a = a * 2;
  a = a + b;
}

var a = 10;
// arguments get passed in functions executions
fooWithParameter(3); // display 23


/* passing a function as parameters to other functions */
var a = 10;
function boo(b) {
  a = a * 2;
  a = a + b();
}

function bar() {
  console.log(a);
}

// passing a function as an argument  and assigned to the parameter b
boo(bar);
// passing the results of function called as an argument
boo(bar());