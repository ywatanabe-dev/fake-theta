import {
  request,
  toMatchInvalidHeaderParameterError,
  toMatchMissingParameterError,
} from './helper';

describe('POST /osc/commands/execute _getMetadata', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._getMetadata',
        parameters: {
          fileUrl: 'http://192.168.1.1/files/100RICOH/R0010015.JPG',
        },
      })
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._getMetadata',
        parameters: { fileUri: 'dummy' },
      })
      .expect(400);
    toMatchMissingParameterError(res);
  });
});

describe('THETA X POST /osc/commands/execute _getMetadata', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._getMetadata',
        parameters: {
          fileUrl: 'http://192.168.1.1/files/100RICOH/R0010015.JPG',
        },
      })
      .set('emulating-theta-model', 'x')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._getMetadata',
        parameters: { fileUri: 'dummy' },
      })
      .set('emulating-theta-model', 'x')
      .expect(400);
    toMatchMissingParameterError(res);
  });
});

describe('THETA Z1 POST /osc/commands/execute _getMetadata', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._getMetadata',
        parameters: {
          fileUrl:
            'http://192.168.1.1/files/150100525831424d42075b53ce68c300/100RICOH/R0010015.JPG',
        },
      })
      .set('emulating-theta-model', 'z1')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._getMetadata',
        parameters: { fileUri: 'dummy' },
      })
      .set('emulating-theta-model', 'z1')
      .expect(400);
    toMatchMissingParameterError(res);
  });
});

describe('Unknown Type POST /osc/commands/execute _getMySetting', () => {
  it('should respond invalidHeaderParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._getMetadata',
        parameters: { fileUrl: 'dummy' },
      })
      .set('emulating-theta-model', 'unknown')
      .expect(400);
    toMatchInvalidHeaderParameterError(res);
  });
});
