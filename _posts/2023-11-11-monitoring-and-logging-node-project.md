---
layout: post
title:  "Monitoring and Logging node project"
date:   2023-11-11 08:22:00 +0630
categories: howto
---

**Prometheus**.io		

node_exporter-1.6.1.linux-amd64.tar.gz

https://github.com/prometheus/node_exporter/releases/download/v1.6.1/node_exporter-1.6.1.linux-amd64.tar.gz


# NOTE: Replace the URL with one from the above mentioned "downloads" page.
# <VERSION>, <OS>, and <ARCH> are placeholders.
wget https://github.com/prometheus/node_exporter/releases/download/v<VERSION>/node_exporter-<VERSION>.<OS>-<ARCH>.tar.gz
tar xvfz node_exporter-*.*-amd64.tar.gz
cd node_exporter-*.*-amd64
./node_exporter


```bash
wget https://github.com/prometheus/node_exporter/releases/download/v1.6.1/node_exporter-1.6.1.linux-amd64.tar.gz
tar xvfz node_exporter-1.6.1.linux-amd64.tar.gz
cd node_exporter-*.*-amd64
./node_exporter
```
https://prometheus.io/docs/guides/node-exporter/

:9100



https://github.com/prometheus/prometheus/releases/download/v2.48.0-rc.2/prometheus-2.48.0-rc.2.linux-amd64.tar.gz



prometheus.yml
```bash
global:
  scrape_interval: 15s

scrape_configs:
- job_name: node
  static_configs:
  - targets: ['localhost:9100']
```


wget https://github.com/prometheus/prometheus/releases/download/v2.48.0-rc.2/prometheus-2.48.0-rc.2.linux-amd64.tar.gz
tar xvf prometheus-2.48.0-rc.2.linux-amd64.tar.gz
cd prometheus-*.*


./prometheus --config.file=./prometheus.yml

pm2 start "./prometheus --config.file=./prometheus.yml"


```js
module.exports = {
  apps: [
    {
      name: 'prometheus',
      script: './prometheus',
      args: [
        '--config.file=./prometheus.yml',
        // Add other Prometheus command-line arguments here
      ],
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
```

pm2 start pm2-prometheus.config.js


Express နဲ့ချိတ်ဖို့

https://dev.to/austincunningham/get-prometheus-metrics-from-a-express-js-app-53ck

install

npm install prom-client express-prom-bundle --save

add middleware


const promBundle = require("express-prom-bundle");

// Add the options to the prometheus middleware most option are for http_request_duration_seconds histogram metric
const metricsMiddleware = promBundle({
    includeMethod: true, 
    includePath: true, 
    includeStatusCode: true, 
    includeUp: true,
    customLabels: {project_name: 'hello_world', project_type: 'test_metrics_labels'},
    promClient: {
        collectDefaultMetrics: {
        }
      }
});
// add the prometheus middleware to all routes
app.use(metricsMiddleware)





```js
// မင်္ဂလာပါ
// ကျွန်တော် ဒီကုတ်ကို ရေးတုန်းက
// ဒီကုတ်တွေ ဘယ်လို အလုပ်လုပ်လဲဆိုတာ
// ဘုရားနဲ့ ကျွန်တော်ပဲ သိပါတယ်။
// အခုတော့ ဘုရားပဲ သိပါတော့မယ်။
// တကယ်လို့ ခင်ဗျား ဒီကုတ်ကို ပြင်ဖို့ ကြိုးစားတာ
// အလုပ်မဖြစ်ခဲ့ဘူးဆိုရင် နောက်လူတွေကို သတိပေးတဲ့အနေနဲ့
// အောက်က ဂဏန်းကိုသာ တစ်တိုးခဲ့လိုက်ပါ

// total_hours_wated_here = 126
```
https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered/482129#482129

```
Also some systems and the people who wrote them are old.

I've seen bug reports older than me.
```



// This is crap code but it's 3 a.m. and I need to get this working.


"Will have been left.." *

As the dead people no longer leave messages, you're welcome :D



Dear programmer:
When I wrote this code, only god and
I knew how it worked.
Now, only god knows it!

Therefore, if you are trying to optimize
this routine and it fails (most surely),
please increase this counter as a
warning for the next person:

// total_hours_wasted_here = 254

