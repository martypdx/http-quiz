const { parse } = require('url');
const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    
    const url = parse(req.url, true); 
    const parts = url.pathname.split('/').slice(1);
    if(parts[0] === 'api' && parts[2] === 'penguins') 
        res.write('bernice', 'bernard');
    res.end();
    
};