import { request } from './helper';

describe('POST /osc/commands/execute getLivePreview', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera.getLivePreview' })
      .expect(200);
    expect(res).toBeTruthy();
  });
});
