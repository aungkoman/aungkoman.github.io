---
layout: post
title: "Serverless Architecture with AWS"
date: 2024-12-12
categories: productivity programming
---

Lambda
DynamoDB
API Gateway

ဒီ (၃) ခု ပေါင်းပြီး CRUD API တစ်ခု ေဆာက်တာ အဆင်ပြေတယ်။

အခု Restful API တစ်ခုကို Authentication, Authorization ပါတာ တစ်ခု စဆောက်ကြည့်မယ်။

Reference link တွေအနေနဲ့

web socket ပါ တစ်ခါတည်း join ထားလိုက်မယ်။

လေ့လာရမှာတွေတော့ နည်းနည်းများတယ်။

ဒီကုတ်တွေကို local စက်မှာ run ဖို့ စမ်းဖို့ 
နောက်ပြီး version control စနစ်ထဲကို ထည့်ဖို့

ap-southeast-1
Singapore Region မှာပဲ resource ေတွကို create လုပ်ရမယ်။



```js
export const handler = function(event, context, callback) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    var res ={
        "statusCode": 200,
        "headers": {
            "Content-Type": "*/*"
        }
    };
    var greeter = 'World';
    if (event.greeter && event.greeter!=="") {
        greeter =  event.greeter;
    } else if (event.body && event.body !== "") {
        var body = JSON.parse(event.body);
        if (body.greeter && body.greeter !== "") {
            greeter = body.greeter;
        }
    } else if (event.queryStringParameters && event.queryStringParameters.greeter && event.queryStringParameters.greeter !== "") {
        greeter = event.queryStringParameters.greeter;
    } else if (event.multiValueHeaders && event.multiValueHeaders.greeter && event.multiValueHeaders.greeter != "") {
        greeter = event.multiValueHeaders.greeter.join(" and ");
    } else if (event.headers && event.headers.greeter && event.headers.greeter != "") {
        greeter = event.headers.greeter;
    } 
    
    res.body = "Hello, " + greeter + "!";
    callback(null, res);
};
```

နောက်တစ်ခု

```js
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "http-crud-tutorial-items";

export const handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    switch (event.routeKey) {
      case "DELETE /items/{id}":
        await dynamo.send(
          new DeleteCommand({
            TableName: tableName,
            Key: {
              id: event.pathParameters.id,
            },
          })
        );
        body = `Deleted item ${event.pathParameters.id}`;
        break;
      case "GET /items/{id}":
        body = await dynamo.send(
          new GetCommand({
            TableName: tableName,
            Key: {
              id: event.pathParameters.id,
            },
          })
        );
        body = body.Item;
        break;
      case "GET /items":
        body = await dynamo.send(
          new ScanCommand({ TableName: tableName })
        );
        body = body.Items;
        break;
      case "PUT /items":
        let requestJSON = JSON.parse(event.body);
        await dynamo.send(
          new PutCommand({
            TableName: tableName,
            Item: {
              id: requestJSON.id,
              price: requestJSON.price,
              name: requestJSON.name,
            },
          })
        );
        body = `Put item ${requestJSON.id}`;
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};

```


What is the difference in lambda AWS like callback and return


export const handler = function(event, context, callback) {

    callback(null, res);
}

and

export const handler = async (event, context) => {
return {
    statusCode,
    body,
    headers,
  };
}



Invoke URL

https://gcpvfn8vig.execute-api.ap-southeast-1.amazonaws.com/production/tasks?greeter=John


https://r275xc9bmd.execute-api.us-east-1.amazonaws.com/test/helloworld?greeter=John


API Gateway က ကြားခံ ဘာတစ်ခုမှ မလုပ်ပဲ http request object တစ်ခုလုံးကို labmda ဘက်ကို pass လုပ်ပေးလိုက်တဲ့အခါ

Lambda Proxy : True လို့ ခေါ်ကြတယ်။

ဒါမျိုး ရလာမယ်။


```json
{
    "event_pathParameters": null,
    "event_body": "----------------------------995844642570680575084089\r\nContent-Disposition: form-data; name=\"form\"\r\n\r\nkey\r\n----------------------------995844642570680575084089--\r\n",
    "event": {
        "resource": "/tasks",
        "path": "/tasks",
        "httpMethod": "POST",
        "headers": {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Cache-Control": "no-cache",
            "Content-Type": "multipart/form-data; boundary=--------------------------995844642570680575084089",
            "Host": "gcpvfn8vig.execute-api.ap-southeast-1.amazonaws.com",
            "Postman-Token": "dd19765b-8562-4763-8de2-ad24d7979311",
            "User-Agent": "PostmanRuntime/7.43.0",
            "X-Amzn-Trace-Id": "Root=1-675fc670-633fbf2066055c6267a50c49",
            "X-Forwarded-For": "203.81.84.12",
            "X-Forwarded-Port": "443",
            "X-Forwarded-Proto": "https"
        },
        "multiValueHeaders": {
            "Accept": [
                "*/*"
            ],
            "Accept-Encoding": [
                "gzip, deflate, br"
            ],
            "Cache-Control": [
                "no-cache"
            ],
            "Content-Type": [
                "multipart/form-data; boundary=--------------------------995844642570680575084089"
            ],
            "Host": [
                "gcpvfn8vig.execute-api.ap-southeast-1.amazonaws.com"
            ],
            "Postman-Token": [
                "dd19765b-8562-4763-8de2-ad24d7979311"
            ],
            "User-Agent": [
                "PostmanRuntime/7.43.0"
            ],
            "X-Amzn-Trace-Id": [
                "Root=1-675fc670-633fbf2066055c6267a50c49"
            ],
            "X-Forwarded-For": [
                "203.81.84.12"
            ],
            "X-Forwarded-Port": [
                "443"
            ],
            "X-Forwarded-Proto": [
                "https"
            ]
        },
        "queryStringParameters": {
            "get_p": "one",
            "set_d": "two"
        },
        "multiValueQueryStringParameters": {
            "get_p": [
                "one"
            ],
            "set_d": [
                "two"
            ]
        },
        "pathParameters": null,
        "stageVariables": null,
        "requestContext": {
            "resourceId": "7au61k",
            "resourcePath": "/tasks",
            "httpMethod": "POST",
            "extendedRequestId": "C3vxrHRryQ0EVxQ=",
            "requestTime": "16/Dec/2024:06:19:28 +0000",
            "path": "/production/tasks",
            "accountId": "194722404241",
            "protocol": "HTTP/1.1",
            "stage": "production",
            "domainPrefix": "gcpvfn8vig",
            "requestTimeEpoch": 1734329968784,
            "requestId": "c0408af7-702a-42b2-ad83-db79f2f1d9d5",
            "identity": {
                "cognitoIdentityPoolId": null,
                "accountId": null,
                "cognitoIdentityId": null,
                "caller": null,
                "sourceIp": "203.81.84.12",
                "principalOrgId": null,
                "accessKey": null,
                "cognitoAuthenticationType": null,
                "cognitoAuthenticationProvider": null,
                "userArn": null,
                "userAgent": "PostmanRuntime/7.43.0",
                "user": null
            },
            "domainName": "gcpvfn8vig.execute-api.ap-southeast-1.amazonaws.com",
            "deploymentId": "w3mhsu",
            "apiId": "gcpvfn8vig"
        },
        "body": "----------------------------995844642570680575084089\r\nContent-Disposition: form-data; name=\"form\"\r\n\r\nkey\r\n----------------------------995844642570680575084089--\r\n",
        "isBase64Encoded": false
    }
}
```


ဘယ်ဟာကို ဘယ် key နဲ့ ဘယ်လို ပုံစံ pass သွားတယ်ဆိုတာ သိရရင် အဆင်ပြေပြီ

  body['event_routeKey'] = event.routeKey;
  body['event_pathParameters'] = event.pathParameters;
  body['event_body'] = event.body;

  

