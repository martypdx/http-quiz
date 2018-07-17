const { parse } = require('url');
const bernice = { 
    name: 'bernice',
    description: 'What a penguin!',
    age: 7 };

const bernard = { name: 'bernard' };
const both = [bernice.name, bernard.name];

module.exports = (req, res) => {

    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    const query = url.query;

    if(parts[0] === '') {
        res.write('Hello World!');
        res.end();
    }
    else if(parts[0] === 'api' && parts[1] === 'penguins'){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(both));
    }
    else if(parts[0] === 'api' && query.format === 'full'){

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(bernice));
    }
    else if(parts[0] === 'api' && query.format === 'simple'){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(bernice.name));
    }
    else if(parts[1] === 'mistake'){
        res.setHeader('Content-Type', 'text/html');
        res.write(
            '<p>All tracks covered</p>'
        );
        res.end();
    }
    else {
        res.statusCode = 404;
        res.end();
    }

    res.end('time to write the app!');
};