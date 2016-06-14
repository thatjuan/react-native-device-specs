import { NativeModules } from 'react-native';
import closest from './closest';

const NativeSpecs = NativeModules.RNDeviceSpecs;

export const storageOptions = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1028];
export const diskSpace = parseFloat(NativeSpecs.diskSpace);

export const RNDeviceSpecs = {
  storageSize: closest(storageOptions, diskSpace),
  diskSpace,
  carrier: NativeSpecs.carrier,
  platform: NativeSpecs.platform
};

module.exports = RNDeviceSpecs;
