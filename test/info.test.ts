import { request, toMatchInvalidHeaderParameterError } from './helper';

describe('GET /osc/info', () => {
  it('should respond with info', async () => {
    const res = await request().get('/osc/info').expect(200);
    expect(res.body).toMatchSnapshot();
  });
});

describe('THETA X GET /osc/info', () => {
  it('should respond with info', async () => {
    const res = await request()
      .get('/osc/info')
      .set('emulating-theta-model', 'x')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });
});

describe('THETA Z1 GET /osc/info', () => {
  it('should respond with info', async () => {
    const res = await request()
      .get('/osc/info')
      .set('emulating-theta-model', 'z1')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });
});

describe('Unknown Type GET /osc/info', () => {
  it('should respond invalidHeaderParameterError', async () => {
    const res = await request()
      .get('/osc/info')
      .set('emulating-theta-model', 'unknown')
      .expect(400);
    toMatchInvalidHeaderParameterError(res);
  });
});
