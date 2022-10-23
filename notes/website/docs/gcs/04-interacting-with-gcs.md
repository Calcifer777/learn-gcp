---
sidebar_position: 4
sidebar_label: Interacting with GCS
---

# Interacting with GCS

## Request preconditions

- When preconditions are used in a request to Cloud Storage, the request only proceeds if the targeted resource meets the criteria defined in the preconditions.
- Precondition checks ensure that a bucket or object is in the expected state, allowing you to perform safe read-modify-write updates and conditional operations

:::caution 

This feature is not documented too well

:::

## Failure and retries

### Error codes

Connection errors:
- requests.exceptions.ConnectionError
- requests.exceptions.ChunkedEncodingError (only for operations that fetch or send payload data to objects, like uploads and downloads)
- ConnectionError

### HTTP codes that can be retried

- 408 Request Timeout
- 429 Too Many Requests
- 500 Internal Server Error
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout

### Python default settings

- Auto retry: true if idempotent
- Initial wait time: 1s
- Wait time multiplier per iteration:	2s
- Maximum amount of wait time: 60s
- Default deadline: 120s

## Best practices

- Ramp up request rate gradually
- Use a naming convention that distributes load evenly across key ranges
  - Randomness after a common prefix is effective under the prefix
  - Randomness after sequential prefixes is not as effective
- Reorder bulk operations to distribute load evenly across key ranges
