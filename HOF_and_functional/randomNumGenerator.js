/*     Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.    */


// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
  }
  
  const delayInMilliseconds = 3000; // 3 seconds
  
  function displayProgress(timeRemaining) {
    console.log(`Time remaining: ${timeRemaining / 1000} seconds`);
  }
  
  let timeRemaining = delayInMilliseconds;
  const progressInterval = setInterval(function () {
    displayProgress(timeRemaining);
    timeRemaining -= 1000; // Reduce the time remaining by 1 second
  
    if (timeRemaining <= 0) {
      clearInterval(progressInterval); // Stop displaying progress messages
      const randomNum = generateRandomNumber();
      console.log(`Random number generated: ${randomNum}`);
    }
  }, 1000); 
  
  