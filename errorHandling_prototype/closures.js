/*      Check the presence using closures.
Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
returned function should take another number as an argument and return true if the number is in the array, and
false otherwise.    */



function numberChecker(numbers) {
    return function(numberToCheck) {
      return numbers.includes(numberToCheck);
    };
  }
  
  // Example usage:
  const numbersArray = [1, 2, 3, 4, 5];
  const checkNumber = numberChecker(numbersArray);
  
  console.log(checkNumber(3)); // Outputs: true
  console.log(checkNumber(6)); // Outputs: false
  