---
sidebar_position: 6
sidebar_label: Encryption
---

# Encryption

## Encryption options

-Server-side encryption: encryption that occurs after Cloud Storage receives your data, but before the data is written to disk and stored.
  -Customer-managed encryption keys: You can create and manage your encryption keys through Cloud Key Management Service. Customer-managed encryption keys can be stored as software keys, in an HSM cluster, or externally.
  -Customer-supplied encryption keys: You can create and manage your own encryption keys. These keys act as an additional encryption layer on top of the standard Cloud Storage encryption.
- Client-side encryption: encryption that occurs before data is sent to Cloud Storage. Such data arrives at Cloud Storage already encrypted but also undergoes server-side encryption.