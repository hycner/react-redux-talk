/* eslint-disable */
var path = require("path");
var express = require("express");

var app = express();
var port = process.env.PORT || 3000; // 3000 for testing

app.use(express.static(__dirname));

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + port);
});
