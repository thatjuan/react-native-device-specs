import { NativeModules } from 'react-native';
import closestSize from './closest-size';

const NativeSpecs = NativeModules.RNDeviceSpecs;
const diskTotalBytes = parseFloat(NativeSpecs.diskTotalBytes);
const diskAvailableBytes = parseFloat(NativeSpecs.diskAvailableBytes);
const diskUsedBytes = parseFloat(NativeSpecs.diskUsedBytes);

//TODO: Refactor Android native source.
export const RNDeviceSpecs = {
  storageSize: closestSize(diskTotalBytes/1000000),
  diskTotalBytes,
  diskAvailableBytes,
  diskUsedBytes,
  carrier: NativeSpecs.carrier,
  platform: NativeSpecs.platform
};

module.exports = RNDeviceSpecs;
