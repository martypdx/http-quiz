const url = require('url');

module.exports = (req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    
    if(req.method === 'GET' && pathname === '/api/penguins') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(['bernice', 'bernard']));
    }
    
    else if(req.method === 'GET' && pathname === '/api/penguin') {
        res.setHeader('Content-Type', 'application/json');
        const data = query.format === 'full'
            ? { 
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
            }
            : { 
                name: 'bernice' 
            };

        res.end(JSON.stringify(data));
    }

    else if(req.method === 'DELETE' && pathname === '/mistake') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<p>All tracks covered</p>');
    }

    else {
        res.statusCode = 404;
        res.end();
    }


};