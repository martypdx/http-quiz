const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('Pirates API', () => {

    it('gets penguins', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(({ body }) => {
                assert.deepEqual(body, ['bernard', 'bernice']);
            });
    });

    it('gets a single penguins with query format=full', () => {
        return chai.request(app)
            .get('/api/penguins/king?format=full')
            .then(({ body }) => {
                const expected = { 
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                };
                assert.deepEqual(body, expected);
            });
    });

    it('gets a single penguins with query format=simple', () => {
        return chai.request(app)
            .get('/api/penguins/king?format=simple')
            .then(({ body }) => {
                assert.deepEqual(body, { name: 'bernice' });
            });
    });

    it('returns 404 err if bad path', () => {
        return chai.request(app)
            .get('/api/pongons')
            .then((response) => {
                assert.equal(response.status, 404);
            });
    });
});