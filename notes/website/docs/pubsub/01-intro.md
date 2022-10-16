---
sidebar_position: 1
sidebar_label: Intro
---

# Intro

## Components

- Message: the data that moves through the service.
- Topic: a named entity that represents a feed of messages.
- Subscription: a named entity that represents an interest in receiving messages on a particular topic.
- Publisher (also called a producer): creates messages and sends (publishes) them to the messaging service on a specified topic.
- Subscriber (also called a consumer): receives messages on a specified subscription.


## High level functionalities

Publisher
- Publishers send messages by making HTTPS requests to pubsub.googleapis.com

Subscriber
- Pull
  - Subscriber makes HTTPS requests to pubsub.googleapis.com
- Push
  - Subscribers provide a web hook endpoint at the time of registration
  - When a message is received on the topic, A HTTPS POST request is sent to the web hook endpoints

Very Flexible Publisher(s) and Subscriber(s) Relationships
- One to Many
- Many to One
- Many to Many

## Publishers

- Publisher sends a message to Topic
- Message individually delivered to each and every subscription
- Subscribers can receive message either by:
  - Push: Pub/Sub sends the message to Subscriber
  - Pull: Subscribers poll for messages
- Pub/Sub ensures the message is retained per subscription until it is acknowledged

## Consumers

Each Subscription represents discrete pull of messages from a topic:
- Multiple clients pull same subscription -> messages split between clients
- Multiple clients create a subscription each -> each client will get every message
