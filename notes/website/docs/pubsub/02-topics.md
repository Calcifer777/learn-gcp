---
sidebar_position: 2
sidebar_label: Topics
---

# Topics

## Topic properties

- Default subscription
- Message schema
- Message retention: 10 minutes to 31 days
- Encryption: CMEK
- Subscription expiration: expire after inactivity
- Retain aknowledged messages
- Aknowledgment deadline
- Subscription filter: based on messages attributes
- Message encoding type: `json` or `binary`
- Message ordering: all messages with the same `orderingKey` will be delivered in order
- Retry policy
  - choose how much time to wait before re-deliverying failed-processing messaged
  - Can be set to:
    - retry immediately
    - exponetial backoff with min and max backoff time