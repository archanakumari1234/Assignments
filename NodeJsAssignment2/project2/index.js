const express = require('express');
const app = express();
const port = 4000;

let counter = 0;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ counter:counter });
});

// API endpoint to increment the counter by 1
app.get('/increment', (req, res) => {
  counter++;
  res.json({ counter:counter });
});

// API endpoint to decrement the counter by 1
app.get('/decrement', (req, res) => {
  counter--;
  res.json({ counter:counter });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
