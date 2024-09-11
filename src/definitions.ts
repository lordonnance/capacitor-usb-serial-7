export interface UsbSerialPlugin {
  getDeviceConnections(): Promise<{ devices: DeviceInfo[] }>;
  
  openConnection(options: { deviceId: number }): Promise<{ portKey: string }>;

  getActivePorts(): Promise<{ ports: string[] }>;
  
  endConnection(options: { key: string }): Promise<void>;
  
  endConnections(options?: { keys?: string[] }): Promise<void>;
  
  write(options: { key: string, message: string }): Promise<void>;
  
  read(options: { key: string }): Promise<{ data: Uint8Array, bytesRead: number }>;
}

export interface DeviceInfo {
  deviceKey: string;
  deviceId: number;
  productId: number;
  vendorId: number;
  deviceName: string;
}

export interface DeviceHandler {
    device: DeviceInfo;

    connect(): Promise<void>;

    disconnect(): Promise<void>;

    write(message: string): Promise<void>;

    read(): Promise<{ data: Uint8Array, bytesRead: number }>;
}