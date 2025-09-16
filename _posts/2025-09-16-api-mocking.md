---
layout: post
title: "mock API from OpenAPI spec"
date: 2025-09-16
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

You can quickly create a mock API from your OpenAPI spec using Prism (a popular open-source tool). Here’s how to do it on Windows:

1. Install Prism globally (if you have Node.js installed)
Open your terminal and run:

1. Run the mock server
Navigate to your OpenAPI file directory:

Start the mock server:

3. Access your mock API
By default, Prism will start a server at http://127.0.0.1:4010.
You can now make requests to endpoints like:

POST http://127.0.0.1:4010/users
GET http://127.0.0.1:4010/users/1
Prism will return mock responses based on your OpenAPI spec.

Tip:
You can also use Swagger Editor or Mockoon for a GUI-based approach. Just import your YAML file and start mocking!


