// const { parse } = require('url');

module.exports = (req, res) => {
    // const url = parse(req.url, true);

    res.write('hello world');
    res.end();
};