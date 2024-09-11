import { registerPlugin } from '@capacitor/core';

import { DeviceHandler, UsbSerialPlugin, ReadResponse } from './definitions';

const UsbSerialPrimitive =
  registerPlugin<UsbSerialPlugin>('UsbSerial');

  const getDeviceHandlers = async () => {
    const deviceConnections = await UsbSerialPrimitive.getDeviceConnections();
    const deviceHandlers: DeviceHandler[] = deviceConnections.devices.map(
      device => ({
        device,
        async connect(): Promise<void> {
          await UsbSerialPrimitive.openConnection({ deviceId: this.device.deviceId });
        },

        async disconnect(): Promise<void> {
          await UsbSerialPrimitive.endConnection({ key: this.device.deviceKey });
        },
        async write(message: string): Promise<void> {
          await UsbSerialPrimitive.write({ key: this.device.deviceKey, message });
        },
        async read(): Promise<ReadResponse> {
          return await UsbSerialPrimitive.read({ key: this.device.deviceKey });
        },
      }),
    );
    return deviceHandlers;
  }

export * from './definitions';
export { UsbSerialPrimitive as UsbSerial, getDeviceHandlers };
