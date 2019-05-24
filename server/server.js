/**
 * Module dependencies.
 */
var express = require("express"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  methodOverride = require("method-override"),
  cors = require("cors"),
  services = require("./services.js"),
  app = (module.exports = express());

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(methodOverride());

app.post("/wpt/fileProxy", services.fileProxy);
app.post("/wpt/xmlaProxy", services.xmlaProxy);
app.get("/wpt/wsSample", services.wsSample);

// catch the uncaught errors that weren't wrapped in a domain or try catch statement
// do not use this in modules, but only in applications, as otherwise we could have multiple of these bound
process.on("uncaughtException", function(err) {
  // handle the error safely
  console.log(err);
});

app.listen(process.env.PORT || 8003);
console.log("Express server listening on port " + (process.env.PORT || 8003));
