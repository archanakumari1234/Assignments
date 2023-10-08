const express = require('express');

app = express();

const PORT = 8000;
const HOSTNAME = 'localhost';

app.get('/', (req,res) => {
    res.send('I am home page!');
})

app.get('/about', (req,res) => {
  
    res.send('I am about page!');
})
app.get('/contact', (req,res) => {
    res.send('support@pwskills.com');
})

app.listen(PORT, () => {
    console.log(`Server is running at ${HOSTNAME}: ${PORT}`);
})