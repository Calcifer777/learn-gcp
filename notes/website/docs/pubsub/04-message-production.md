---
sidebar_position: 4
sidebar_label: Message production
---

# Message production

## Message publishing

The client libraries can publish messages synchronously or asynchronously

## Message format

- A message consists of fields with the message data and metadata
- At least one of the following fields must be specified:
  - The message data
  - An ordering key
  - Attributes with additional metadata
- Pub/Sub automatically adds the following fields to the message:
  - `messageId`: unique to the topic
  - `timestamp`: when the PubSub receives the message

```json
{
  "data": string,
  "attributes": {
    string: string,
    ...
  },
  "messageId": string,
  "publishTime": string,
  "orderingKey": string
}
```

After you publish a message, the Pub/Sub service returns the `messageId` to the publisher.

## Message ordering

- If messages have the same ordering key and you publish the messages to the same region, subscribers can receive the messages in order
- Publishing messages with ordering keys might increase latency.
- When publishing with an ordering key fails, queued-up messages of the same ordering key in the publisher fail, including future publish requests of this ordering key

## Batch messages

Messages can be batched based on:
- request size (in bytes)
- number of messages
- time

## Custom retries

Publishing failures are automatically retried, except for errors that do not warrant retries.

You can also set custom retry settings:
- initial request timeout
- maximum timeout
- multiplier
- deadline (total timeout)
- retry delay