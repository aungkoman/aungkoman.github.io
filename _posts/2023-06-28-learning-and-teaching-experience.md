---
layout: post
title:  "Learning and Teaching Experience"
date:   2023-06-28 08:30:00 +0630
categories: howto
---

ကိုယ် ဘယ်လို စာစသင်ဖြစ်တယ်။
- Foreign Officer

ကိုယ့်ထက် အသက်၊ ရာထူး အားဖြင့် ကြီးသော။

နောက် အသက်ထပ်ဝက်ငယ်သော ကလေးတွေ။

- စကား ဗလုံးပထွေး


## Google Map

I know this is too late to answer this question. But I want to share my knowledge in this question. For the static purpose you can freely add the google map tiles inside your leaflet. For the static tiles, you can add following code, for street,

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
Hybrid,

googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
satellite,

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
Terrain

googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
Note that difference in the "lyrs" parameter in the URL:

Hybrid: s,h;
Satellite: s;
Streets: m;
Terrain: p;