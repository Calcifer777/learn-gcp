---
sidebar_position: 7
sidebar_label: Lite Topics
---

# Lite Topics

## Comparison with standard topics

| Feature             | Pubsub                                          | Pubsub lite                                            |
| ------------------- | ----------------------------------------------- | ------------------------------------------------------ |
| Subscriber API      | Per-message leases, no partitions               | Ordered partitions with offsets used to track progress |
| Message replication | Multi-zone in single region                     | zonal topics: single zone\nregional topic: dual zone |
| Capacity            | Automatically provisioned                       | Provision before you use                               |
| Pricing             | Pay for what you use                            | Pay for the capacity that you provision                |
| Storage             | Unlimited                                       | Unlimited                                              |
| Retention period    | Up to 31 days                                   | Unlimited                                              |
| Service endpoints   | Global and regional                             | Regional                                               |
| Resource namespace  | Global                                          | zonal topics: zonal\nregional topic: regional zone   |
| Message routing     | Global                                          | zonal topics: zonal\nregional topic: regional zone   |
| Delivery Modes      | Push, Pull (polling, Rest, gRPC), StreamingPull | streaming gRPC pull                                    |
| Parallelism         | per-message parallelism                         | partition-based parallelism                            |