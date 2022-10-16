---
sidebar_position: 3
sidebar_label: Topic Schema
---

# Topic Schema

- A Pub/Sub schema defines the names and data types of fields in a message's data field.
- You can create schemas as standalone versioned resources, associate schemas with multiple Pub/Sub topics, and use them to validate the structure of published messages.
- Schema types
  - Apache Avro
  - Protocol Buffer

## Schema and Topics

- You cannot add schemas to existing topics.
- You can specify a schema only when you create a topic.
- After a schema is associated with a topic, you cannot update the schema or remove its association with that topic.
- You can apply the same schema to other new topics.
- If you delete a schema, publishing to all associated topics fails.

## Validating message schemas

You can validate that messages adhere to a certain schema, before or after a schema resource is created