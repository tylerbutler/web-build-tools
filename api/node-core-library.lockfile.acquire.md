[Home](./index) &gt; [@microsoft/node-core-library](./node-core-library.md) &gt; [LockFile](./node-core-library.lockfile.md) &gt; [acquire](./node-core-library.lockfile.acquire.md)

# LockFile.acquire method

Attempts to create the lockfile. Will continue to loop at every 100ms until the lock becomes available or the maxWaitMs is surpassed.

**Signature:**
```javascript
static acquire(resourceDir: string, resourceName: string, maxWaitMs?: number): Promise<LockFile>;
```
**Returns:** `Promise<LockFile>`

## Remarks

This function is subject to starvation, whereby it does not ensure that the process that has been waiting the longest to acquire the lock will get it first. This means that a process could theoretically wait for the lock forever, while other processes skipped it in line and acquired the lock first.

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `resourceDir` | `string` |  |
|  `resourceName` | `string` |  |
|  `maxWaitMs` | `number` |  |
