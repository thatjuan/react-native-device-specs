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
  platform: NativeRNDeviceSpecs.platform,
  diskSpace: NativeRNDeviceSpecs.diskSpace,
  carrier: NativeRNDeviceSpecs.carrier
};

module.exports = RNDeviceSpecs;
