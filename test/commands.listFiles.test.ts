import { request, toMatchMissingParameterError } from './helper';

describe('POST /osc/commands/execute listFiles', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.listFiles',
        parameters: { fileType: 'image', entryCount: 3, maxThumbSize: 640 },
      })
      .expect(200);
    expect(res.body.results.totalEntries).toEqual(10);
    res.body.results.entries.map((entry: unknown) => {
      expect(entry).toMatchSnapshot({
        dateTime: expect.stringMatching(
          /^[0-9]{4}(:[0-9]{2}){2} [0-9]{2}(:[0-9]{2}){2}/,
        ),
        _favorite: expect.any(Boolean),
        fileUrl: expect.stringMatching(/^(http|https):\/\/.+\/.+\/.+\/.+\.JPG/),
        isProcessed: expect.any(Boolean),
        name: expect.any(String),
        previewUrl: expect.any(String),
        size: expect.any(Number),
      });
    });
  });

  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.listFiles',
        parameters: { fileType: 'image', entryCount: 3, maxThumbSize: 0 },
      })
      .expect(200);
    expect(res.body.results.totalEntries).toEqual(10);
    res.body.results.entries.map((entry: unknown) => {
      expect(entry).toMatchSnapshot({
        dateTime: expect.stringMatching(
          /^[0-9]{4}(:[0-9]{2}){2} [0-9]{2}(:[0-9]{2}){2}/,
        ),
        _favorite: expect.any(Boolean),
        fileUrl: expect.any(String),
        isProcessed: expect.any(Boolean),
        name: expect.any(String),
        previewUrl: expect.any(String),
        size: expect.any(Number),
      });
    });
  });

  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.listFiles',
        parameters: { fileType: 'video', entryCount: 3, maxThumbSize: 640 },
      })
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera.listFiles', parameters: {} })
      .expect(400);
    toMatchMissingParameterError(res);
  });
});

describe('THETA X POST /osc/commands/execute listFiles', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.listFiles',
        parameters: { fileType: 'image', entryCount: 3, maxThumbSize: 640 },
      })
      .set('emulating-theta-model', 'x')
      .expect(200);
    expect(res.body.results.totalEntries).toEqual(10);
    res.body.results.entries.map((entry: unknown) => {
      expect(entry).toMatchSnapshot({
        dateTime: expect.stringMatching(
          /^[0-9]{4}(:[0-9]{2}){2} [0-9]{2}(:[0-9]{2}){2}/,
        ),
        _favorite: expect.any(Boolean),
        fileUrl: expect.any(String),
        isProcessed: expect.any(Boolean),
        name: expect.any(String),
        previewUrl: expect.any(String),
        size: expect.any(Number),
      });
    });
  });

  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.listFiles',
        parameters: { fileType: 'image', entryCount: 3, maxThumbSize: 0 },
      })
      .set('emulating-theta-model', 'x')
      .expect(200);
    expect(res.body.results.totalEntries).toEqual(10);
    res.body.results.entries.map((entry: unknown) => {
      expect(entry).toMatchSnapshot({
        dateTime: expect.stringMatching(
          /^[0-9]{4}(:[0-9]{2}){2} [0-9]{2}(:[0-9]{2}){2}/,
        ),
        _favorite: expect.any(Boolean),
        fileUrl: expect.any(String),
        isProcessed: expect.any(Boolean),
        name: expect.any(String),
        previewUrl: expect.any(String),
        size: expect.any(Number),
      });
    });
  });

  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.listFiles',
        parameters: { fileType: 'video', entryCount: 3, maxThumbSize: 640 },
      })
      .set('emulating-theta-model', 'x')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera.listFiles', parameters: {} })
      .set('emulating-theta-model', 'x')
      .expect(400);
    toMatchMissingParameterError(res);
  });
});

describe('THETA Z1 POST /osc/commands/execute listFiles', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.listFiles',
        parameters: { fileType: 'image', entryCount: 3, maxThumbSize: 640 },
      })
      .set('emulating-theta-model', 'z1')
      .expect(200);
    expect(res.body.results.totalEntries).toEqual(10);
    res.body.results.entries.map((entry: unknown) => {
      expect(entry).toMatchSnapshot({
        dateTimeZone: expect.stringMatching(
          /^[0-9]{4}(:[0-9]{2}){2} [0-9]{2}(:[0-9]{2}){2}[+-][0-9]{2}:[0-9]{2}/,
        ),
        fileUrl: expect.stringMatching(
          /^(http|https):\/\/.+\/.+\/.+\/.+\/.+\.JPG/,
        ),
        height: expect.any(Number),
        isProcessed: expect.any(Boolean),
        name: expect.any(String),
        previewUrl: expect.any(String),
        _projectionType: expect.stringMatching(
          /^(Equirectangular|Dual-Fisheye)/,
        ),
        size: expect.any(Number),
        _thumbSize: expect.any(Number),
        thumbnail: expect.any(String),
        width: expect.any(Number),
      });
    });
  });

  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.listFiles',
        parameters: { fileType: 'image', entryCount: 3, maxThumbSize: 0 },
      })
      .set('emulating-theta-model', 'z1')
      .expect(200);
    expect(res.body.results.totalEntries).toEqual(10);
    res.body.results.entries.map((entry: unknown) => {
      expect(entry).toMatchSnapshot({
        dateTimeZone: expect.stringMatching(
          /^[0-9]{4}(:[0-9]{2}){2} [0-9]{2}(:[0-9]{2}){2}[+-][0-9]{2}:[0-9]{2}/,
        ),
        fileUrl: expect.stringMatching(
          /^(http|https):\/\/.+\/.+\/.+\/.+\/.+\.JPG/,
        ),
        height: expect.any(Number),
        isProcessed: expect.any(Boolean),
        name: expect.any(String),
        previewUrl: expect.any(String),
        _projectionType: expect.stringMatching(
          /^(Equirectangular|Dual-Fisheye)/,
        ),
        size: expect.any(Number),
        _thumbSize: expect.any(Number),
        width: expect.any(Number),
      });
    });
  });

  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.listFiles',
        parameters: { fileType: 'video', entryCount: 3, maxThumbSize: 640 },
      })
      .set('emulating-theta-model', 'z1')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera.listFiles', parameters: {} })
      .set('emulating-theta-model', 'z1')
      .expect(400);
    toMatchMissingParameterError(res);
  });
});
