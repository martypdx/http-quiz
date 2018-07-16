const express = require('express');
const app = express();
const penguins = require('./cookies.js');

app.use('/penguins', penguins);


app.get('/api/penguins', (req, res) => {
    
});

app.listen(3003);