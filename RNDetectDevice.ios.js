/**
 * @providesModule RNDetectDevice
 * @flow
 */
'use strict';

var NativeRNDetectDevice = require('NativeModules').RNDetectDevice;
var invariant = require('invariant');

/**
 * High-level docs for the RNDetectDevice iOS API can be written here.
 */

var RNDetectDevice = {
  deviceInfo: function(cb) {
    NativeRNDetectDevice.deviceInfo(cb);
  }
};

module.exports = RNDetectDevice.deviceInfo;
