const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    const parts = url.pathname.split('/').splice(1);

    if(parts[1] === 'penguins') {
        res.setHeader('Content-Type', 'application/json');
        let penguin = JSON.stringify(['bernard']);
        console.log('penguin =', penguin);
        res.end(penguin);
    }
    else {
        res.end('Sorry, no penguins here.');
    }
};