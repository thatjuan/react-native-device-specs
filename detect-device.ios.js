import { UIDeviceHardware } from 'NativeModules';

export default function makeDetectDevice (action) {
  return function detectDevice() {
    return function (dispatch) {
      UIDeviceHardware.deviceInfo((info) => {
        dispatch({
          type: action,
          info: info
        });
      });
    };
  };
};
