---
layout: post
title: "mock API from OpenAPI spec"
date: 2025-09-16
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---


ok, using openapi.yaml and create mock server using prism mock testing with postman

---


You can quickly create a mock API from your OpenAPI spec using Prism (a popular open-source tool). Here’s how to do it on Windows:

1. Install Prism globally (if you have Node.js installed)
Open your terminal and run:

npm install -g @stoplight/prism-cli


1. Run the mock server
Navigate to your OpenAPI file directory:
cd f:\code\web\learning-platform-laravel\doc\api

Start the mock server:
prism mock openapi.yaml


3. Access your mock API
By default, Prism will start a server at http://127.0.0.1:4010.
You can now make requests to endpoints like:

POST http://127.0.0.1:4010/users
GET http://127.0.0.1:4010/users/1
Prism will return mock responses based on your OpenAPI spec.


---- 

👉 Tip: You can import openapi.yaml directly into Postman to auto-generate all request collections (no need to create requests manually).

In Postman → Import → Upload openapi.yaml.



