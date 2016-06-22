# React Native Device Specs

RNDeviceSpecs detects the specifications of the device it is running on.  Requiring or importing the module will give you an object with properties that describe the user's device.

## Add it to your project
### Install
`npm install react-native-device-specs --save`
### iOS
Open your project in XCode, right click on `Libraries`, click `Add files to (Your Project Name)`, and select `RNDeviceSpecs.xcodeproj`

Add `libRNDeviceSpecs.a` to `Build Phases` --> `Link Binary With Libraries`
### Android
In `android/settings.gradle`
below `include ':app'`
add:
```
...
include ':react-native-device-specs'
project(':react-native-device-specs').projectDir = new File(settingsDir, '../node_modules/react-native-device-specs')
```

In `android/app/build.gradle`
```
dependencies {
    ...
    compile project(':react-native-device-specs')
}
```

In `android/app/src/main/java/com/YourProject/MainActivity.java`
add:
```
import com.joinpeach.react.device.specs.*; // <--- add this

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {
    ...

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mReactRootView = new ReactRootView(this);

        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new RNDeviceSpecsModule())           // <- and add this
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        mReactRootView.startReactApplication(mReactInstanceManager, "YourProject", null);

        setContentView(mReactRootView);
    }
}
```
### Use it!
Use `import specs from 'react-native-device-specs'` or `var specs = require('react-native-device-specs')` in your project!

## Properties
- `platform:` The platform code.
- `storageSize:` The quoted storage size (GB) given by Apple (Ex: 32, 64, 128)
- `diskSpace:` The actual size of the disk.
- `carrier:` The carrier of device or `'No Carrier'` for Simulators or Devices without a carrier.


## Contributing
Feel free to submit a pull request with feature suggestions or device updates.  Please maintain a consistent syntax for new devices (See lib/iosModels.js for examples)
