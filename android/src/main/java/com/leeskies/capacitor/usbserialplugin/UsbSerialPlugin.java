package com.leeskies.capacitor.usbserialplugin;

import com.getcapacitor.JSObject;
import com.getcapacitor.JSArray;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.List;

@CapacitorPlugin(name = "UsbSerial")
public class UsbSerialPlugin extends Plugin {

    private UsbSerial implementation;

    @Override
    public void load() {
        implementation = new UsbSerial(getContext());
    }

    @PluginMethod
    public void getDeviceConnections(PluginCall call) {
        List<JSObject> devices = implementation.getDeviceConnections();
        JSObject response = new JSObject();
        response.put("devices", new JSArray(devices));
        call.resolve(response);
    }

    @PluginMethod
    public void openConnection(PluginCall call) {
        implementation.openConnection(call);
    }

    @PluginMethod
    public void endConnection(PluginCall call) {
        implementation.endConnection(call);
    }

    @PluginMethod
    public void endConnections(PluginCall call) {
        JSArray keysArray = call.getArray("keys");
        if (keysArray == null) {
            implementation.endConnections(call);
        } else {
            try {
                List<String> keys = keysArray.toList();
                implementation.endConnections(call, keys);
            } catch (Exception e) {
                call.reject("Error parsing keys: " + e.getMessage());
            }
        }
    }

    @PluginMethod
    public void write(PluginCall call) {
        implementation.write(call);
    }

    @PluginMethod
    public void read(PluginCall call) {
        implementation.read(call);
    }

    @PluginMethod
    public void getActivePorts(PluginCall call) { implementation.getActivePorts(call); }
}