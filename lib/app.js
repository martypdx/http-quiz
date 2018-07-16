const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    console.log('req.url:', url.pathname);
    req.id = parts[1];
    const method = req.method;
    res.send = data => res.end(JSON.stringify(data));

    res.setHeader('Content-Type', 'application/json');
    if(method === 'GET' && url.pathname === '/api/penguins') {
        res.send(['bernard', 'bernice']);
    }
    else if(method === 'GET' && url.pathname === '/api/penguins/king') {
        if(url.query.format === 'full') {
            res.send({ 
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
            });
        }
        
    }
    else {
        res.statusCode = 404;
        res.end();
    }
    
};