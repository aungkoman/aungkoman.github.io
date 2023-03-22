---
layout: post
title: How to deploy TURN server?
---
How to deploy TURN server in linux?

Since TURN server is essential for WEB RTC app. we need to deploy our own TURN Server.
When we search on Google we saw 

https://github.com/coturn/coturn


sudo apt-get install coturn
turnserver -a -o -v -n -u user:root -p 3478 -L INT_IP -r someRealm -X EXT_IP/INT_IP  --no-dtls --no-tls

command description:

-X - your amazon instance's external IP, internal IP: EXT_IP/INT_IP
-p - port to be used, default 3478
-a - Use long-term credentials mechanism
-o - Run server process as daemon
-v - 'Moderate' verbose mode.
-n - no configuration file
--no-dtls - Do not start DTLS listeners
--no-tls - Do not start TLS listeners
-u - user credentials to be used
-r - default realm to be used, need for TURN REST API


in your WebRTC app, you can use trun server like:

{
    url: 'turn:user@EXT_IP:3478',
    credential: 'root'
}


