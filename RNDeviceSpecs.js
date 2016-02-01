/**
 * Stub of RNDeviceSpecs for Android.
 *
 * @providesModule RNDeviceSpecs
 * @flow
 */
'use strict';
import { NativeModules } from 'react-native';
var NativeSpecs = NativeModules.RNDeviceSpecs;

var RNDeviceSpecs = {
  diskSpace: parseFloat(NativeSpecs.diskSpace),
  carrier: NativeSpecs.carrier,
  platform: NativeSpecs.platform
};

module.exports = RNDeviceSpecs;
