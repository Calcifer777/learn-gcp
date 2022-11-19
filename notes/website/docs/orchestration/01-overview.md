---
sidebar_position: 1
sidebar_label: Cloud Workflows
---

# Cloud Workflows

## Overview

Workflows is serverless, scaling up as needed, and no charges are incurred while idle. Because a workflow contains no code or library dependencies, it does not require security patches. Once you deploy a workflow, you can expect it to reliably execute without maintenance. A workflow can hold state, retry, poll, or wait for up to a year.

## Block Types

- Steps: the minimal unit of execution
- Conditions: a switch block that acts as a selection mechanism for branching the workflow DAG
- Iteration: iterates over a sequence of numbers or collection of data to run a step template
- Parallel steps: makes the steps within the block run concurrently
- Subworkflows

## Resources

Docs: https://cloud.google.com/workflows/docs/overview
Quotas and Limits: https://cloud.google.com/workflows/quotas
