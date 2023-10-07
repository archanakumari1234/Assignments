/*     Nested Objects.
Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object is given below.    */




function extractNameAndStreet(personObject) {
    const { name, address: { street } } = personObject;
    return { name, street };
  }
  
  // Example usage:
  const person = {
    name: "Mithun",
    age: 21,
    address: {
      street: "BB  Block, Industrial area",
      city: "Sector-62 Noida",
      state: "Utter Pradesh"
    }
  };
  
  const extractedInfo = extractNameAndStreet(person);
  
  console.log(extractedInfo);
  