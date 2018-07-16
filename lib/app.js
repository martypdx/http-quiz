const { parse } = require('url');
const bodyParser = require('./body-parser');

module.exports = (req, res) => {

    res.end('me done');
    const url = parse(req, res) 
    const parts = url.pathname.split('/').slice(1);
        if(parts[0] === 'api' && ) 
    }
};