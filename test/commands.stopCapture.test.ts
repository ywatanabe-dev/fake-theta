import { request, toMatchInvalidHeaderParameterError } from './helper';

describe('POST /osc/commands/execute stopCapture', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera.stopCapture' })
      .expect(200);
    expect(res.body).toMatchSnapshot({
      results: {
        fileUrls: [
          expect.stringMatching(/^(http|https):\/\/.+\/.+\/.+\/.+\.JPG/),
        ],
      },
    });
  });
});

describe('THETA X POST /osc/commands/execute stopCapture', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera.stopCapture' })
      .set('emulating-theta-model', 'x')
      .expect(200);
    expect(res.body).toMatchSnapshot({
      results: {
        fileUrls: [
          expect.stringMatching(/^(http|https):\/\/.+\/.+\/.+\/.+\.JPG/),
        ],
      },
    });
  });
});

describe('THETA Z1 POST /osc/commands/execute stopCapture', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera.stopCapture' })
      .set('emulating-theta-model', 'z1')
      .expect(200);
    expect(res.body).toMatchSnapshot({
      results: {
        fileUrls: [
          expect.stringMatching(/^(http|https):\/\/.+\/.+\/.+\/.+\/.+\.JPG/),
        ],
      },
    });
  });
});

describe('Unknown Type POST /osc/commands/execute stopCapture', () => {
  it('should respond invalidHeaderParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera.stopCapture' })
      .set('emulating-theta-model', 'unknown')
      .expect(400);
    toMatchInvalidHeaderParameterError(res);
  });
});
