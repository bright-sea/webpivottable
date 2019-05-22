---
title: Cross domain access
description: "Cross domain access"
---

WebPivotTable is a pure javascript front end component, we will always facing [Same-origin Policy](https://en.wikipedia.org/wiki/Same-origin_policy)
issue when we want to load some data files from other domains or connect to an OLAP server which served at different domain as well.
To solve this **Same-origin Policy** issue, we need have a **Cross domain access** solution. 

## Same-origin Policy

Let us talk about what's **Same-origin Policy** first.  

<div class="Alert Alert--info">
In computing, the **Same-origin Policy** is an important concept in the web application security model. Under the policy,
a web browser permits scripts contained in a first web page to access data in a second web page, but only if both web pages
have the same origin.
</div>

This same origin is very strict as it is the triple {protocol, host, port} for absolute URIs. Two URIs are considered as
same origin only when they have same protocol, same host and same port. For example, if we want to checks against the URL
**http://www.example.com/dir/page.html** , the outcome will be:  

| Compared URL                                                | Outcome                                              | Reason                                |
|-------------------------------------------------------------|------------------------------------------------------|---------------------------------------|
| http://www.example.com/dir/page2.html                       | <span style="background-color:#9F9">Success</span>   | Same protocol, host and port          |
| http://www.example.com/dir2/other.html                      | <span style="background-color:#9F9">Success</span>   | Same protocol, host and port          |
| http://username:password@www.example.com/dir2/other.html    | <span style="background-color:#9F9">Success</span>   | Same protocol, host and port          |
| http://www.example.com:81/dir/other.html                    | <span style="background-color:#F99">Failure</span>   | Different port                        |
| https://www.example.com/dir/other.html                      | <span style="background-color:#F99">Failure</span>   | Different protocol                    |
| http://en.example.com/dir/other.html                        | <span style="background-color:#F99">Failure</span>   | Different host                        |
| http://example.com/dir/other.html                           | <span style="background-color:#F99">Failure</span>   | Different host (exact match required) |
| http://v2.www.example.com/dir/other.html                    | <span style="background-color:#F99">Failure</span>   | Different host (exact match required) |


<div class="Alert Alert--info">
After we integrate WebPivotTable into web page or web application, it will have a fixed domain. When we try to load some data files
which sit on another domain as source data into WebPivotTable or when we try to connect to an OLAP server which site on another domain,
we will face this Same-origin Policy issue and failed.  
</div>


## Cross-Origin Resource Sharing

[Cross-Origin Resource Sharing(CORS)](https://www.w3.org/TR/cors/) is a technique for relaxing the same-origin policy
in order to solve Same-origin policy issue.

CORS is good but to be able use CORS, we need enable CORS on web server which provide resources first. For example,
we need enable CORS on those web servers which have data files we want to load or enable CORS on OLAP server we want to connect to.     
This usually is out of our control or can't be changed in reality.


## Proxy Server

<div class="Alert Alert--orange">
Proxy Server come to the rescue.
</div>

Same-origin Policy is a secure model only apply to Browsers, not apply to Server. At server side, we can request any resources
on any other domains without worry about Same-origin policy. So if we can have a server as a proxy, this server will accept all requests from browser, then it proxy all
these requests to real resources domain and proxy back all responses from real resources to browsers, issue solved.

This is exactly Proxy Server does. We packaged a [server directory](/doc/quick-start-guide#installation) inside WebPivotTable download package.
You can run a proxy server by following instruction in README.md to set it up.

After proxy server running, we can use this server as our fileProxy and xmlaProxy in [Server Options](/doc/options#server)

   
## Default Proxy Server

WebPivotTable default to use a public proxy server provided at https://demo.webpivottable.com so that you don't need
to run your own server even if you have cross domian access requirement. 

### Cross domain access to OLAP server

For security reason, there is a [Same Origin Policy](https://en.wikipedia.org/wiki/Same-origin_policy) in 
browsers. It means, web page of the application in web server (for example, web page which integrated WebPivotTable)
can’t access other web server (for example, OLAP server) directly if there are not at the same
domain. (Pay attention that same domain means the same ip address and same port.)

One of cross domain access solutions is using proxy. Proxy is a web service at web server which forwards 
the request from WebPivotTable to OLAP server, then forward response from OLAP server back to WePivotTable. 


In our nodeJs web server, we provide a proxy service at http://web_URL/wpt/xmlaProxy  , and the source code
of this service is quite simple, you can see it at wpt.js file in root directory.

