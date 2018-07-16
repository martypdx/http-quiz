const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'penguins') {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify('penguins'));
    }
    
    
};