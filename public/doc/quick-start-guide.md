---
title: Quick Start Guide
description: "WebPivotTable quick start guide"
---

## Download

Please go to [Download Page](/download) to get a WebPivotTable package.

There are two editions of WebPivotTable: Free edition and Pro edition.
Free edition has almost the same functionalities as Pro edition except that Free edition does not provide some [APIs](/doc/apis). 

## Installation

WebPivotTable is an javascript component, the installation is just like any other javascript component.
Put component javascript files to any public directory of web server so that your web page or web application can
import them is all you need to do.

When you get the packaged zip file, unzip it to any directory and you will see list below directory structure:

```
webpivotptable
       ├─-- public
       |       ├─-- dist
       |       |      └─-- webpivottable.js
       |       |--- lang  
       |       |      ├─-- de.json
       |       |      ├─-- en.json
       |       |      ├─-- es.json
       |       |      ├─-- it.json
       |       |      ├─-- pt.json
       |       |      ├─-- tr-TR.json
       |       |      └─-- zh-CN.json
       |       ├─-- index.html
       |       ├─-- jquery.html
       |       ├─-- ...
       |       └─-- react.html
       └─-- server
               ├─-- README.md
               ├─-- package.json
               ├─-- server.js
               └─-- wpt.json

```
 
__"public"__ directory is all you need to integrate WebPivotTable into your web page or web application.
Copy this directory into root public directory of your web server, and that's it, installation is done.  

  * __"lang"__ sub-directory includes all language files to support internationalization(i18n). 
 
    <div class="Alert Alert--orange">
    Please reference [Internationalization](/doc/internationalization) for more details. 
    </div>

  * Those html files under public directory are not necessary for WebPivotTable to work. They are just samples on how to
   [integrate WebPivotTable](#integration) into different environments, you can remove them anytime.


__"server"__ directory includes a NodeJs proxy server to support cross domain access. WebPivotTable has a default
 proxy server setting so that you do not need to run your own proxy server. But if run your own proxy server is necessary, 
 please follow README.md inside this directory to set it up. 

<p class="Alert Alert--orange">
Please reference [Cross domain access](/doc/cross-domain-access) for more details. 
</p>
 
 
## Integration
 
To integrate WebPivotTable, we only need to import one javascript file into web page like:

```html
<script type="text/javascript" src="./dist/webpivottable.js"></script>
```

Then, we can put a "wpt-pivot-table" tag into page:
```html
<body>
  <div id="wpt-container">
    <web-pivot-table />
  </div>
</body>
``` 
 
That's all. Simple enough. Now we have a full functional WebPivotTable on our web page.       
 
List below is an example html file:
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <title>WebPivotTable</title>

  <style type="text/css">
    html, body, #wpt-container {width:100%;height:100%; padding:0; margin:0;}
  </style>

  <script type="text/javascript" src="./dist/webpivottable.js"></script>

</head>

<body>
  <div id="wpt-container">
    <web-pivot-table />
  </div>
</body>

</html>
```  
  
And here is the demo of this html page:  [Demo without any framework](/demo) 
  
<div class="Alert Alert--orange">
Please reference [Integration](/doc/integration) for more examples of integration on different environments. 
</div>
  
  
## Customization

WebPivotTable provides lots of options for developer to customize its look and feel and behaviours
in web page or web application.

<div class="Alert Alert--orange">
Please reference [Options](/doc/options) for all possible options.
</div>


WebPivotTable also provides lots of APIs for developers to call from hosted web page or web application.
For example, developers can use these APIs to load source data from any kind of data resources,
or to save WebPivotTable into server side for future reload, etc.

<div class="Alert Alert--orange">
Most APIs are Pro edition only. Please reference [APIs](/doc/apis) for more details.
</div>



