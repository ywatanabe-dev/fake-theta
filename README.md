# Fake THETA

Fake THETA is a [RICOH THETA Web APIs](https://github.com/ricohapi/theta-api-specs) simulator.
It can be used for testing applications that work with THETA Web APIs.
You can switch from which model you get the responses of web APIs.
Fake THETA supports the following models of THETA:

- THETA X
- THETA Z1

## Features

Fake THETA provides fake responses (fixed values) for the following Web APIs.
See [THETA API Specifications](https://github.com/ricohapi/theta-api-specs) for details of each API.

Please note that Fake THETA returns a JPEG file with `content-type:image/jpeg` while the actual THETA device returns MotionJPEG frames with `content-type:multipart/x-mixed-replace` when calling `camera.getLivePreview` API.

### Protocols

- [CheckForUpdates](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/protocols/check_for_updates.md)
- [Commands/Execute](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/protocols/commands_execute.md)
- [Commands/Status](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/protocols/commands_status.md)
- [Info](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/protocols/info.md)
- [State](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/protocols/state.md)

### Commands

- [camera.\_cancelVideoConvert](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._cancel_video_convert.md)
- [camera.\_convertVideoFormats](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._convert_video_formats.md)
- [camera.\_deleteAccessPoint](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._delete_access_point.md)
- [camera.\_deleteMySetting](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._delete_mysetting.md)
- [camera.\_finishWlan](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._finish_wlan.md)
- [camera.\_getMetadata](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._get_metadata.md)
- [camera.\_getMySetting](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._get_my_setting.md)
- [camera.\_getPluginLicense](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._get_plugin_license.md)
- [camera.\_getPluginOrders](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._get_plugin_orders.md)
- [camera.\_listAccessPoints](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._list_access_points.md)
- [camera.\_listPlugins](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._list_plugins.md)
- [camera.\_pluginControl](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._plugin_control.md)
- [camera.\_setAccessPoint](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._set_access_point.md)
- [camera.\_setBluetoothDevice](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._set_bluetooth_device.md)
- [camera.\_setMySetting](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._set_my_setting.md)
- [camera.\_setPlugin](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._set_plugin.md)
- [camera.\_setPluginOrders](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._set_plugin_orders.md)
- [camera.\_stopSelfTimer](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera._stop_self_timer.md)
- [camera.delete](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera.delete.md)
- [camera.getLivePreview](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera.get_live_preview.md)
- [camera.getOptions](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera.get_options.md)
- [camera.listFiles](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera.list_files.md)
- [camera.reset](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera.reset.md)
- [camera.setOptions](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera.set_options.md)
- [camera.startCapture](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera.start_capture.md)
- [camera.stopCapture](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera.stop_capture.md)
- [camera.takePicture](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera.take_picture.md)

## Usage

Fake THETA is implemented as vercel serverless functions deployed on "fake-theta.vercel.app".
You can get the fake responses of RICOH THETA web APIs by setting https://fake-theta.vercel.app
as an endpoint.

***Note: "fake-theta.vercel.app" is an endpoint deployed from the master branch of this repository, so its behavior may change when the master branch is updated.***

In order to specify the model, you can add a header parameter `emulating-theta-model` when sending a Request. If nothing is specified, Fake THETA behaves as THETA X.

Fake THETA only supports required parameters for each command execution. For example, for the [listFiles](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/commands/camera.list_files.md) command, Fake THETA only reads the values of `fileType`, `entryCount`, and `maxThumbSize`.
Non-required parameters are ignored in the current implementation (treated as if they were never entered).

### Examples

- Get /osc/info response (THETA X)

  ```bash
  curl -H "emulating-theta-model:x" https://fake-theta.vercel.app/osc/info
  ```

  ```json
  {
    "api": [
      "/osc/info",
      "/osc/state",
      "/osc/checkForUpdates",
      "/osc/commands/execute",
      "/osc/commands/status"
    ],
    "apiLevel": [2],
    "endpoints": { "httpPort": 80, "httpUpdatesPort": 80 },
    "firmwareVersion": "1.41.0",
    "gps": false,
    "gyro": false,
    "manufacturer": "Ricoh Company, Ltd.",
    "model": "RICOH THETA X",
    "serialNumber": "10100001",
    "supportUrl": "https://theta360.com/en/support/",
    "uptime": 67,
    "_wlanMacAddress": "00:45:78:bc:45:67"
  }
  ```

- Get camera.takePicture response (THETA X)

  ```bash
  curl -X POST -H "emulating-theta-model:x" \
  -H "Content-Type: application/json" \
  -d "{\"name\": \"camera.takePicture\"}" https://fake-theta.vercel.app/osc/commands/execute
  ```

  ```json
  {
    "id": "10",
    "progress": { "completion": 0 },
    "name": "camera.takePicture",
    "state": "inProgress"
  }
  ```

- Get camera.getOptions response (THETA Z1)

  ```bash
  curl -X POST  -H "emulating-theta-model:z1" \
  -H "Content-Type: application/json" \
  -d "{\"name\": \"camera.getOptions\", \"parameters\": {\"optionNames\": [\"fileFormatSupport\"]}}" \
  https://fake-theta.vercel.app/osc/commands/execute
  ```

  ```json
  {
    "name": "camera.getOptions",
    "results": {
      "options": {
        "fileFormatSupport": [
          { "height": 3360, "type": "jpeg", "width": 6720 },
          { "height": 3360, "type": "raw+", "width": 6720 }
        ]
      }
    },
    "state": "done"
  }
  ```

- Get JPG file in the camera

  ```bash
  curl https://fake-theta.vercel.app/files/150100525831424d42075b53ce68c300/100RICOH/R0010015.JPG \
  > ~/R0010015.JPG
  ```

## TODO

- [ ] Support dynamic responses simulation according to internal states of the camera
- [ ] Support completely-reproduced error responses for each model
- [ ] Add parameter validation of APIs
- [ ] Support non-required parameters for each command

## License

[MIT License](LICENSE)
