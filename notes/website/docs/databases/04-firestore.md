---
sidebar_position: 4
sidebar_label: Firestore
---

# Firestore

Serverless document database

## Use cases

- Storing user profiles
- Index for objects used in GCS

## Objects

### Documents

- Like JSON objects, but with extra data types and limited in size to 1 MB

#### Time-to-live Policies

- Automatically remove stale data **at the document level** from your databases. 
- A TTL policy designates a given field as the expiration time for documents in a given collection group.

### Collections

- Containers for documents
- Schemaless: documents within the same collection can all contain different fields or store different types of data in those fields
- Created implicitly in Firestore when inserting a document for the first time

### Sub-Collections

- A collection associated with a specific document
- Can be created only starting from a document reference 

:::warning

Deleting a document does not delete its subcollections!

:::

### Indexes

- Collections can be queries by one or multiple fields only if supported by an index
- Can be *single-field* or *composite*
- Single-field indexes for each field in a document and each subfield in a map are created automatically ([link](https://cloud.google.com/firestore/docs/concepts/index-overview#automatic_indexing))
- Contribute to the storage costs of your application
- Firestore's ability to merge indexes (?)

#### Best practices

Use index single-field exemptions for:
- large string fields not used for querying
- TTL fields
- Index fields with sequential values (otherwise traffic capped at 500 writes / second)
- Large array or map fields: can incur in the limit of 40,000 index entries per document

## Data Model

| Pattern                  | Pro's                                 | Con's                                   | Use cases                       |
| ------------------------ | ------------------------------------- | --------------------------------------- | ------------------------------- |
| Nested data in documents | easy to set up                        | doc size increases with list length     | store last N events             |
| Subcollections           | doc size independent from list length | subcoll's are not deleted automatically | store all events of a type      |
| Root-level collections   | good for many-to-many relationships   | increase complexity in data retrieval   | one collections for entity type |

## Database interaction

- You can access Firestore via a REST API or a gRPC API
- IAM authentication
- Can use admin or client libraries

### Querying a collection

- Supported operators: `<`, `<=`, `==`, `>=`, `>`, `in`. For array fields, `array-contains`, `array-contains-any`

### Transactions

- The Firestore client libraries automatically retry transactions that fail due to data contention. After a finite number of retries, the transaction operation fails and returns an error message
- The server-client libraries use pessimistic concurrency controls resolve data contention.

## Integration

### Cloud Functions

Cloud Functions can handle events in Cloud Firestore in **the same Cloud project as the function**. 

In a typical lifecycle, a Cloud Firestore function does the following:
- Waits for changes to a particular document.
- Triggers when an event occurs and performs its tasks.
- Receives a data object with a snapshot of the affected document. For write or update events, the data object contains snapshots representing document state before and after the triggering event.

## Monitoring

- Database access can be traced with *audit logs*. To receive Data Access audit logs, you must explicitly enable them

## Resources

- Docs: https://cloud.google.com/firestore/docs/concepts
- YT channel: https://www.youtube.com/c/firebase