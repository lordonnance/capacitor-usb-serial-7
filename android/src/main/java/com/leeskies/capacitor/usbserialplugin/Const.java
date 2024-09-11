package com.leeskies.capacitor.usbserialplugin;

import com.hoho.android.usbserial.driver.UsbSerialPort;

public class Const {
    static final int WRITE_WAIT_MILLIS = 2000;
    static final int READ_WAIT_MILLIS = 2000;
    static final int BAUD_RATE = 9600;
    static final int DATA_BITS = 8;
    static final int STOP_BITS = UsbSerialPort.STOPBITS_1;
    static final int DEFAULT_PARITY = UsbSerialPort.PARITY_NONE;
    static final String ACTION_USB_PERMISSION = "";

    private Const() {};
}
