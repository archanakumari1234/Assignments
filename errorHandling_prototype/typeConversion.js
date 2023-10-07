/*     Type Conversion.
Write a function called convertToNumber that takes a string as an argument and returns the equivalent
number. If the string cannot be converted to a number, the function should return the string "Invalid number".
Use error handling in javascript to achieve this output.    */



function convertToNumber(inputString) {
    try {
      // Attempt to convert the string to a number
      const numberValue = Number(inputString);
  
      // Check if the conversion resulted in a NaN (Not-a-Number)
      if (isNaN(numberValue)) {
        throw new Error('Invalid number');
      }
  
      // If successful, return the converted number
      return numberValue;
    } catch (error) {
      // Handle any errors that occurred during the conversion
      return 'Invalid number';
    }
  }
  
  // Test the convertToNumber function
  console.log(convertToNumber('42')); // Outputs: 42 (number)
  console.log(convertToNumber('3.14')); // Outputs: 3.14 (number)
  console.log(convertToNumber('abc')); // Outputs: "Invalid number"
  