const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');

describe('Penguins API', () => {

    it.skip('returns penguins on GET', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(res => {
                console.log('result', res);
                assert.equal(JSON.parse(res), ['bernard']);
            });
    });
});