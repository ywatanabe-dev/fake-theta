import {
  request,
  toMatchInvalidHeaderParameterError,
  toMatchMissingParameterError,
} from './helper';

describe('POST /osc/checkForUpdates', () => {
  it('should respond with state', async () => {
    const res = await request()
      .post('/osc/checkForUpdates')
      .send({
        stateFingerprint: 'FIG_0001',
      })
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/checkForUpdates')
      .send({
        fileUri: 'dummy',
      })
      .expect(400);
    toMatchMissingParameterError(res);
  });
});

describe('THETA X POST /osc/checkForUpdates', () => {
  it('should respond with state', async () => {
    const res = await request()
      .post('/osc/checkForUpdates')
      .send({
        stateFingerprint: 'FIG_0001',
      })
      .set('emulating-theta-model', 'x')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/checkForUpdates')
      .send({
        fileUri: 'dummy',
      })
      .set('emulating-theta-model', 'x')
      .expect(400);
    toMatchMissingParameterError(res);
  });
});

describe('THETA Z1 POST /osc/checkForUpdates', () => {
  it('should respond with state', async () => {
    const res = await request()
      .post('/osc/checkForUpdates')
      .send({
        stateFingerprint: 'FIG_0001',
      })
      .set('emulating-theta-model', 'z1')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/checkForUpdates')
      .send({
        fileUri: 'dummy',
      })
      .set('emulating-theta-model', 'x')
      .expect(400);
    toMatchMissingParameterError(res);
  });
});

describe('Unknown Type POST /osc/checkForUpdates', () => {
  it('should respond invalidHeaderParameterError', async () => {
    const res = await request()
      .post('/osc/checkForUpdates')
      .send({
        stateFingerprint: 'FIG_0001',
      })
      .set('emulating-theta-model', 'unknown')
      .expect(400);
    toMatchInvalidHeaderParameterError(res);
  });
});
