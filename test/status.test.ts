import {
  request,
  toMatchInvalidHeaderParameterError,
  toMatchInvalidParameterValueError,
} from './helper';

describe('POST /osc/commands/status', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/status')
      .send({
        id: '10',
      })
      .expect(200);
    expect(res.body).toMatchSnapshot({
      results: {
        fileUrl: expect.stringMatching(/^(http|https):\/\/.+\/.+\/.+\/.+\.JPG/),
      },
    });
  });

  it('should respond invalidParameterValue', async () => {
    const res = await request()
      .post('/osc/commands/status')
      .send({
        fileUri: 'dummy',
      })
      .expect(400);
    toMatchInvalidParameterValueError(res);
  });
});

describe('THETA X POST /osc/commands/status', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/status')
      .send({
        id: '10',
      })
      .set('emulating-theta-model', 'x')
      .expect(200);
    expect(res.body).toMatchSnapshot({
      results: {
        fileUrl: expect.stringMatching(/^(http|https):\/\/.+\/.+\/.+\/.+\.JPG/),
      },
    });
  });

  it('should respond invalidParameterValue', async () => {
    const res = await request()
      .post('/osc/commands/status')
      .send({
        fileUri: 'dummy',
      })
      .set('emulating-theta-model', 'x')
      .expect(400);
    toMatchInvalidParameterValueError(res);
  });
});

describe('THETA Z1 POST /osc/commands/status', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/status')
      .send({
        id: '10',
      })
      .set('emulating-theta-model', 'z1')
      .expect(200);
    expect(res.body).toMatchSnapshot({
      results: {
        fileUrl: expect.stringMatching(
          /^(http|https):\/\/.+\/.+\/.+\/.+\/.+\.JPG/,
        ),
      },
    });
  });

  it('should respond invalidParameterValue', async () => {
    const res = await request()
      .post('/osc/commands/status')
      .send({
        fileUri: 'dummy',
      })
      .set('emulating-theta-model', 'z1')
      .expect(400);
    toMatchInvalidParameterValueError(res);
  });
});

describe('Unknown Type POST /osc/commands/status', () => {
  it('should respond invalidHeaderParameterError', async () => {
    const res = await request()
      .post('/osc/commands/status')
      .send({
        id: '10',
      })
      .set('emulating-theta-model', 'unknown')
      .expect(400);
    toMatchInvalidHeaderParameterError(res);
  });
});
