# capacitor-usb-serial

This capacitor plugin allows basic serial-over-usb functionallity

## Install

```bash
npm install capacitor-usb-serial
npx cap sync
```

## API

<docgen-index>

* [`getDeviceHandlers()`](#getdevicehandlers)
* [`getDeviceConnections()`](#getdeviceconnections)
* [`openConnection(...)`](#openconnection)
* [`getActivePorts()`](#getactiveports)
* [`endConnection(...)`](#endconnection)
* [`endConnections(...)`](#endconnections)
* [`write(...)`](#write)
* [`read(...)`](#read)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Defines the interface for USB serial communication plugin

### getDeviceHandlers()

```typescript
getDeviceHandlers() => Promise<DeviceHandler[]>
```

Returns an array of DeviceHandler objects for all connected USB devices.
This helper function provides a simplified interface for interacting with the plugin methods. It is recommended for most use cases unless more granular control is required.
Each DeviceHandler object includes methods for connecting, disconnecting, writing to, and reading from a specific device.

**Returns:** <code>Promise&lt;DeviceHandler[]&gt;</code>

--------------------


### getDeviceConnections()

```typescript
getDeviceConnections() => Promise<{ devices: DeviceInfo[]; }>
```

Returns all connected devices

**Returns:** <code>Promise&lt;{ devices: DeviceInfo[]; }&gt;</code>

--------------------


### openConnection(...)

```typescript
openConnection(options: FullConnectionParams) => Promise<{ portKey: string; }>
```

Connect to a device using its deviceId

| Param         | Type                                                                  | Description                                |
| ------------- | --------------------------------------------------------------------- | ------------------------------------------ |
| **`options`** | <code><a href="#fullconnectionparams">FullConnectionParams</a></code> | - Connection parameters including deviceId |

**Returns:** <code>Promise&lt;{ portKey: string; }&gt;</code>

--------------------


### getActivePorts()

```typescript
getActivePorts() => Promise<{ ports: string[]; }>
```

Returns all active ports

**Returns:** <code>Promise&lt;{ ports: string[]; }&gt;</code>

--------------------


### endConnection(...)

```typescript
endConnection(options: { key: string; }) => Promise<void>
```

Disconnect from a device using its assigned portKey

| Param         | Type                          | Description                     |
| ------------- | ----------------------------- | ------------------------------- |
| **`options`** | <code>{ key: string; }</code> | - Object containing the portKey |

--------------------


### endConnections(...)

```typescript
endConnections(options?: { keys?: string[] | undefined; } | undefined) => Promise<void>
```

Disconnect from all devices or specified devices

| Param         | Type                              | Description                                                     |
| ------------- | --------------------------------- | --------------------------------------------------------------- |
| **`options`** | <code>{ keys?: string[]; }</code> | - Optional object containing an array of portKeys to disconnect |

--------------------


### write(...)

```typescript
write(options: { key: string; message: string; }) => Promise<void>
```

Write a message to a device using its assigned portKey

| Param         | Type                                           | Description                                          |
| ------------- | ---------------------------------------------- | ---------------------------------------------------- |
| **`options`** | <code>{ key: string; message: string; }</code> | - Object containing the portKey and message to write |

--------------------


### read(...)

```typescript
read(options: { key: string; }) => Promise<ReadResponse>
```

Read a message from a device using its assigned portKey

| Param         | Type                          | Description                     |
| ------------- | ----------------------------- | ------------------------------- |
| **`options`** | <code>{ key: string; }</code> | - Object containing the portKey |

**Returns:** <code>Promise&lt;<a href="#readresponse">ReadResponse</a>&gt;</code>

--------------------


### Interfaces


#### DeviceInfo

Represents information about a connected device

| Prop             | Type                | Description                       |
| ---------------- | ------------------- | --------------------------------- |
| **`deviceKey`**  | <code>string</code> | Unique identifier used internally |
| **`deviceId`**   | <code>number</code> | Numeric identifier for the device |
| **`productId`**  | <code>number</code> | Product ID of the device          |
| **`vendorId`**   | <code>number</code> | Vendor ID of the device           |
| **`deviceName`** | <code>string</code> | Human-readable name of the device |


#### FullConnectionParams

Extends ConnectionParams to include deviceId

| Prop           | Type                | Description                      |
| -------------- | ------------------- | -------------------------------- |
| **`deviceId`** | <code>number</code> | Unique identifier for the device |


### Type Aliases


#### ReadResponse

Represents the response from a read operation

<code>{ data: string, bytesRead: number }</code>

</docgen-api>
