---
sidebar_position: 1
sidebar_label: Objects
---

# Objects

## Overview

Objects are the individual pieces of data that you store in Cloud Storage.
There is no limit on the number of objects that you can create in a bucket.
Objects have two components:
- object data: typically a file that you want to store in Cloud Storage and is completely opaque to Cloud Storage.
- object metadata is a collection of name-value pairs that describe various object qualities.
- Objects are immutable, which means that an uploaded object cannot change throughout its storage lifetime. The generation number for an object changes each time you replace the object's data. Thus, the generation number uniquely identifies an immutable object.