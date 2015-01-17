'use strict';

var fs = require('fs'),
    Stream = require('stream'),
    request = require("request"),
    crypto = require('crypto'),
    path = require('path'),
    temp = require('temp').track(),
    phantomjs = require('phantomjs'),
    phantom = require('phantom');


exports.xmlaProxy = function ( req,res ) {
    req.pipe(request(req.get('xmlaUrl'))).pipe(res);
};

exports.fileProxy = function ( req,res ) {
    request.get(req.get('fileUrl')).pipe(res);
};


exports.generatePdf = function ( req,res ) {

    var type = req.body.type,
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
                loadPlugins: false,
                userAgent: 'Chrome/37.0.2062.120'
    //                    userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36'
            };
            page.set('viewportSize', { width: 800, height: 600 });
            page.set('paperSize', {
                //width: '200px',   // 'mm', 'cm', 'in', 'px'. No unit means 'px'.
                //height: '300px',
                format: 'A4',       //'A3', 'A4', 'A5', 'Legal', 'Letter', 'Tabloid'.
                orientation: 'portrait',  //'portrait', 'landscape'
                border: '1cm',  //1cm
                margin: '1cm'
            });
            page.set('zoomFactor', 1);
            page.set('scrollPosition',{top: 100, left: 0});

            page.set('content', html, function (error) {

                temp.open('report', function(err, info) {
                    if (!err) {
                        console.log("filepath", info.path);
                        page.render(info.path, {
                            format: type,
                            quality: '100'
                        }, function (error) {
                            var readStream = fs.createReadStream(info.path);
                            readStream.pipe(res);
                            readStream.on('close', function(){
                                temp.cleanup();
                            });
                        });
                        ph.exit();
                    }
                });
            });
        });
    });
};

exports.saveLocal = function ( req,res ) {
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
};

