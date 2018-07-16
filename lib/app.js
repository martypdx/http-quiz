const { parse } = require('url');

module.exports = (req, res) => {
    console.log('req.url:', req.url);
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    req.id = parts[1];
    req.query = url.query;
    const method = req.method;

    res.setHeader('Content-Type', 'application/json');
    if(method === 'GET' && req.url === '/api/penguins') {
        res.end(JSON.stringify(['bernard', 'bernice']));
    }
};