const { parse } = require('url');


module.exports = (req, res) => {
    const url = parse(req.url, true);     
    const parts = url.pathname.split('/').slice(1);
    
    let king = { 
        name: 'bernice',
        description: 'What a penguin!',
        age: 7
    };

    if(parts[0] === 'king') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(king));
    }

    if(parts[0] === 'mistake') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<p>All tracks covered</p>');
    }

    else {
        res.statusCode = 404;
        res.end('Sorry, can\'t help you');
    }
};