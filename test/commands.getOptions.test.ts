import {
  request,
  toMatchInvalidHeaderParameterError,
  toMatchInvalidParameterNameError,
  toMatchMissingParameterError,
} from './helper';

describe('POST /osc/commands/execute getOptions', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.getOptions',
        parameters: {
          optionNames: [
            '_aiAutoThumbnail',
            '_autoBracket',
            '_bitrate',
            '_bluetoothPower',
            '_cameraControlSource',
            '_cameraMode',
            '_colorTemperature',
            '_faceDetect',
            '_filter',
            '_function',
            '_gain',
            '_gpsTagRecording',
            '_imageStitching',
            '_language',
            '_latestEnabledExposureDelayTime',
            '_maxRecordableTime',
            '_microphone',
            '_microphoneChannel',
            '_networkType',
            '_powerSaving',
            '_shootingMethod',
            '_shutterVolume',
            '_timeShift',
            '_topBottomCorrection',
            '_topBottomCorrectionRotation',
            '_waterHousing',
            '_waterHousingStitching',
            '_wlanFrequency',
            'aperture',
            'captureInterval',
            'captureMode',
            'captureNumber',
            'clientVersion',
            'continuousNumber',
            'dateTimeZone',
            'exposureCompensation',
            'exposureDelay',
            'exposureProgram',
            'fileFormat',
            'gpsInfo',
            'iso',
            'isoAutoHighLimit',
            'offDelay',
            'previewFormat',
            'remainingPictures',
            'remainingSpace',
            'remainingVideoSeconds',
            'shutterSpeed',
            'sleepDelay',
            'totalSpace',
            'videoStitching',
            'whiteBalance',
            '_aiAutoThumbnailSupport',
            '_bitrateSupport',
            '_bluetoothPowerSupport',
            '_bracketNumberSupport',
            '_cameraControlSourceSupport',
            '_cameraModeSupport',
            '_colorTemperatureSupport',
            '_faceDetectSupport',
            '_filterSupport',
            '_functionSupport',
            '_gainSupport',
            '_gpsTagRecordingSupport',
            '_imageStitchingSupport',
            '_languageSupport',
            '_maxRecordableTimeSupport',
            '_microphoneChannelSupport',
            '_microphoneSupport',
            '_networkTypeSupport',
            '_powerSavingSupport',
            '_shootingMethodSupport',
            '_shutterVolumeSupport',
            '_timeShiftSupport',
            '_topBottomCorrectionRotationSupport',
            '_topBottomCorrectionSupport',
            '_waterHousingStitchingSupport',
            '_waterHousingSupport',
            '_wlanFrequencySupport',
            'apertureSupport',
            'captureIntervalSupport',
            'captureModeSupport',
            'captureNumberSupport',
            'continuousNumberSupport',
            'exposureCompensationSupport',
            'exposureDelaySupport',
            'exposureProgramSupport',
            'fileFormatSupport',
            'isoAutoHighLimitSupport',
            'isoSupport',
            'offDelaySupport',
            'previewFormatSupport',
            'shutterSpeedSupport',
            'sleepDelaySupport',
            'videoStitchingSupport',
            'whiteBalanceSupport',
          ],
        },
      })
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera.getOptions', parameters: { session: 'dummy' } })
      .expect(400);
    toMatchMissingParameterError(res);
  });

  it('should respond invalidParameterNameError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.getOptions',
        parameters: {
          optionNames: ['fileFormatSupport', '_filter', 'captureMode', 'dummy'],
        },
      })
      .expect(400);
    toMatchInvalidParameterNameError(res);
  });
});

describe('THETA X POST /osc/commands/execute getOptions', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.getOptions',
        parameters: {
          optionNames: [
            '_aiAutoThumbnail',
            '_autoBracket',
            '_bitrate',
            '_bluetoothPower',
            '_cameraControlSource',
            '_cameraMode',
            '_colorTemperature',
            '_faceDetect',
            '_filter',
            '_function',
            '_gain',
            '_gpsTagRecording',
            '_imageStitching',
            '_language',
            '_latestEnabledExposureDelayTime',
            '_maxRecordableTime',
            '_microphone',
            '_microphoneChannel',
            '_networkType',
            '_powerSaving',
            '_shootingMethod',
            '_shutterVolume',
            '_timeShift',
            '_topBottomCorrection',
            '_topBottomCorrectionRotation',
            '_waterHousing',
            '_waterHousingStitching',
            '_wlanFrequency',
            'aperture',
            'captureInterval',
            'captureMode',
            'captureNumber',
            'clientVersion',
            'continuousNumber',
            'dateTimeZone',
            'exposureCompensation',
            'exposureDelay',
            'exposureProgram',
            'fileFormat',
            'gpsInfo',
            'iso',
            'isoAutoHighLimit',
            'offDelay',
            'previewFormat',
            'remainingPictures',
            'remainingSpace',
            'remainingVideoSeconds',
            'shutterSpeed',
            'sleepDelay',
            'totalSpace',
            'videoStitching',
            'whiteBalance',
            '_aiAutoThumbnailSupport',
            '_bitrateSupport',
            '_bluetoothPowerSupport',
            '_bracketNumberSupport',
            '_cameraControlSourceSupport',
            '_cameraModeSupport',
            '_colorTemperatureSupport',
            '_faceDetectSupport',
            '_filterSupport',
            '_functionSupport',
            '_gainSupport',
            '_gpsTagRecordingSupport',
            '_imageStitchingSupport',
            '_languageSupport',
            '_maxRecordableTimeSupport',
            '_microphoneChannelSupport',
            '_microphoneSupport',
            '_networkTypeSupport',
            '_powerSavingSupport',
            '_shootingMethodSupport',
            '_shutterVolumeSupport',
            '_timeShiftSupport',
            '_topBottomCorrectionRotationSupport',
            '_topBottomCorrectionSupport',
            '_waterHousingStitchingSupport',
            '_waterHousingSupport',
            '_wlanFrequencySupport',
            'apertureSupport',
            'captureIntervalSupport',
            'captureModeSupport',
            'captureNumberSupport',
            'continuousNumberSupport',
            'exposureCompensationSupport',
            'exposureDelaySupport',
            'exposureProgramSupport',
            'fileFormatSupport',
            'isoAutoHighLimitSupport',
            'isoSupport',
            'offDelaySupport',
            'previewFormatSupport',
            'shutterSpeedSupport',
            'sleepDelaySupport',
            'videoStitchingSupport',
            'whiteBalanceSupport',
          ],
        },
      })
      .set('emulating-theta-model', 'x')
      .expect(200);
    expect(res.body).toMatchSnapshot();
  });

  it('should respond missingParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({ name: 'camera.getOptions', parameters: { session: 'dummy' } })
      .set('emulating-theta-model', 'x')
      .expect(400);
    toMatchMissingParameterError(res);
  });

  it('should respond invalidParameterNameError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.getOptions',
        parameters: {
          optionNames: ['fileFormatSupport', '_filter', 'captureMode', 'dummy'],
        },
      })
      .set('emulating-theta-model', 'x')
      .expect(400);
    toMatchInvalidParameterNameError(res);
  });
});

describe('THETA Z1 POST /osc/commands/execute getOptions', () => {
  it('should respond with results', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.getOptions',
        parameters: {
          optionNames: [
            '_autoBracket',
            '_bitrate',
            '_bluetoothPower',
            '_bluetoothRole',
            '_burstMode',
            '_burstOption',
            '_colorTemperature',
            '_compositeShootingOutputInterval',
            '_compositeShootingTime',
            '_filter',
            '_function',
            '_gain',
            '_imageStitching',
            '_language',
            '_latestEnabledExposureDelayTime',
            '_maxRecordableTime',
            '_microphone',
            '_microphoneChannel',
            '_networkType',
            //'_shootingMethod', // Only available in my setting mode.
            '_shutterVolume',
            '_timeShift',
            '_topBottomCorrection',
            '_visibilityReduction',
            '_whiteBalanceAutoStrength',
            '_wlanFrequency',
            'aperture',
            'captureInterval',
            'captureMode',
            'captureNumber',
            'clientVersion',
            'dateTimeZone',
            'exposureCompensation',
            'exposureDelay',
            'exposureProgram',
            'fileFormat',
            'gpsInfo',
            'iso',
            'isoAutoHighLimit',
            'offDelay',
            'previewFormat',
            'remainingPictures',
            'remainingSpace',
            'remainingVideoSeconds',
            'shutterSpeed',
            'sleepDelay',
            'totalSpace',
            'videoStitching',
            'whiteBalance',
            '_bitrateSupport',
            '_bluetoothClassicEnableSupport',
            '_bluetoothPowerSupport',
            '_bluetoothRoleSupport',
            '_bracketNumberSupport',
            '_burstModeSupport',
            '_colorTemperatureSupport',
            '_compositeShootingOutputIntervalSupport',
            '_compositeShootingTimeSupport',
            '_filterSupport',
            '_functionSupport',
            '_gainSupport',
            '_imageStitchingSupport',
            '_languageSupport',
            '_maxRecordableTimeSupport',
            '_microphoneChannelSupport',
            '_microphoneSupport',
            '_networkTypeSupport',
            '_shootingMethodSupport',
            '_shutterVolumeSupport',
            '_timeShiftSupport',
            '_topBottomCorrectionSupport',
            '_visibilityReductionSupport',
            '_whiteBalanceAutoStrengthSupport',
            '_wlanFrequencySupport',
            'apertureSupport',
            'captureIntervalSupport',
            'captureModeSupport',
            'captureNumberSupport',
            'exposureCompensationSupport',
            'exposureDelaySupport',
            'exposureProgramSupport',
            'fileFormatSupport',
            'isoAutoHighLimitSupport',
            'isoSupport',
            'offDelaySupport',
            'previewFormatSupport',
            'shutterSpeedSupport',
            'sleepDelaySupport',
            'videoStitchingSupport',
            'whiteBalanceSupport',
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
      .send({ name: 'camera.getOptions', parameters: { session: 'dummy' } })
      .set('emulating-theta-model', 'z1')
      .expect(400);
    toMatchMissingParameterError(res);
  });

  it('should respond invalidParameterNameError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.getOptions',
        parameters: {
          optionNames: ['fileFormatSupport', '_filter', 'captureMode', 'dummy'],
        },
      })
      .set('emulating-theta-model', 'z1')
      .expect(400);
    toMatchInvalidParameterNameError(res);
  });
});

describe('Unknown Type POST /osc/commands/execute getOptions', () => {
  it('should respond invalidHeaderParameterError', async () => {
    const res = await request()
      .post('/osc/commands/execute')
      .send({
        name: 'camera.getOptions',
        parameters: {
          optionNames: ['fileFormatSupport', '_filter', 'captureMode', 'dummy'],
        },
      })
      .set('emulating-theta-model', 'unknown')
      .expect(400);
    toMatchInvalidHeaderParameterError(res);
  });
});
