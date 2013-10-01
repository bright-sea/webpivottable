/**
 * Module dependencies.
 */
var express = require( 'express' ),
    wpt = require('./lib/wpt.js'),
    app = module.exports = express();

// Configuration
app.configure( function () {
  app.use( express.bodyParser() );
  app.use( express.methodOverride() );
//  app.use( express.cookieParser());  
  app.use( express.static( __dirname + '/public' ) );
  app.use( app.router );
});

app.post( '/wpt/csvProxy', function ( req, res ) {
    wpt.csvProxy(req, res);
});

app.post( '/wpt/generatePdf', function ( req, res ) {
    wpt.generatePdf(req, res);
});

app.post( '/wpt/xmlaProxy', function ( req, res ) {
    wpt.xmlaProxy(req, res);
});


app.configure( 'development', function () {
    app.use( express.logger() );
    app.use( express.errorHandler( { dumpExceptions: true, showStack: true } ) ); 
});

app.configure( 'production', function () {
    app.use( express.errorHandler() ); 
});

// catch the uncaught errors that weren't wrapped in a domain or try catch statement
// do not use this in modules, but only in applications, as otherwise we could have multiple of these bound
process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log(err);
});



app.listen( process.env.PORT || 8002 );
console.log("Express server listening on port "+(process.env.PORT||8002));
