const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[1] === 'penguins') {
        let message = ['bernice', 'bernard'];
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(message));
    }
    else if(parts[1] === 'penguin' && url.query.format === 'full') {
        let message = { 
            name: 'bernice',
            description: 'What a penguin!',
            age: 7
        };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(message));
    }
    else if(parts[1] === 'penguin' && url.query.format !== 'full') {
        let message = { 
            name: 'bernice' 
        };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(message));
    }
    else if(parts[0] === 'mistake') {
        let message = '<p>All tracks covered</p>';
        res.end(message);
    }
    else {
        res.statusCode = 404;
        res.end('These aren\'t the droids you\'re looking for.');
    }
};