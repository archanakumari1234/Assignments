/*     URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.   */


// Regular expression for matching valid URLs
const urlRegex = /^(http:\/\/|https:\/\/)[A-Za-z0-9.-]+\.[A-Za-z]+$/;

// Function to check if a URL matches the regex
function isValidURL(url) {
  return urlRegex.test(url);
}

// Test URLs
const url1 = "http://www.example.com";
const url2 = "https://sub.example.co.uk";
const url3 = "ftp://invalid-url.com";

// Check and print the results
console.log(`URL 1: ${isValidURL(url1) ? "Valid" : "Invalid"}`);
console.log(`URL 2: ${isValidURL(url2) ? "Valid" : "Invalid"}`);
console.log(`URL 3: ${isValidURL(url3) ? "Valid" : "Invalid"}`);
