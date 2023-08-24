const assert = require('assert');
const request = require('supertest');
const app = require('../server'); // Importe o seu servidor Express

describe('Testes de Integração', () => {
    it('Deve listar os compromissos existentes', (done) => {
        request(app)
            .get('/api/appointments')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(Array.isArray(res.body), true);
                done();
            });
    });
});
