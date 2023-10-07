/*    Building Robust Functions in JavaScript
Create a function called getPerson that takes an object as a parameter representing a person's name and age.
The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
message if it occurs.     */


function getPerson(personObject) {
    try {
      // Check if the input is an object with "name" and "age" properties
      if (
        typeof personObject !== 'object' ||
        !personObject.hasOwnProperty('name') ||
        !personObject.hasOwnProperty('age')
      ) {
        throw new Error('Invalid parameter type');
      }
  
      // Extract the name and age properties from the object
      const { name, age } = personObject;
  
      // Return the formatted string
      return `Name: ${name}, Age: ${age}`;
    } catch (error) {
      // Handle the error and return the error message
      return error.message;
    }
  }
  
  // Test the getPerson function
  const validPerson = { name: 'John', age: 30 };
  const invalidPerson = 'Invalid Input';
  
  console.log(getPerson(validPerson)); // Outputs: "Name: John, Age: 30"
  console.log(getPerson(invalidPerson)); // Outputs: "Invalid parameter type"
  