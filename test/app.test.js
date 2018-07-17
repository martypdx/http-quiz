const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('Pirates API', () => {

    const bernice = { 
        name: 'bernice',
        description: 'What a penguin!',
        age: 7 };
    const bernard = 'bernard';

    it('responds with 404 on bad path', () => {
        return chai.request(app)
            .get('/no-path-here')
            .then(res => {
                assert.equal(res.status, 404);
            });

    });
    
    it('responds with bernice and bernard when you get penguins', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(res => {
                assert.deepEqual(res.body, [bernice.name, bernard]);
            });
    });

    it('responds with whole object when request is full', () => {
        return chai.request(app)
            .get('/api/penguin/king?format=full')
            .then(res => {
                assert.deepEqual(res.body, bernice);
            });
    });
    it('responds with name when request is simple', () => {
        return chai.request(app)
            .get('/api/penguin/king?format=simple')
            .then(res => {
                assert.deepEqual(res.body, bernice.name);
            });
    });
    it('responds with html when request is delete', () => {
        return chai.request(app)
            .get('/api/mistake')
            .then(res => {
                assert.equal(res.text, '<p>All tracks covered</p>');
            });
    });
});