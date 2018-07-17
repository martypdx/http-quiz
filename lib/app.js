const express = require('express');
const app = express();
const penguins = require('./cookies.js');

app.use('/penguins', penguins);
    Penguins.find()
        .then(penguins => res.json(body, ['']));

app.get('/api/penguins', (req, res) => {
    
});

// res.statusCode = 404;
// res.end('Sorry nope');

// module.exports = (req, res) => {
    
// };

app.listen(3003);