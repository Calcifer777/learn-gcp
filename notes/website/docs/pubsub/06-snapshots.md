---
sidebar_position: 6
sidebar_label: Snapshots
---

# Snapshots

Snapshots are a way to replay messages already consumed by a subscription.

The subscription cursor can be reverted to a previous message by:
- reverting the subscription to the state in which the snapshot was created
- a timestamp; this requires that ack'ed messages are retained in the queue