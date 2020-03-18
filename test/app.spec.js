const app = require('../src/app');

describe('App', () => {
  it('GET /api responds with 200 containing "Hello, Image Recipe Server!"', () => {
    return supertest(app)
      .get('/api')
      .expect(200, 'Hello, Image Recipe Server!');
  });
});

describe('Upload Endpoint', () => {
  const route = '/api/upload';

  describe('POST /api/upload', () => {
    it('responds with 400 when no file is uploaded or image url provided', () => {
      return supertest(app)
        .post(route)
        .expect(400, { err: 'No file uploaded or image url' });
    });
  });
});
