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

    it('still responds correctly when query is simple', () => {
        return chai.request(app)
            .get('/api/penguin/king?format=simple')
            .then(res => {
                assert.deepEqual(res.body, simpleBernice);
            });
    });

    it('still responds correctly when query is nothing', () => {
        return chai.request(app)
            .get('/api/penguin/king?format=')
            .then(res => {
                assert.deepEqual(res.body, simpleBernice);
            });
    });

    it('still responds correctly when query is something else', () => {
        return chai.request(app)
            .get('/api/penguin/king?format=cool')
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

    it('responds with 404 on any other response', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.status, 404);
                assert.equal(res.text, 'These aren\'t the droids you\'re looking for.');
            });
    });
});