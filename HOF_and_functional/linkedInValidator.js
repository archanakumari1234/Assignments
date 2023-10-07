/*     LinkedIn Profile URL Validator.
As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
that do not follow this format or contain invalid characters. The program should provide clear output messages
indicating whether each input is a valid LinkedIn profile URL or not.     */


// Regular expression for matching valid LinkedIn profile URLs
const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9_-]{5,30}[A-Za-z0-9]$/;

// Function to check if a LinkedIn URL matches the regex
function isValidLinkedInURL(url) {
  return linkedinRegex.test(url);
}

// Test LinkedIn profile URLs
const url1 = "https://www.linkedin.com/in/johndoe123";
const url2 = "https://www.linkedin.com/in/jane-doe";
const url3 = "https://www.linkedin.com/in/invalid!user";
const url4 = "https://www.linkedin.com/johndoe";            // Missing "in/"

// Check and print the results
console.log(`URL 1: ${isValidLinkedInURL(url1) ? "Valid" : "Invalid"}`);
console.log(`URL 2: ${isValidLinkedInURL(url2) ? "Valid" : "Invalid"}`);
console.log(`URL 3: ${isValidLinkedInURL(url3) ? "Valid" : "Invalid"}`);
console.log(`URL 4: ${isValidLinkedInURL(url4) ? "Valid" : "Invalid"}`);
