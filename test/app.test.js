const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
// const app = require('../lib/app');
chai.use(chaiHttp);

describe('Pirates API', () => {

    it('write a test...', () => {
        assert.isOk(false, 'time to write your first test!');
        // return chai.request(app)
        // ...
    });
});