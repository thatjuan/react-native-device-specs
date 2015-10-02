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

var platform = NativeRNDeviceSpecs.platform,
  diskSpace = NativeRNDeviceSpecs.diskSpace,
  carrier = NativeRNDeviceSpecs.carrier;

var RNDeviceSpecs = {
  platform,
  diskSpace,
  carrier
};

module.exports = RNDeviceSpecs;
