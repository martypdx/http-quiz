const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('API Penguins', () => {

    it('write a test...', () => {
        assert.isOk(false, 'time to write your first test!');
        // return chai.request(app)
        // ...
    });
    it('responds bernice and bernard on GET', () => {
        return chai.request(app)
            .get('/api/Penguins')
            .set('Content-Type', 'application/json')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.body, ['bernice', 'bernard]']);    
            });

    });
});