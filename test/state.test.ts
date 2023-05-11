import { request, toMatchInvalidHeaderParameterError } from './helper';

describe('POST /osc/state', () => {
  it('should respond with state', async () => {
    const res = await request().post('/osc/state').expect(200);
    expect(res.body).toMatchSnapshot();
  });
});

describe('THETA X POST /osc/state', () => {
  it('should respond with state', async () => {
    const res = await request()
      .post('/osc/state')
      .set('emulating-theta-model', 'x')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });
});

describe('THETA Z1 POST /osc/state', () => {
  it('should respond with state', async () => {
    const res = await request()
      .post('/osc/state')
      .set('emulating-theta-model', 'z1')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });
});

describe('Unknown Type POST /osc/state', () => {
  it('should respond invalidHeaderParameterError', async () => {
    const res = await request()
      .post('/osc/state')
      .set('emulating-theta-model', 'unknown')
      .expect(400);
    toMatchInvalidHeaderParameterError(res);
  });
});
