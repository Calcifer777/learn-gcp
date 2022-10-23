---
sidebar_position: 3
sidebar_label: Object Data Lifecycle
---

# Object Data Lifecycle

- A retention policy that specifies a retention period can be placed on a bucket. An object in the bucket cannot be deleted or replaced until it reaches the specified age.
- An object hold can be placed on individual objects to prevent anyone from deleting or replacing the object until the hold is removed.
- Object Versioning can be enabled on a bucket in order to retain older versions of objects. When the live version of an object is deleted or replaced, it becomes noncurrent if versioning is enabled on the bucket. If you accidentally delete a live object version, you can restore the noncurrent version of it back to the live version.
- Object Versioning increases storage costs, but this can be partially mitigated by configuring Object Lifecycle Management to delete older object versions. For one possible setup, see the lifecycle configuration example for deleting objects.
- Object Lifecycle Management can be configured for a bucket, which gives you more automated control over deleting objects. When you define a lifecycle configuration, Cloud Storage performs a specified action on an object only if the object meets your criteria.


:::caution

Object Versioning does not protect your data if you delete the entire bucket

:::

## Lifecycle rule options

A lifecycle rule specifies exactly one of the following actions:
- `Delete`
- `SetStorageClass`
- `AbortIncompleteMultipartUpload`

:::note

- The Delete action takes precedence over any SetStorageClass action.
- The SetStorageClass action that switches the object to the storage class with the lowest at-rest storage pricing takes precedence.

:::

Lifecycle rule conditions:
- `age`
- `createdBefore`
- `customTimeBefore`
- `daysSinceCustomTime`
- `daysSinceNoncurrentTime`
- `isLive`
- `matchesStorageClass`
- `matchesPrefix and matchesSuffix`
- `noncurrentTimeBefore`
- `numNewerVersions`

## Object versioning

You enable Object Versioning for a bucket. Once enabled:

- Cloud Storage retains a noncurrent object version each time you replace or delete a live object version, as long as you do not specify the generation number of the live version.
    - Noncurrent versions retain the name of the object, but are uniquely identified by their generation number.
    - Noncurrent versions only appear in requests that explicitly call for them to be included.
- You permanently delete versions of objects by including the generation number in the deletion request or by using Object Lifecycle Management.
- Noncurrent versions of objects exist independently of any live version.