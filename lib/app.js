
module.exports = (req, res) => {
    console.log('method:',req.method)

    if(req.method === 'GET' || req.path === '/api/penguins') {
        res.end(JSON.stringify({ message: ['bernice', 'bernard'] }));
    }

    else if(req.method === 'DELETE' || req.path === '/mistake') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<p>All tracks covered</p>');
    }


        res.end('time to write the app!');
};