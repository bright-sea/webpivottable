[Back to Index](./index.md)


## Why we may need xmlaProxy Web Service?

### Cross domain access to OLAP server

For security reason, there is a [Same Origin Policy](https://en.wikipedia.org/wiki/Same-origin_policy) in 
browsers. It means, web page of the application in web server (for example, web page which integrated WPT
component) can’t access other web server (for example, OLAP server) directly if there are not at the same
domain. (Pay attention that same domain means the same ip address and same port.)

One of cross domain access solutions is using proxy. Proxy is a web service at web server which forwards 
the request from WPT component to OLAP server, then forward response from OLAP server back to WPT component. 


In our nodeJs web server, we provide a proxy service at http://web_URL/wpt/xmlaProxy  , and the source code
of this service is quite simple, you can see it at wpt.js file in root directory.




## Implementation of xmlaProxy Web Service

### NodeJS (Javascript) version (included in WPT component)

    exports.xmlaProxy = function ( req,res ) {
        req.pipe(request(req.get('xmlaUrl'))
                .on('error', function(err) {
                    res.send(400, err);
                })
        ).pipe(res);
    };

WPT component will send all request to “/wpt/xmlaProxy” with an extra header “xmlaUrl”, the value of this header
is real OLAP server URL. Since proxy url “/wpt/xmlaProxy” is at web server and the same domain, this request is
OK. When proxy get the request, it will retrieve the value of “xmlaUrl” header,this is done by code:

    req.get(“xmlaUrl”)

Then it will make another request to this URL(that’s a request to real OLAP server), the code is

    request(req.get("xmlaUrl"))

Although this is still a cross domain request (from web server to olap server, but since this request is at server
side, not in browser, same origin policy is only a limitation in browsers, at server side, we can make any http 
request to other servers)

Then, pipe other information in request from WPT component in this request as well, this is done by code:

    req.pipe(request("..."))

Finally, when proxy get response, pipe it back to response which should send back to WPT component, this is done 
by code:

    .pipe(res)

Summary: Proxy get real olap server url from header, then make a http request to this url, and pipe the response
back to WPT component.


### JAVA version (contributed by Ade Putra)

#### Restfull Web Service

    import org.apache.http.HttpEntity;
    import org.apache.http.client.fluent.Content;
    import org.apache.http.client.fluent.Request;
    import org.apache.http.entity.ContentType;

    @Path("wptProxy")
    @POST
    @Consumes(MediaType.TEXT_XML)
    @Produces(MediaType.TEXT_XML)
    public Response wptProxy(@HeaderParam("xmlaUrl") String urls, @Context HttpServletRequest httpRequest) throws IOException {   
          Content content = Request.Post(urls)
             .bodyStream(httpRequest.getInputStream(), ContentType.TEXT_XML)
             .execute()
             .returnContent();
          return Response.ok(content.asString()).build();
    }


#### Stripes (Framework) actionBean

    import org.apache.http.HttpEntity;
    import org.apache.http.client.fluent.Content;
    import org.apache.http.client.fluent.Request;
    import org.apache.http.entity.ContentType;

    public Resolution wptProxy() throws IOException {
        String urls = context.getRequest().getHeader("xmlaUrl");
       
        Content content = Request.Post(urls)
                .bodyStream(context.getRequest().getInputStream(), ContentType.TEXT_XML)
                .execute()
                .returnContent(); 
        
        StreamingResolution streamingResolution = new StreamingResolution("text/xml", content.asString());
        return streamingResolution; 
    }


#### Maven Dependency (pom.xml)

     <dependency>
           <groupId>org.apache.httpcomponents</groupId>
           <artifactId>fluent-hc</artifactId>
           <version>4.2.6</version>
     </dependency>


