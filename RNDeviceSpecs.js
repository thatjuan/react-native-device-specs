/**
 * Stub of RNDeviceSpecs for Android.
 *
 * @providesModule RNDeviceSpecs
 * @flow
 */
'use strict';

var NativeModules = require("NativeModules");

var NativeSpecs = NativeModules.RNDeviceSpecs;

var RNDeviceSpecs = {
  diskSpace: NativeSpecs.diskSpace,
  carrier: NativeSpecs.carrier,
  platform: NativeSpecs.platform
};

module.exports = RNDeviceSpecs.deviceInfo;
