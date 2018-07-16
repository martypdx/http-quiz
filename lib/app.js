const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const method = req.method;
    res.setHeader('Content-Type', 'application/json');

    res.send = data => res.end(JSON.stringify(data));

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
        else res.send({ name: 'bernice' });
    }
    else if(method === 'DELETE' && url.pathname === '/mistake') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<p>All tracks covered</p>');
    }
    else {
        res.statusCode = 404;
        res.end();
    }
    
};