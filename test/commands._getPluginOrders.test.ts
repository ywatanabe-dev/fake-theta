import { request, toMatchInvalidHeaderParameterError } from './helper';

describe('POST /osc/commands/execute _getPluginOrders', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera._getPluginOrders' })
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });
});

describe('THETA X POST /osc/commands/execute _getPluginOrders', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera._getPluginOrders' })
      .set('emulating-theta-model', 'x')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });
});

describe('THETA Z1 /osc/commands/execute _getPluginOrders', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera._getPluginOrders' })
      .set('emulating-theta-model', 'z1')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });
});

describe('Unknown Type POST /osc/commands/execute _getPluginOrders', () => {
  it('should respond invalidHeaderParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera._getPluginOrders' })
      .set('emulating-theta-model', 'unknown')
      .expect(400);
    toMatchInvalidHeaderParameterError(res);
  });
});
