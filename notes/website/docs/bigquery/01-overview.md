---
sidebar_position: 1
sidebar_label: BigQuery Overview
---

# BigQuery Overview

## Overview

- Completely managed service
- Separation of storage and compute
- Automatically encryption all data at rest
- columnar format behind the scenes

## Data Components

### Dataset

- Logical container for tables and all other data components
- Similar to a traditional database schema
- Associated with a location (GCP zone)

### Table

#### Types

- Standard Table: contain structured data
- Table clone: lightweight, writeable copy of a standard tables
- Table snapshot: read-only point-in-time copy of a table

#### Time travel

- Access data stored in BigQuery as from a previous point in time
- You can access the data from any point within the time-travel window (from 2 to 7 days; default 7 days)
- Can query data of deleted tables within time-travel window
- Allow point-in-time restoration from past versions of a table

**Change history**
- exposed as a SQL table-valued functions (TVF)
- shows you particular types of changes made during a specified time range.
- Available functions:
  - `APPENDS`: returns a table of all rows appended to a table for a given time range within the time-travel window

```sql
SELECT
  obj_id,
  _CHANGE_TYPE AS change_type,
  _CHANGE_TIMESTAMP AS change_time
FROM APPENDS (TABLE mydataset.mytable, NULL, NULL);  -- NULL, NULL are start_ts and end_ts of time-travel window
```

#### TTL

**Scheduled Query**: prune hourly/daily data older than the TTL threshold

**Table partition expiration**: create a partitioned table, and set the `partition_expiration_days`

```sql
CREATE TABLE mydataset.newtable (obj_id INT64, ts DATE)
PARTITION BY ts
OPTIONS (partition_expiration_days=90)
```

#### Best practices

- Use complex types (nested fields, repeated fields)
- Partition or cluster the table (complex filters when querying do not give any advantage)

### Views

- Read-only virtual table defined by a SQL query
- Can be created with an expiration time

### Materialized views

- Precomputed view that periodically cache the results of the view query
- Best use cases: queries with high computation cost and small dataset results
- Allow partitioning on partitioned tables 

### Temporary and external tables

- Temporary table: contain cached query results (do not generate charges)
- External table: table whose data resides in a data store that is external to BigQuery; the external data is co-located with the project

### Routines

- UDF
  - SQL expression or JavaScript code
  - When using JS, can include libraries in GCS
  - Can set IAM permissions at the UDF level
-  Table functions
  - A SQL query that produces a table
- Remote function
  - Call Cloud Functions and Cloud Run from BQ
  - Can make batch calls
  - Can specify `user_defined_context` in the function definition; allows to re-use a single endpoint for diffent remote functions
- Stored procedures
  - a collection of statements that can be called from other queries or other stored procedures
  - can take input arguments and return values as output

### Search Indexes

- SQL to find unique data elements buried in unstructured text and semi-structured JSON data
- No need to know the table schemas in advance

## Other components

- Job:
  - used to query, load, or export data from BQ
  - always runs in the same location as the tables that it references
- Connections