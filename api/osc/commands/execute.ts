import { VercelRequest, VercelResponse } from '@vercel/node';
import { unknownCommandError } from '../../../src/error';
import { execute } from '../../../src/execute';
import { log } from '../../../src/utils/logger';

export default async (
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> => {
  const body = req.body;

  if (body.name === 'camera._cancelVideoConvert') {
    execute._cancelVideoConvert(req, res);
  } else if (body.name === 'camera._convertVideoFormats') {
    execute._convertVideoFormats(req, res);
  } else if (body.name === 'camera._deleteAccessPoint') {
    execute._deleteAccessPoint(req, res);
  } else if (body.name === 'camera._deleteMySetting') {
    execute._deleteMySetting(req, res);
  } else if (body.name === 'camera._finishWlan') {
    execute._finishWlan(req, res);
  } else if (body.name === 'camera._getMetadata') {
    execute._getMetadata(req, res);
  } else if (body.name === 'camera._getMySetting') {
    execute._getMySetting(req, res);
  } else if (body.name === 'camera._getPluginLicense') {
    execute._getPluginLicense(req, res);
  } else if (body.name === 'camera._getPluginOrders') {
    execute._getPluginOrders(req, res);
  } else if (body.name === 'camera._listAccessPoints') {
    execute._listAccessPoints(req, res);
  } else if (body.name === 'camera._listPlugins') {
    execute._listPlugins(req, res);
  } else if (body.name === 'camera._pluginControl') {
    execute._pluginControl(req, res);
  } else if (body.name === 'camera._setAccessPoint') {
    execute._setAccessPoint(req, res);
  } else if (body.name === 'camera._setBluetoothDevice') {
    execute._setBluetoothDevice(req, res);
  } else if (body.name === 'camera._setMySetting') {
    execute._setMySetting(req, res);
  } else if (body.name === 'camera._setPlugin') {
    execute._setPlugin(req, res);
  } else if (body.name === 'camera._setPluginOrders') {
    execute._setPluginOrders(req, res);
  } else if (body.name === 'camera._stopSelfTimer') {
    execute._stopSelfTimer(req, res);
  } else if (body.name === 'camera.delete') {
    execute._delete(req, res);
  } else if (body.name === 'camera.getLivePreview') {
    execute.getLivePreview(req, res);
  } else if (body.name === 'camera.getOptions') {
    execute.getOptions(req, res);
  } else if (body.name === 'camera.listFiles') {
    execute.listFiles(req, res);
  } else if (body.name === 'camera.reset') {
    execute.reset(req, res);
  } else if (body.name === 'camera.setOptions') {
    execute.setOptions(req, res);
  } else if (body.name === 'camera.startCapture') {
    execute.startCapture(req, res);
  } else if (body.name === 'camera.stopCapture') {
    execute.stopCapture(req, res);
  } else if (body.name === 'camera.takePicture') {
    execute.takePicture(req, res);
  } else {
    unknownCommandError(res);
  }

  log(req, res);
};
