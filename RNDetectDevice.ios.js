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
  deviceInfo: function() {
    NativeRNDetectDevice.deviceInfo();
  }
};

module.exports = RNDetectDevice.deviceInfo;
