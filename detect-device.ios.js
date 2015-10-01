/**
 * @providesModule RNDetectDevice
 * @flow
 */
'use strict';

var RNDetectDevice = require('NativeModules').RNDetectDevice;
var invariant = require('invariant');



var deviceInfo = {
  deviceInfo: function() {
    RNDetectDevice.deviceInfo();
  }
};

module.exports = deviceInfo;

