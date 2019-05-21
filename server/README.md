# WPT-Proxy

NodeJS server proxy for wpt component

## Why you may need this?

### "Same Origin Policy" issue

[WPT component](http://webpivottable.com) is a pure javascript web component and not depends on any server side.

But if you need to load data files from internet links into wpt component or you need to connect olap server 
through wpt component which located on different domain, 
you will always have ["Same origin policy"](https://en.wikipedia.org/wiki/Same-origin_policy) access issue.

[Cross-origin resource sharing (CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) is a mechanism to 
allow you to deal with "Same origin policy" issue.

But wait, CORS depends on server side configuration and I can't change it.

### Server proxy to the rescue

"Same origin Policy" only apply to access through browser, not apply to access through server.
 Use a server proxy between browser and access resourses is a reliable method. 
 
 This NodeJs server is a simple server proxy particularly for wpt component.
 
 
 ## How to use it?
 
 ### run as a server
 
```
npm install
``` 

```
node server
```



### Set wpt component customize options to use this proxy:

Follow [wpt component documents](http://doc.webpivottable.com) 


```
options: {
  server: {
    fileProxyEnabled: 1, 
    fileProxy: 'http://localhost:8003/wpt/fileProxy', 
    fileTimeout: 30000,
    xmlaProxyEnabled: 1,       
    xmlaProxy: 'http://localhost:8003/wpt/xmlaProxy', 
    xmlaTimeout: 30000,
  },
}
```