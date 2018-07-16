const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);
 
describe('Penguins API', () => {

    it('Returns an array response on GET...', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(res => {
                console.log(res.text);
                assert.equal(res.text, ['bernice', 'bernard']);
                assert.equal(res.header['content-type'], 'application/json');
            });
    });

    it('Returns object on GET with format ', () => {
        return chai.request(app)
            .get('/api/penguin/king?')
            .query('format=<simple|full>')
            .then(res => {
                assert.equal(res.text, { 
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                });
                assert.equal(res.header['content-type'], 'application/json');
            });
    });

    it('Returns object on GET without format ', () => {
        return chai.request(app)
            .get('/api/penguin/king?')
            .then(res => {
                assert.equal(res.text, { 
                    name: 'bernice',
                });
                assert.equal(res.header['content-type'], 'application/json');
            });
    });

    it('DELETE returns html text', () => {
        return chai.request(app)
            .get('/mistake')
            .then(res => {
                assert.equal(res.text, '<p>All tracks covered</p>');
                assert.equal(res.header['content-type'], 'text/html');
            });
    });

    it('Responds with 404 not invalid path', () => {
        return chai.request(app)
            .get('/invalid')
            .then(res => {
                assert.equal(res.status, 404);
                assert.match(res.text, /CANNOT/);
            });
    });
});
