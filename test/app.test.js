const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('Pirates API', () => {

    it.skip('gets pirate names as JSON', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(res => {
                assert.equal(res.json, ['bernice', 'bernard']);
            });      
    });

    it.skip('returns penguin JSON object', () => {

    });

    it.skip('returns just the name', () => {

    });

    it.skip('returns tracks covered message on mistake path', () => {

    });

    it.skip('responds with a 404 error', () => {

    });




});