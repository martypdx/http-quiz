const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('Pirates API', () => {

    let bernice = { 
        name: 'bernice',
        description: 'What a penguin!',
        age: 7
    };

    let simpleBernice = { 
        name: 'bernice' 
    };

    it('responds with hello world on GET', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'hello world');
            });
    });

    it('responds with correct json response', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(res => {
                assert.deepEqual(res.body, ['bernice', 'bernard']);
            });
    });

    it('responds correctly with full query', () => {
        return chai.request(app)
            .get('/api/penguin/king?format=full')
            .then(res => {
                assert.deepEqual(res.body, bernice);
            });
    });
    
    it('responds correctly with simple query', () => {
        return chai.request(app)
            .get('/api/penguin/king?format=simple')
            .then(res => {
                assert.deepEqual(res.body, simpleBernice);
            });
    });

    it('returns correct response when calling DELETE on correct path', () => {
        return chai.request(app)
            .delete('/mistake')
            .then(res => {
                assert.equal(res.text, '<p>All tracks covered</p>');
            });
    });
});