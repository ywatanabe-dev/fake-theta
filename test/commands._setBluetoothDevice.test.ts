import {
  request,
  toMatchInvalidHeaderParameterError,
  toMatchMissingParameterError,
  toMatchUnknownCommandError,
} from './helper';

describe('POST /osc/commands/execute _setBluetoothDevice', () => {
  it('should respond unknownCommandError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._setBluetoothDevice',
        parameters: { uuid: '00000000-0000-0000-0000-000000000000' },
      })
      .expect(400);
    toMatchUnknownCommandError(res);
  });
});

describe('THETA X POST /osc/commands/execute _setBluetoothDevice', () => {
  it('should respond unknownCommandError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._setBluetoothDevice',
        parameters: { uuid: '00000000-0000-0000-0000-000000000000' },
      })
      .set('emulating-theta-model', 'x')
      .expect(400);
    toMatchUnknownCommandError(res);
  });
});

describe('THETA Z1 POST /osc/commands/execute _setBluetoothDevice', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._setBluetoothDevice',
        parameters: { uuid: '00000000-0000-0000-0000-000000000000' },
      })
      .set('emulating-theta-model', 'z1')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._setBluetoothDevice',
        parameters: { fileUri: 'dummy' },
      })
      .set('emulating-theta-model', 'z1')
      .expect(400);
    toMatchMissingParameterError(res);
  });
});

describe('Unknown Type POST /osc/commands/execute _setBluetoothDevice', () => {
  it('should respond invalidHeaderParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._setBluetoothDevice',
        parameters: { uuid: '00000000-0000-0000-0000-000000000000' },
      })
      .set('emulating-theta-model', 'unknown')
      .expect(400);
    toMatchInvalidHeaderParameterError(res);
  });
});
