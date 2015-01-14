'use strict';

var fs = require('fs'),
    Stream = require('stream'),
    request = require("request"),
    crypto = require('crypto'),
    path = require('path'),
    phantomjs = require('phantomjs'),
    phantom = require('phantom');


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
            pdfFile  = __dirname+"/../public/report/"+fileName+".pdf",
            html = req.body.html;

        phantom.create({
            //port: 12345,
            binary: phantomjs.path
        },function (ph) {
            ph.createPage(function (page) {
                page.settings = {
                    loadImages: true,
                    localToRemoteUrlAccessEnabled: true,
                    javascriptEnabled: true,
                    loadPlugins: false
                };
                page.set('viewportSize', { width: 800, height: 600 });
                page.set('paperSize', { format: 'A4', orientation: 'portrait', border: '1cm' });

                page.set('content', html, function (error) {

                    page.render(pdfFile, function (error) {
                        ph.exit();
                        res.writeHead(200, {
                            'Content-Type': 'text/plain'
                        });
                        res.end('{"file":"/report/'+fileName+'.pdf"}');

                    });
                });

                //page.settings = {
                //    loadImages: true,
                //    localToRemoteUrlAccessEnabled: true,
                //    javascriptEnabled: true,
                //    loadPlugins: false
                //};
                //page.set('viewportSize', { width: 800, height: 600 });
                //page.set('paperSize', { format: 'A4', orientation: 'portrait', border: '1cm' });
                //page.set('content', html, function (error) {
                //    if (error) {
                //        console.log('Error setting content: ', error);
                //    }
                //});
                //
                //page.onResourceRequested = function (rd, req) {
                //    console.log("REQUESTING: ", rd[0]["url"]);
                //}
                //page.onResourceReceived = function (rd) {
                //    rd.stage == "end" && console.log("LOADED: ", rd["url"]);
                //}
                //page.onLoadFinished = function (status) {
                //    page.render(url, function (error) {
                //        if (error) console.log('Error rendering PDF: %s', error);
                //        console.log("PDF GENERATED : ", status);
                //        ph.exit();
                //        cb && cb();
                //    });
                //}

            });
        });
    }

};

module.exports = wpt;

