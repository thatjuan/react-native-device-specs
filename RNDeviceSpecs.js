/**
 * Stub of RNDeviceSpecs for Android.
 *
 * @providesModule RNDeviceSpecs
 * @flow
 */
'use strict';

var NativeSpecs = require("NativeModules").RNDeviceSpecs;

var RNDeviceSpecs = {
  diskSpace: NativeSpecs.diskSpace,
  carrier: NativeSpecs.carrier,
  platform: NativeSpecs.platform
};

module.exports = RNDeviceSpecs;
