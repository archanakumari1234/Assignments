/*  Age in Days.
Write a function that takes in an array of integers and a callback function, and returns a new array where each
Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
name, and age in years as input. The function should concatenate the first and last name into a single string
and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
variable called ageInDays.
The ageInDays function should then return a callback function that logs a message to the console. The
message should include the person's full name and age in days, and should be in the format: "The person's full
name is [full name] and their age in days is [age in days]."   */



function ageInDays(person) {
    // Extract first name, last name, and age from the person object
    const { firstName, lastName, age } = person;
  
    // Concatenate first name and last name into fullName
    const fullName = `${firstName} ${lastName}`;
  
    // Calculate age in days (assuming 365 days per year)
    const ageInDays = age * 365;
  
    // Define the logMessage callback function
    function logMessage() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }
  
    // Return the logMessage callback function
    return logMessage;
  }
  
  // Test the ageInDays function
  const personInfo = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };
  
  const logCallback = ageInDays(personInfo);
  
  // Call the logMessage callback function to log the message
  logCallback(); // Outputs: "The person's full name is John Doe and their age in days is 10950."
  