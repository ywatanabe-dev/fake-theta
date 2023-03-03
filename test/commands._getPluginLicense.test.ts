import { request, toMatchMissingParameterError } from './helper';

describe('POST /osc/commands/execute _getPluginLicense', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._getPluginLicense',
        parameters: {
          packageName: 'dummy',
        },
      })
      .expect(200);
    expect(res.text).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera._getPluginLicense',
        parameters: { fileUri: 'dummy' },
      })
      .expect(400);
    toMatchMissingParameterError(res);
  });
});
