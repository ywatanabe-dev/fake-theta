import {
  request,
  toMatchInvalidHeaderParameterError,
  toMatchMissingParameterError,
} from './helper';

describe('POST /osc/commands/execute delete', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.delete',
        parameters: {
          fileUrls: ['http://192.168.1.1/files/100RICOH/R0010015.JPG'],
        },
      })
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.delete',
        parameters: { fileUri: 'dummy' },
      })
      .expect(400);
    toMatchMissingParameterError(res);
  });
});

describe('THETA X POST /osc/commands/execute delete', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.delete',
        parameters: {
          fileUrls: ['http://192.168.1.1/files/100RICOH/R0010015.JPG'],
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
        name: 'camera.delete',
        parameters: { fileUri: 'dummy' },
      })
      .set('emulating-theta-model', 'x')
      .expect(400);
    toMatchMissingParameterError(res);
  });
});

describe('THETA Z1 POST /osc/commands/execute delete', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.delete',
        parameters: {
          fileUrls: [
            'http://192.168.1.1/files/150100525831424d42075b53ce68c300/100RICOH/R0010015.JPG',
          ],
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
        name: 'camera.delete',
        parameters: { fileUri: 'dummy' },
      })
      .set('emulating-theta-model', 'z1')
      .expect(400);
    toMatchMissingParameterError(res);
  });
});

describe('Unknown Type POST /osc/commands/execute delete', () => {
  it('should respond invalidHeaderParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.delete',
        parameters: {
          fileUrls: ['dummy'],
        },
      })
      .set('emulating-theta-model', 'unknown')
      .expect(400);
    toMatchInvalidHeaderParameterError(res);
  });
});
