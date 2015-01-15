'use strict';

var fs = require('fs'),
    Stream = require('stream'),
    request = require("request"),
    crypto = require('crypto'),
    path = require('path'),
    phantomjs = require('phantomjs'),
    phantom = require('phantom'),
    webshot = require('webshot');


var wpt = {

    xmlaProxy : function ( req,res ) {
        
        // req.pipe(request(req.get('xmlaUrl'), function(error, response){
        //     if (error){
        //         console.log('error:', error);
        //         return;
        //     }
        //     console.log('response:', response);
        //     response.pipe(res);
        // }));        
        
        req.pipe(request(req.get('xmlaUrl'))).pipe(res);
    }, 

    fileProxy : function ( req,res ) {
        request.get(req.get('fileUrl')).pipe(res);
    },


    saveLocal : function ( req,res ) {
        // console.log('data', req.body);
        // console.log('data', JSON.parse(req.body));

        var stream = new Stream();
        
        // res.attachment('hello.wpt');
        // res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Content-Disposition', 'attachment; filename="hello.wpt"' );

        stream.pipe = function(dest) {
            dest.end('werwerew');
        };

        stream.pipe(res);
    },

    generatePic : function ( req,res ) {


        var html = req.body.html,
            type = req.body.type;

        var options = {
            screenSize: {
                width: 320
                , height: 480
            }
            , shotSize: {
                width: 320
                , height: 'all'
            }
            , userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
            + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
        };


        webshot(html, {siteType:'html', streamType:type}, function(err, renderStream) {
            renderStream.pipe(res);
        });

    },

    generatePdf : function ( req,res ) {


        var fileName = 'report'+crypto.randomBytes(4).readUInt32LE(0),
            pdfFile  = __dirname+'/../public/report/'+fileName+'.pdf',
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

                        var readStream = fs.createReadStream(pdfFile);

                        readStream.pipe(res);

                        readStream.on('close', function(){
                            fs.unlink(pdfFile);
                        });
                    });
                    ph.exit();
                });
            });
        });
    }
};

module.exports = wpt;

