/*        Get Data from API and Display it on the browser console.
Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to
the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list
of posts, and then display them to the browser console.          */





// Define the URL of the API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Use the fetch method to make a GET request to the API
fetch(apiUrl)
  .then(response => {
    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {
    // Log the retrieved data to the browser console
    console.log('Data from the API:', data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Error:', error.message);
  });
