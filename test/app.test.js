const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('Pirates API', () => {

    it('gets penguins', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(({ body }) => {
                assert.deepEqual(body, ['bernard', 'bernice']);
            });
    });
});