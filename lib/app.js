const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[1] === 'penguins') {
        let message = ['bernice', 'bernard'];
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(message));
    }
    else {
        res.write('hello world');
        res.end();
    }
};