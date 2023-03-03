import {
  request,
  toMatchInvalidHeaderParameterError,
  toMatchUnknownCommandError,
} from './helper';

describe('POST /osc/commands/execute _setPlugin', () => {
  it('should respond unknownCommandError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._setPlugin',
        parameters: {
          boot: 'dummy',
          packageName: 'dummy',
        },
      })
      .expect(400);
    toMatchUnknownCommandError(res);
  });
});

describe('THETA X POST /osc/commands/execute _setPlugin', () => {
  it('should respond unknownCommandError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._setPlugin',
        parameters: {
          boot: 'dummy',
          packageName: 'dummy',
        },
      })
      .set('emulating-theta-model', 'x')
      .expect(400);
    toMatchUnknownCommandError(res);
  });
});

describe('THETA Z1 POST /osc/commands/execute _setPlugin', () => {
  it('should respond unknownCommandError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._setPlugin',
        parameters: {
          boot: 'dummy',
          packageName: 'dummy',
        },
      })
      .set('emulating-theta-model', 'z1')
      .expect(400);
    toMatchUnknownCommandError(res);
  });
});

describe('Unknown Type POST /osc/commands/execute _setPlugin', () => {
  it('should respond invalidHeaderParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._setPlugin',
        parameters: {
          boot: 'dummy',
          packageName: 'dummy',
        },
      })
      .set('emulating-theta-model', 'unknown')
      .expect(400);
    toMatchInvalidHeaderParameterError(res);
  });
});
