const app = require('../src/app');

describe('App', () => {
  it('GET /api responds with 200 containing "Hello, Image Recipe Server!"', () => {
    return supertest(app)
      .get('/api')
      .expect(200, 'Hello, Image Recipe Server!');
  });
});

describe('Upload Route', () => {
  const route = '/api/upload';
  it('POST /api/upload responds with 400 when no file is uploaded', () => {
    return supertest(app)
      .post(route)
      .expect(400);
  });
});
