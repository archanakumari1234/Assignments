/* String Manipulation.
Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
with the manipulated string or the new string to the console. */

function manipulateString(inputString) {
    // Convert the input string to uppercase
    const manipulatedString = inputString.toUpperCase();
  
    // Define the logString callback function
    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
  
    // Return the logString callback function
    return logString;
  }
  
  // Test the manipulateString function
  const input = "Hello, World!";
  const logCallback = manipulateString(input);
  
  // Call the logString callback function to log the manipulated string
  logCallback(); // Outputs: "The manipulated string is: HELLO, WORLD!"
  