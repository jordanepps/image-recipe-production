const app = require('../src/app');

describe('App', () => {
  it('GET / responds with 200 containing "Hello, Image Recipe Server!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, Image Recipe Server!');
  });
});
