/* Double using callback.
Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback. */

function doubleArray(arr, callback) {
    // Check if the input is an array and the callback is a function
    if (!Array.isArray(arr) || typeof callback !== 'function') {
      return [];
    }
  
    // Create a new array to store the doubled elements
    const doubledArray = [];
  
    // Iterate through the input array and apply the callback function to each element
    for (let i = 0; i < arr.length; i++) {
      doubledArray.push(callback(arr[i]));
    }
  
    return doubledArray;
  }
  
  // Define a callback function that doubles a number
  function doubleNumber(num) {
    return num * 2;
  }
  
  // Test the doubleArray function
  const inputArray = [1, 2, 3, 4, 5];
  const doubledResult = doubleArray(inputArray, doubleNumber);
  console.log(doubledResult); // Outputs: [2, 4, 6, 8, 10]
  