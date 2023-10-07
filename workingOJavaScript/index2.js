// Calling the function before declaration (function expression)
console.log(multiplyNumbers(3, 4)); // Error: multiplyNumbers is not a function

// Function expression
const multiplyNumbers = function(a, b) {
  return a * b;
};
