/*     Multiple requests.
Create an asynchronous function that retrieves data from two different API endpoints: "https://
jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
a to-do task, while the second API provides post details. The function should combine the results from both APIs
and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
responses from the respective APIs.      */




async function fetchDataFromMultipleAPIs() {
    const apiUrl1 = 'https://jsonplaceholder.typicode.com/todos/1';
    const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/1';
  
    try {
      // Use Promise.all to make multiple requests concurrently
      const [todoResponse, postResponse] = await Promise.all([
        fetch(apiUrl1),
        fetch(apiUrl2),
      ]);
  
      // Check if the responses are OK (status code 200)
      if (!todoResponse.ok || !postResponse.ok) {
        throw new Error('Failed to fetch data from one or more endpoints.');
      }
  
      // Parse the response bodies as JSON
      const todoData = await todoResponse.json();
      const postData = await postResponse.json();
  
      // Combine the results into an object
      const combinedData = {
        todo: todoData,
        post: postData,
      };
  
      // Log the combined data to the console
      console.log('Combined Data:', combinedData);
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('Error:', error.message);
    }
  }
  
  // Call the function to fetch and log data from multiple APIs
  fetchDataFromMultipleAPIs();
  