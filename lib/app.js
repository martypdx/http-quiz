const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'api') {
        res.setHeader('Content-Type', 'application/json');
        res.end({ 
            name: 'bernice',
            description: 'What a penguin!',
            age: 7
        });
    }
};