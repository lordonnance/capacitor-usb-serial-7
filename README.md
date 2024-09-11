# capacitor-usb-serial

This capacitor plugin allows you basic serial-over-usb functionallity

## Install

```bash
npm install capacitor-usb-serial
npx cap sync
```

## API

<docgen-index>

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

### getDeviceConnections()

```typescript
getDeviceConnections() => Promise<{ devices: DeviceInfo[]; }>
```

**Returns:** <code>Promise&lt;{ devices: DeviceInfo[]; }&gt;</code>

--------------------


### openConnection(...)

```typescript
openConnection(options: { deviceId: number; }) => Promise<{ portKey: string; }>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ deviceId: number; }</code> |

**Returns:** <code>Promise&lt;{ portKey: string; }&gt;</code>

--------------------


### getActivePorts()

```typescript
getActivePorts() => Promise<{ ports: string[]; }>
```

**Returns:** <code>Promise&lt;{ ports: string[]; }&gt;</code>

--------------------


### endConnection(...)

```typescript
endConnection(options: { key: string; }) => Promise<void>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

--------------------


### endConnections(...)

```typescript
endConnections(options?: { keys?: string[] | undefined; } | undefined) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ keys?: string[]; }</code> |

--------------------


### write(...)

```typescript
write(options: { key: string; message: string; }) => Promise<void>
```

| Param         | Type                                           |
| ------------- | ---------------------------------------------- |
| **`options`** | <code>{ key: string; message: string; }</code> |

--------------------


### read(...)

```typescript
read(options: { key: string; }) => Promise<ReadResponse>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#readresponse">ReadResponse</a>&gt;</code>

--------------------


### Interfaces


#### DeviceInfo

| Prop             | Type                |
| ---------------- | ------------------- |
| **`deviceKey`**  | <code>string</code> |
| **`deviceId`**   | <code>number</code> |
| **`productId`**  | <code>number</code> |
| **`vendorId`**   | <code>number</code> |
| **`deviceName`** | <code>string</code> |


### Type Aliases


#### ReadResponse

<code>{ data: string, bytesRead: number }</code>

</docgen-api>
