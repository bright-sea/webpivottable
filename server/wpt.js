"use strict";

var request = require("request");

exports.xmlaProxy = function(req, res) {
  req
    .pipe(
      request(req.headers["x-xmla-url"]).on("error", function(err) {
        res.send(400, err);
      })
    )
    .pipe(res);
};

exports.fileProxy = function(req, res) {
  try {
    request
      .get(req.headers["x-file-url"])
      .on("error", function(err) {
        res.send(400, err);
      })
      .pipe(res);
  } catch (error) {
    res.send(500, req.headers["x-file-url"] + " is not available!");
  }
};

exports.wsSample = function(req, res) {
  var data = {
    attrArray: ["abc", "xyz"],
    dataArray: [[1, 3], [2, 4]]
  };

  res.jsonp(data);
};
