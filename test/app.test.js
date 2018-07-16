const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');

const app = require('../lib/app');
chai.use(chaiHttp);

describe('Penguins API', () => {

    // beforeEach(() => client.query(DELETE FROM penguins'));
    it('gets a Penguin', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(({ body }) => {
                
                assert.deepEqual(body, 'time to write your first test!');
            });
    
    });

    it('gets all penguins', () => {
        return chai.request(app)
            .get('/penguins')
            .then(({ body }) => {
                assert.deepEqual();
            });
    });
});