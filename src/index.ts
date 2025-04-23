import { registerPlugin } from '@capacitor/core';

import { DeviceHandler, UsbSerialPlugin, ReadResponse, ConnectionParams, GetDeviceHandlers } from './definitions';

const UsbSerialPrimitive =
  registerPlugin<UsbSerialPlugin>('UsbSerial');

  const getDeviceHandlers: GetDeviceHandlers = async () => {
    const deviceConnections = await UsbSerialPrimitive.getDeviceConnections();
    const deviceHandlers: DeviceHandler[] = deviceConnections.devices.map(
      device => ({
        device,
        async connect(options?: ConnectionParams): Promise<void> {
          await UsbSerialPrimitive.openConnection({ deviceId: this.device.deviceId, ...options });
        },

        async disconnect(): Promise<void> {
          await UsbSerialPrimitive.endConnection({ key: this.device.deviceKey });
        },
        async write(message: string): Promise<ReadResponse> {
          const response = await UsbSerialPrimitive.write({ key: this.device.deviceKey, message });
          return response
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
