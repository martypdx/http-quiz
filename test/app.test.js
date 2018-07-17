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

    function save(penguin) {
        return chai.request(app)
            .post('/api/penguins')
            .send(penguin)
            .then(({ body }) => {
                penguin.id = body.id;
                assert.deepEqual(body, penguin);
            });
    }

    beforeEach(() => {
        return save(bernice);
    });

    beforeEach(() => {
        return save(bernard);
    });

    it('Saves a penguin', () => {
        assert.ok(bernice.id);
    });

    it('GET /api/penguins', () => {
        return chai.request(app)
            .get('/api/penguins')
            .then(({ body }) => {
                assert.deepEqual(body, [bernice, bernard]);
            });
    });
});