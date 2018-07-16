const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('Penguins API', () => {

    it('returns penguins on GET', () => {
        return chai.request(app)
            .get('api/penguins')
            .then(res => {
                assert.equal(res.json, ['bernice', 'bernard']);
            });
    });
});