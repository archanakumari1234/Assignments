/*       Fetch results asynchronously.
Write a function that asynchronously fetches data from an API
[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.     */




function fetchDataFromAPI() {
    // Specify the URL of the API
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  
    // Use the fetch function to make a GET request to the API
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
        // Log the fetched data to the console
        console.log('Fetched data:', data);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error.message);
      });
  }
  
  // Call the function to fetch and log data
  fetchDataFromAPI();
  