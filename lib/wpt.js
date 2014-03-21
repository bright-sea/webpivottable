'use strict';

var fs = require('fs'),
    Stream = require('stream'),
    request = require("request"),
    childProcess = require('child_process'),
    crypto = require('crypto'),
    path = require('path'),
    phantomjs = require('phantomjs'),
    binPath = phantomjs.path;
    


var wpt = {

    xmlaProxy : function ( req,res ) {
        
        // req.pipe(request(req.get("xmlaUrl"), function(error, response){
        //     if (error){
        //         console.log("error:", error);
        //         return;
        //     }
        //     console.log("response:", response);
        //     response.pipe(res);
        // }));        
        
        req.pipe(request(req.get("xmlaUrl"))).pipe(res);        
    }, 

    fileProxy : function ( req,res ) {
        request.get(req.get("fileUrl")).pipe(res);
    },


    saveLocal : function ( req,res ) {
        // console.log("data", req.body);
        // console.log("data", JSON.parse(req.body));

        var stream = new Stream();
        
        // res.attachment('hello.wpt');
        // res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader("Content-Disposition", "attachment; filename=\"hello.wpt\"" );        

        stream.pipe = function(dest) {
            dest.end("werwerew");
        };

        stream.pipe(res);
    }, 
    
    generatePdf : function ( req,res ) {
      
        var fileName = "report"+crypto.randomBytes(4).readUInt32LE(0),
            htmlFile = __dirname+"/../public/report/"+fileName+".html",
            htmlLink = "http://"+req.body.host+"/report/"+fileName+".html",
            pdfFile  = __dirname+"/../public/report/"+fileName+".pdf";
      
        // var cookies = JSON.stringify(req.headers.cookie)
        // fs.writeFile('cookies.txt', cookies, function (err) {
        //     if (err) throw err;
            
            // Save to HTML file
            fs.writeFile(htmlFile, req.body.html, function(err) {
                if (err) {
                    throw err;
                }
    
                var childArgs = [
                  path.join(__dirname, 'generate_pdf.js'),
                  htmlFile,
                  pdfFile
                ]
    
                childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
                    if (err) {
                        throw err;
                    }
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    });
                    res.end('{"file":"/report/'+fileName+'.pdf"}');
                })
                    
                    
//            });
            
            
        });    
    
// tmp_file = open('/tmp/cookies.txt', 'w+')
//     # Get the current user cookie
//     cookies = request.COOKIES
//     # Write csrftoken and sessionid to a local file
//     tmp_file.write(cookies['csrftoken'] + ' ' + cookies['sessionid'])
//     # Write all the information was passed from the url to the same local file
//     tmp_file.write(' ' + categories)
//     tmp_file.write(' ' + notification)
//     tmp_file.close()                
                
                
            console.log("htmllink", htmlLink);    
    }
    
    
};

module.exports = wpt;

