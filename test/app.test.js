const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('Quiz API', () => {

    let king = { 
        name: 'bernice',
        description: 'What a penguin!',
        age: 7
    };

    it('responds with 404 on not found', () => {
        return chai.request(app)
            .get('/url-not-found')
            .then(res => {
                assert.equal(res.status, 404);
                assert.match(res.text, /Sorry/);
            });
    });

    it.skip('responds to a delete', () => {
        return chai.request(app)
            .delete('/mistake')
            .then(res => {
                assert.match(res.text, '<p>All tracks covered</p>');
            });
    });

    

    it.skip('returns full object if "full" is in query', () => {
        return chai.request(app)
            .get('/api/penguin/king?format=full')
            .then(res => {
                assert.deepEqual(res.text, king);
            });
    });
});