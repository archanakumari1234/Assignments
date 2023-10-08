const express = require('express');
const app = express();
const port = 3000;

app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);
  res.json({ random_number: randomNumber });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});