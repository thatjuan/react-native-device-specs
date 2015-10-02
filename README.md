# RNDeviceSpecs

RNDeviceSpecs detects the specifications of the device it is running on.  Requiring or importing the module will give you an object with properties that describe the user's device.

### Add it to your project
1. `npm install react-native-device-specs --save`
2. Open your project in XCode, right click on `Libraries`, click `Add files to (Your Project Name)`, and select `RNDeviceSpecs.xcodeproj`
3. Add `libRNDeviceSpecs.a` to `Build Phases` --> `Link Binary With Libraries`
4. Use `import specs from 'react-native-device-specs'` or `var specs = require('react-native-device-specs')` in your project!

### Properties
- `platform:` The platform code.
- `actualDiskSpace:` The actual size of the disk.
- `storage:` The best guess for the advertised size of the disk.
- `carrier:` The carrier of device or `'No Carrier'` for Simulators or Devices without a carrier.
- `formalName:` The formal name of the device. e.g. 'iPhone 5S (GSM)', 'iPhone 5S (GSM+CDMA)'.
- `name:` The standard name for the device. e.g. 'iPhone 5s'.
- `possibleColors:` The colors that this device comes in.

### Contributing
Feel free to submit a pull request with feature suggestions or device updates.  Please maintain a consistent syntax for new devices (See lib/iosModels.js for examples)
