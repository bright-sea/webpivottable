# WPT ( WebPivotTable ) component

## How to get WPT component?

### [Github](https://github.com/bright-sea/webpivottable)

WPT component is a public github project for any one to download and try it

### [NPM](https://www.npmjs.com/package/webpivottable)

WPT component published as a npm package, you can install it by run:

```
npm install webpivottable
```

or
```
yarn add webpivottable
```

### CDN

https://webpivottable.com/releases/latest/dist/wpt.js



## How to use WPT component?


### Public directory

Copy whole public directory into web server root is all we need, no depends on any other libs or frameworks.

To integrate WPT component, we only need import one javascript file into web page like below:

```html
  <script type="text/javascript" src="./dist/wpt.js"></script>
```

Then, we can put a "wpt-pivot-table" tag into page:
```html
<body>
  <div id="wpt-container">
    <web-pivot-table />
  </div>
</body>
``` 
 
That's all. Simple enough. Now we have a full functional WebPivotTable on web page.       
 
List below is a sample html file:
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <title>WebPivotTable Component</title>

  <style type="text/css">
    html, body, #wpt-container {width:100%;height:100%; padding:0; margin:0;}
  </style>

  <script type="text/javascript" src="./dist/wpt.js"></script>

</head>

<body>
  <div id="wpt-container">
    <web-pivot-table />
  </div>
</body>

</html>
```  

### Server directory (optional)

For cross domain file or olap access, wpt component default to use our demo server as proxy:

```
options: {
  server: {
    fileProxyEnabled: 1,          // enable/disable file Proxy 1/0
    fileProxy: 'http://demo.webpivottable.com/wpt/fileProxy',  // Server proxy for cross domain file acess
    fileTimeout: 30000,
    xmlaProxyEnabled: 1,        // enable/disable Xmla Proxy 1/0
    xmlaProxy: 'http://demo.webpivottable.com/wpt/xmlaProxy', // Server proxy for cross domain xmla access
    xmlaTimeout: 30000,
  },
}  
``` 

If you want to run a server proxy by your own, please copy server directory as a nodeJs application.
or if you are using other back end technology (like java, php, .net), you can add a proxy endpoint into your
backend services the same as services.js inside server directory have done.


But if you have no cross domain access, then you can disable those proxies in above options. 


## [DEMO](https://webpivottable.com/demo)


## [Document](https://webpivottable.com/doc)

