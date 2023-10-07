/*       Only unique items are allowed.
You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements.    */




function removeDuplicatesFromArray(numbersArray) {
    // Use a Set to store unique elements
    const uniqueSet = new Set(numbersArray);
  
    // Convert the Set back to an array to maintain the original order (if needed)
    const uniqueArray = [...uniqueSet];
  
    return uniqueArray;
  }
  
  // Example usage:
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  const uniqueNumbers = removeDuplicatesFromArray(numbers);
  
  console.log(uniqueNumbers); // Outputs: [1, 2, 3, 4, 5]
  