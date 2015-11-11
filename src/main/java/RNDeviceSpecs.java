package com.joinpeach.react.device.specs;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

import android.telephony.TelephonyManager;
import android.os.Build;
import android.os.StatFs;
import android.os.Environment;
import android.content.Context;

import java.text.DecimalFormat;

public final class RNDeviceSpecs extends ReactContextBaseJavaModule {

  public RNDeviceSpecs(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "RNDeviceSpecs";
  }

  @Override
  public Map<String, String> getConstants() {
    final Map<String, String> constants = new HashMap<>();
    String model = Build.MODEL;
    constants.put("model", model);

    String brand = Build.BRAND;
    constants.put("brand", brand);

    String product = Build.PRODUCT;
    constants.put("product", product);

    ReactContext reactContext = (ReactContext)getReactApplicationContext();
    TelephonyManager manager = (TelephonyManager)reactContext.getSystemService(Context.TELEPHONY_SERVICE);
    String carrier = manager.getNetworkOperatorName();
    constants.put("carrier", carrier);

    String disk_space = bytesToHuman(totalMemory());
    constants.put("disk_space", disk_space);
    return constants;
  }

  private long totalMemory(){
    StatFs statFs = new StatFs(Environment.getRootDirectory().getAbsolutePath());   
    long   total  = (statFs.getBlockCountLong() * statFs.getBlockSizeLong());
    return total;
  }

  private static String floatForm (double d){
    return new DecimalFormat("#.##").format(d);
  }


  private static String bytesToHuman (long size){
    long Kb = 1  * 1024;
    long Mb = Kb * 1024;
    long Gb = Mb * 1024;
    long Tb = Gb * 1024;
    long Pb = Tb * 1024;
    long Eb = Pb * 1024;

    if (size <  Kb) return floatForm(        size     ) + " byte";
    if (size < Mb)  return floatForm((double)size / Kb) + " Kb";
    if (size < Gb)  return floatForm((double)size / Mb) + " Mb";
    if (size < Tb)  return floatForm((double)size / Gb) + " Gb";
    if (size < Pb)  return floatForm((double)size / Tb) + " Tb";
    if (size < Eb)  return floatForm((double)size / Pb) + " Pb";
    if (size >= Eb) return floatForm((double)size / Eb) + " Eb";

    return "???";
  }

}

//x platform: platform,
//x actualDiskSpace: NativeRNDeviceSpecs.diskSpace,
//x carrier: NativeRNDeviceSpecs.carrier,

// storage: storage,
// formalName: model.formalName,
// name: model.name,
// possibleColors: model.colors
