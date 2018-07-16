/* eslint no-console: off */
const { createServer } = require('http');
const app = require('./lib/app');

const PORT = process.env.PORT || 3005;
const server = createServer(app);

server.listen(PORT, () => {
    console.log('server running on', server.address().port);
});