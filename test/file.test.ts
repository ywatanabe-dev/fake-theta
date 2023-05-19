import { request } from './helper';

describe('THETA X GET a path of file', () => {
  it('should respond with file', async () => {
    await request().get('/files/100RICOH/R0010015.JPG').expect(200);
  });
});

describe('THETA Z1 GET a path of file', () => {
  it('should respond with file', async () => {
    await request()
      .get('/files/150100525831424d42075b53ce68c300/100RICOH/R0010015.JPG')
      .expect(200);
  });
});

describe('THETA GET incorrect path files', () => {
  it('should respond 400 error', async () => {
    await request().get('/files/R0010015.JPG').expect(400);
  });

  it('should respond 400 error', async () => {
    await request()
      .get(
        '/files/error/150100525831424d42075b53ce68c300/100RICOH/R0010015.JPG',
      )
      .expect(400);
  });
});
