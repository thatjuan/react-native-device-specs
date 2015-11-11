/**
 * Stub of RNDeviceSpecs for Android.
 *
 * @providesModule RNDeviceSpecs
 * @flow
 */
'use strict';

var NativeModules = require("NativeModules");

var NativeRNDeviceSpecs = NativeModules.RNDeviceSpecs;
var invariant = require("invariant");


NativeRNDeviceSpecs.getDeviceSpecs(function (err, data) {
  console.log(err, data, "data");
});

var RNDeviceSpecs = {
  actualDiskSpace: NativeRNDeviceSpecs.DISK_SPACE,
  carrier: NativeRNDeviceSpecs.CARRIER,
  name: NativeRNDeviceSpecs.NAME
};

module.exports = RNDeviceSpecs.deviceInfo;
