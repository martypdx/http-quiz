const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('Quiz API', () => {

    it('Gets a list of penguins', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(res => {
                assert.deepEqual(res.body, ['bernice', 'bernard']);
            });
    });

    it('Gets a simple penguin', () => {
        return chai.request(app)
            .get('/api/penguin?format=simple')
            .then(res => {
                assert.deepEqual(res.body, { name: 'bernice' });
            });
    });

    it('Gets a full format penguin', () => {
        return chai.request(app)
            .get('/api/penguin?format=full')
            .then(res => {
                assert.deepEqual(res.body, { 
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                });
            });
    });

    it('Returns coverup on delete of mistake', () => {
        return chai.request(app)
            .delete('/mistake')
            .then(res => {
                assert.equal(res.text, '<p>All tracks covered</p>');
            });
    });

    it('Returns 404 on unknown path', () => {
        return chai.request(app)
            .get('/not-a-valid-path')
            .then(res => {
                assert.equal(res.status, 404);
            });
    });

});