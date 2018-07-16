const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = require('chai');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('Penguins API', () => {

    let bernice = {
        name: 'Bernice',
        description: 'What a penguin!',
    };

    let bernard = {
        name: 'Bernard',
        description: 'What a penguin!',
    };

    it('GET /api/penguins', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(({ body }) => {
                assert.deepEqual(body, [bernice, bernard])
            });
    });
});