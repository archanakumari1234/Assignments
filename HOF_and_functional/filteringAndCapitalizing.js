/*     Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.  */


// Sample list of books with authors and publication years
const books = [
    { title: "Book 1", author: "author 1", year: 2005 },
    { title: "Book 2", author: "author 2", year: 2015 },
    { title: "Book 3", author: "author 3", year: 2009 },
    { title: "Book 4", author: "author 4", year: 2012 },
  ];
  
  // Function to capitalize the first letter of each word in a string
  function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // Filter books published after 2010 and capitalize author names
  const filteredBooks = books
    .filter(book => book.year > 2010)
    .map(book => ({
      title: book.title,
      author: capitalize(book.author),
      year: book.year
    }));
  
  // Output the filtered and capitalized books
  console.log("Books published after 2010 with capitalized author names:");
  console.log(filteredBooks);
  