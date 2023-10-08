const express = require('express');

app = express();

const PORT = 9000;
const HOSTNAME = 'localhost';

app.get('/', (req,res) => {
    res.send('Welcome to Men & Women Dummy Data');
})

app.get('/women', (req,res) => {
    const womenProducts = [
        { 
          "id": "1",
          "name": "Women's T-shirt",
          "brand": "ABC",
          "price": 500,
          "color": "pink",
          "size": "L",
          "category": "clothing",
         }
      ];
    res.send(womenProducts);
})
app.get('/men', (req,res) => {
    const menProducts = [
        { 
          "id": "2",
          "name": "Men's T-shirt",
          "brand": "ABC",
          "price": 200,
          "color": "white",
          "size": "M",
          "category": "clothing",
         }
      ];
    res.send(menProducts);
})
app.get('*', (req,res) => {
    res.send('Page not found!');
})

app.listen(PORT, () => {
    console.log(`Server is running at ${HOSTNAME}: ${PORT}`);
})