/*        Error Handling
Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors
that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789
to simulate an error, and then display an error message on the webpage.      */




const apiUrl = 'https://jsonplaceholder.typicode.com/posts/123456789';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data from the API:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);

    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'An error occurred while fetching data.';
    document.body.appendChild(errorMessage);
  });
