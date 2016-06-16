import { NativeModules } from 'react-native';
import closestSize from './closest-size';

const NativeSpecs = NativeModules.RNDeviceSpecs;
const diskSpace = parseFloat(NativeSpecs.diskSpace);

export const RNDeviceSpecs = {
  storageSize: closestSize(diskSpace),
  diskSpace,
  carrier: NativeSpecs.carrier,
  platform: NativeSpecs.platform
};

module.exports = RNDeviceSpecs;
