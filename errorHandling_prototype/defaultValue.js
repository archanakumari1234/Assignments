/*     Implementing a Person Class with Default Values
Create a class called Person with two properties: name and age. The class should have a method called
getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
constructor to set the values of name and age to "Unknown" and 0 if they are not provided.    */



class Person {
    constructor(name = 'Unknown', age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Instantiate an instance of the Person class with default values
  const personWithDefaults = new Person();
  
  // Call the getDetails method
  const personDetails = personWithDefaults.getDetails();
  
  console.log(personDetails); // Outputs: "Name: Unknown, Age: 0"
  