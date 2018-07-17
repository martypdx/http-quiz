const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('Pirates API', () => {

    
    it('test is status 200', () => {
        assert.isOk(true);
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.status, 200);
            });
    });
    it('says bernice, bernard', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(res => {
                assert.equal(res.text, ('bernice', 'bernard'));
            });
    });
});