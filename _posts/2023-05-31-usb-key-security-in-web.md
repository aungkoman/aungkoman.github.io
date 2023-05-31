---
layout: post
title:  "USB Key Security in Web"
date:   2023-05-30 11:47:00 +0630
categories: howto
---


### How it work?


### How to read original data


### How to retrieve in js


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USB Key</title>
</head>
<body>
    <script>
        async function authenticateWithUSBKey() {
            console.log("authenticateWithUSBKey");
            const publicKeyCredential = await navigator.credentials.get({
                publicKey: {
                //rpId: 'your-website.com',
                rpId: 'localhost',
                allowCredentials: [
                    {
                        type: 'public-key',
                        id: Uint8Array.from('credential-identifier', c => c.charCodeAt(0)),
                    },
                ],
                challenge: Uint8Array.from('random-challenge', c => c.charCodeAt(0)),
                userVerification: 'required',
                timeout: 60000, // Timeout in milliseconds
                },
            });
            console.log("publicKeyCredential");
            console.log(publicKeyCredential);
        }

        authenticateWithUSBKey();
    </script>
</body>
</html>
```

### Error

```logs
authenticateWithUSBKey
index.html:29 Uncaught (in promise) DOMException: Public-key credentials are only available to HTTPS origins with valid certificates, HTTP origins that fall under 'localhost', or pages served from an extension. See https://chromium.googlesource.com/chromium/src/+/main/content/browser/webauth/origins.md for details
authenticateWithUSBKey @ index.html:29
await in authenticateWithUSBKey (async)
(anonymous) @ index.html:31
```
