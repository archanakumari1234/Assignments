/*      Count the occurrences.
You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces.     */




function countWordOccurrences(inputString) {
    // Split the input string into an array of words
    const words = inputString.split(/\s+/);
  
    // Create a Map to store word counts
    const wordCountMap = new Map();
  
    // Iterate through the words and count their occurrences
    for (const word of words) {
      const cleanedWord = word.toLowerCase(); // Convert to lowercase for case-insensitive counting
      const currentCount = wordCountMap.get(cleanedWord) || 0;
      wordCountMap.set(cleanedWord, currentCount + 1);
    }
  
    return wordCountMap;
  }
  
  // Example usage:
  const text = "This is a sample text. This text contains sample words. This is a test text.";
  const wordOccurrences = countWordOccurrences(text);
  
  // Print the word occurrences
  for (const [word, count] of wordOccurrences) {
    console.log(`${word}: ${count}`);
  }
  