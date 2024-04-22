---
layout: post
title:  "Event driven architecture"
date:   2023-11-10 18:06:00 +0630
categories: howto
---

Event Driven Architecture

ဘာလဲ

ဘယ်ချိန်မှာ 

ဘာကြောင့် သုံးကြမလဲ?


Queue စနစ်
Failure စနစ်။

Event Bus.

Rabbit MQ
https://www.rabbitmq.com/


Kafka
https://kafka.apache.org/

Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.


Saga

Distriby

Fire and Forgot

Callback.


ACE - core banking.
MIT 

infosys, Temenos Digital banking - t24 core banking system,

Core Banking Software – FLEXCUBE - Oracle
Accounting.

EOD

ACE
MIT

Audit.

Event Bus
Event Broker


SOA 

User
Post
Comment

Db Cluster

Apple
Dual Stack.

ALB

MLB

Application Load Balancer (ALB) supports AWS Outposts, a fully managed service that extends AWS infrastructure, services, and tools to virtually any datacenter, co-location space, or on-premises facility for a truly consistent hybrid experience.

ELK

The ELK Stack is a collection of three open-source products — Elasticsearch, Logstash, and Kibana. ELK stack provides centralized logging in order to identify problems with servers or applications. It allows you to search all the logs in a single place.

DataDog vs Grafana

Introduction. Prometheus is a monitoring solution for storing time series data like metrics. Grafana allows to visualize the data stored in Prometheus (and other sources). This sample demonstrates how to capture NServiceBus metrics, storing these in Prometheus and visualizing these metrics using Grafana.

https://www.getambassador.io/products/api-gateway

ဘယ်သူက Log ထိုင်ရေးမလဲ?
System တွေမှာ
- Apache 
- IIS 

ဒါတွေက ဘယ် Endpoint ကို ဘယ်လို hit ဖြစ်သွားတယ်ဆိုတာ ကြည့်လို့်ရမယ်။

Same Process -> idempotent - Result of every operation should be same 

Example i++ is not idempotent since in itiration 1 i is 1 itiration 2 i is 2
While 1 + 1 is idempotent since in every itiration the answer 2

- ဘာဖြစ်လို့ ဖြစ်သွားမှန်း မသိ၊ ဘုရားပဲ​သိမယ်ဆိုတဲ့ အကွက်မျိုး :P

Log ကသာ သက်သေပဲ။
ကိုယ့် Solution နဲ့ Server တွေ ဘယ်ချိန်မှာ  ဘယ်သောင်ရောက်လို့ ဘယ်ကမ်းဆိုက်နေလဲ