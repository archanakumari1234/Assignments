/*   Arrange in alphabetical order.
Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order.    */



// Sample list of book objects
const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  ];
  
  // Callback function to log titles in alphabetical order
  function logTitlesInAlphabeticalOrder(titleList) {
    const sortedTitles = titleList.sort(); // Sort titles alphabetically
    console.log('Titles in alphabetical order:');
    sortedTitles.forEach((title, index) => {
      console.log(`${index + 1}. ${title}`);
    });
  }
  
  // Function to extract titles and call the callback function
  function extractAndSortTitles(books, callback) {
    const titleList = books.map(book => book.title); // Extract titles
    callback(titleList); // Call the callback function with the title list
  }
  
  // Call the function to extract and sort titles, passing the callback
  extractAndSortTitles(books, logTitlesInAlphabeticalOrder);
  