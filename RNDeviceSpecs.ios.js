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

var platform = NativeRNDeviceSpecs.platform;
var model = require("./lib/iosModels")[platform];
var storage = require("./lib/closestModelSize")(model, NativeRNDeviceSpecs);

var RNDeviceSpecs = {
  platform: platform,
  actualDiskSpace: NativeRNDeviceSpecs.diskSpace,
  storage: storage,
  carrier: NativeRNDeviceSpecs.carrier,
  formalName: model.formalName,
  name: model.name,
  possibleColors: model.colors
};

module.exports = RNDeviceSpecs;
