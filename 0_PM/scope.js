/**
 * Part 1:
 *    What will print and why?
 *      1 will print because var a is declared set to 1. Then, function y is called and a will be set to 2 and printed. 
 *      Then, undefined is returned because a is declared but not defined to a certain value.
 *    What will change if we delete line 15? Why?
 *      1 will be printed instead of undefined because the declaration of a set to 1 is hoisted to the top of the program.
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = (a) => console.log(a);

const y = () => {
  let a = 2;
  console.log(a);
  x(a);
}

let a = 1;
console.log(a);
y();
