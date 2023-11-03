---
layout: post
title:  "ChatGPT ကို Postman Testcase တွေရေးခိုင်းခြင်း"
date:   2023-11-03 20:30:00 +0630
categories: howto
---

အကြာကြီးရေးရတဲ့ Test Case တွေကို Chat GPT ရေးခိုင်းလိုက်တော့ အတော်လေး အချိန်ကုန် လူပင်ပန်း တာတွေ သက်သာသွားတယ်။

```js
// Test if the response status code is 200 (or the appropriate status code for success)
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Test if the response body is valid JSON
pm.test("Response body is valid JSON", function () {
    pm.response.to.be.json;
});

// Parse the JSON response
var jsonData = pm.response.json();

// Test the "status" field
pm.test("Response has a 'status' field", function () {
    pm.expect(jsonData).to.have.property('status');
    pm.expect(jsonData.status).to.be.a('boolean');
});

// Test the "message" field
pm.test("Response has a 'message' field", function () {
    pm.expect(jsonData).to.have.property('message');
    pm.expect(jsonData.message).to.be.a('string');
});

// Test the "data" field
pm.test("Response has a 'data' field", function () {
    pm.expect(jsonData.data).to.be.an('object');
});

// Test the structure of the "data" field
pm.test("Data field structure is as expected", function () {
    pm.expect(jsonData.data).to.have.property('name');
    pm.expect(jsonData.data).to.have.property('description');
    pm.expect(jsonData.data).to.have.property('amount');
    pm.expect(jsonData.data).to.have.property('transaction_type_id');
    pm.expect(jsonData.data).to.have.property('from_account_id');
    pm.expect(jsonData.data).to.have.property('to_account_id');
    pm.expect(jsonData.data).to.have.property('updated_at');
    pm.expect(jsonData.data).to.have.property('created_at');
    pm.expect(jsonData.data).to.have.property('id');
});

```