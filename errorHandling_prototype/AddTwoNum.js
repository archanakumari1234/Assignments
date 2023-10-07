/*     Using Static Method to Add Two Numbers with Calculator Class
Create a class called Calculator with a static method called add. The add method should take two numbers as
arguments and return their sum. Instantiate the Calculator class and call the add method.    */



class Calculator {
    static add(number1, number2) {
      return number1 + number2;
    }
  }
  
  // Call the static add method of the Calculator class
  const result = Calculator.add(5, 7);
  
  console.log(`Result of addition: ${result}`); // Outputs: "Result of addition: 12"
  