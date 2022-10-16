---
sidebar_position: 5
sidebar_label: Message consumption
---

# Message consumption

## Subcription types

## Failure handling

### DLQ

A dead-letter topic is a subscription property, not a topic property

Maximum number of delivery attempts
  - Default value = 5
  - Maximum value = 100
  - Minimum value = 5

### Monitor forwarded messages

After forwarding an undeliverable message, the Pub/Sub service removes the message from the subscription. You can monitor forwarded messages with Cloud Monitoring.

Metrics:
- `subscription/dead_letter_message_count`: records the number of undeliverable messages that Pub/Sub forwards from a subscription.
- `subscription/num_undelivered_messages` the number of forwarded messages that have accumulated in the subscription 
- `subscription/oldest_unacked_message_age`