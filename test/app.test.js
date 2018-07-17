const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('Pirates API', () => {

    it('write a test...', () => {
        assert.isOk(true, 'time to write your first test!');
        // return chai.request(app)
        // ...
    });

    it('responds with json', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(res => {
                console.log(res);
                assert.deepEqual(res['text'].message, ['bernice', 'bernard']);
            });
    });

    it('deletes and respond with html All tracks covered', () => {
        return chai.request(app)
            .delete('/mistake')
            .then(res => {
                assert.equal(res.text, '<p>All tracks covered</p>');
            });
    });
});