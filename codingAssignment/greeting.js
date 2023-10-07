/*    Greeting Promise.
You need to write a function that takes a name as input and returns a promise that resolves with a greeting
message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".  */


function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
      if (typeof name !== 'string' || name.trim() === '') {
        reject('Invalid input. Please provide a valid name.');
      } else {
        const greeting = `Hello, ${name}!`;
        resolve(greeting);
      }
    });
  }
  
  // Example usage:
  const name = "Mithun";
  
  // Call the function and handle the Promise
  greetWithPromise(name)
    .then(message => {
      console.log(message); // Outputs: "Hello, Mithun!"
    })
    .catch(error => {
      console.error(error);
    });
  