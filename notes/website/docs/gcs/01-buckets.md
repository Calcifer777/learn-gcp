---
sidebar_position: 1
sidebar_label: Buckets
---

# Buckets

## Location

### Considerations

|              | Regional                                                                                                                                                     | Dual-region                                                                                                                                                                                                                                                  | Multi-region |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| Availability | - Data redundancy across AZ (sync) <br /> - RTO=0: automated failover and failback on zonal failure | - Higher availability than regional <br /> - Data redundancy across regions (async) <br />- Turbo replication option for replication within 15 minutes - RTO=0: automated failover and failback on regional failure | - Higher availability than regional <br /> - Data redundancy across regions (async) <br /> - RTO=0: automated failover and failback on regional failure |
| Performance | - 200 Gbps (per region, per project) <br /> - Scalable to many Tbps by requesting higher bandwidth quota | - 200 Gbps (per region, per project) <br /> Scalable to many Tbps by requesting higher bandwidth quota | - 50 Gbps (per region, per project) <br />- Limited performance scaling, variable performance for reads | 
| Pricing                   | - Lowest storage price <br /> - No replication charges <br /> - No egress charges when reading data inside the same region | - Highest storage price <br /> - Replication charges apply on write <br /> - No egress charges when reading data within either region | - Higher storage price than regional, but lower than dual-region <br /> - Replication charges apply on write <br /> - Egress charges always apply when reading data |

### Recommendations

| Requirements                                                                                       | Recommended bucket location | Workload examples                                                  |
| -------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------ |
| - Optimized latency and bandwidth <br /> - Lowest data storage cost <br /> - Cross-zone redundancy | Regional                    | - Analytics <br /> - Backup and archive                            |
| - Optimized latency and bandwidth <br /> - Cross-region redundancy                                 | Dual-region                 | - Analytics <br /> - Backup and archive <br /> - Disaster recovery |
| - Cross-geography data access <br /> - Highest availability                                        | Multi region                | Content serving                                                    |

## Storage classes

- A storage class is a piece of metadata that is used by every object.
- The storage class set for an object affects the object's availability and pricing model.
  - You can change the storage class of an existing object either by rewriting the object or by using Object Lifecycle Management.
- When you create a bucket, you can specify a default storage class for the bucket. When you add objects to the bucket, they inherit this storage class unless explicitly set otherwise.
  - If you don't specify a default storage class when you create a bucket, that bucket's default storage class is set to Standard storage.
  - Changing the default storage class of a bucket does not affect any of the objects that already exist in the bucket.

Available storage classes:
- Standard 
- Nearline
- Coldline
- Archive 