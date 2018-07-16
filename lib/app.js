const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    const parts = url.pathname.split('/').splice(1);

    if(parts[1] === 'penguins') {
        res.setHeader('Content-Type', 'text/html');
        let penguins = 'bernard';
        res.end(penguins);
    }
    else {
        res.end('Sorry, no penguins here.');
    }
};