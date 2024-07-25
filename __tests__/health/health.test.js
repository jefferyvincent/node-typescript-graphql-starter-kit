import request from 'supertest';
import app from '../../src/app';

describe('health', () => {
  it('should return 200', done => {
    request(app)
      .get('/health')
      .expect(200)
      .end((err, { status }) => {
        if (err) throw err;
        expect(status).toBe(200);
        done();
      });
  }, 10000);

  it('should return 404', done => {
    request(app)
      .get('/bad-url')
      .expect(404)
      .end((err, { status }) => {
        if (err) throw err;
        expect(status).toBe(404);
        done();
      });
  }, 10000);
});