
module.exports = (req, res) => {
    // res.end('time to write the app!');
    const url = parseFloat(req.url, tru);
    const parts = url.pathname.split('/').slice(1);
    request.get('/api/penguins') {

        if(parts[0] === 'penguins')

        return client.query

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(penguin));
        res.end();
    };

    selectOne('/api/penguins_id') {

        if(parts[0] === 'penguins') {

            return client.query
            
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(penguin));
            res.end();

        }

        else {
            res.statusCode = 404;
            res.end('Sorry, can\'t find');
        }
    },

    update('/api/penguins._id') {
        return client.query

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(penguin));
        res.end();
    },

    request.delete('/api/penguins._id') {
        return client.query

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(penguin));
        res.end();
    }
    
};