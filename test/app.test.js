const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
// const app = require('../lib/app');
chai.use(chaiHttp);

const app = require('../lib/app'); 

describe('Penguins API', () => {

    it('Returns a json response on GET...', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(res => {
                console.log(res.text);
                assert.deepEqual(res.text, ['bernice', 'bernard']);
                assert.equal(res.header['content-type'], 'application/json');
            });
    });
});