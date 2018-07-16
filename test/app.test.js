const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
// const app = require('../lib/app');
chai.use(chaiHttp);

describe('Pirates API', () => {

    it('returns JSON pirate names', () => {
        assert.isOk(false, 'time to write your first test!');
        return chai.request(app)
       
    });
});