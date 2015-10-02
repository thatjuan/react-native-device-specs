/**
 * @providesModule RNDeviceSpecs
 * @flow
 */
'use strict';

var NativeRNDeviceSpecs = require('NativeModules').RNDeviceSpecs;
var invariant = require('invariant');

/**
 * High-level docs for the RNDeviceSpecs iOS API can be written here.
 */

var RNDeviceSpecs = {
  deviceInfo: function(cb) {
    NativeRNDeviceSpecs.deviceInfo(cb);
  }
};

module.exports = RNDeviceSpecs.deviceInfo;
