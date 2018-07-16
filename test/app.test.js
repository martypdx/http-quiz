const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');

describe('Penguins API', () => {

    it('returns penguins on GET', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(res => {
                assert.equal(res.text, 'bernard');
            });
    });
});