---
sidebar_position: 7
sidebar_label: Misc
---

# Misc

## Retention policy

- You can add a retention policy to a bucket to specify a retention period.
  - If a bucket does not have a retention policy, you can delete or replace objects in the bucket at any time.
  - If a bucket has a retention policy, objects in the bucket can only be deleted or replaced once their age is greater than the retention period.
  - A retention policy retroactively applies to existing objects in the bucket as well as new objects added to the bucket.

You can lock a retention policy to permanently set it on the bucket.
  - Once you lock a retention policy, you cannot remove it or reduce the retention period it has.
  - You cannot delete a bucket with a locked retention policy unless every object in the bucket has met the retention period.
  - You can increase the retention period of a locked retention policy.
  - Locking a retention policy can help your data comply with record retention regulations.
