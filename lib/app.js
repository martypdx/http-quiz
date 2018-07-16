const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/api').slice(1);

    console.log('look here', url.query.format);
    
    
    if(parts[0] === '/penguins') {
        const penguins = ['bernice', 'bernard'];
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(penguins));
    }
    
    else if(parts[0] && url.query.format === 'full') {
        const penguin = { 
            name: 'bernice',
            description: 'What a penguin!',
            age: 7
        };

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(penguin));
    }

    else if(parts[0] && url.query.format !== 'full') {
        const penguin = { name: 'bernice' };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(penguin));
    }

    else {
        res.statusCode = 404;
        res.end(res.statusCode + ' CANNOT ' + req.method + ' ' + req.url); 
    }

};