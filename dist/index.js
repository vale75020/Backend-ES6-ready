"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(process.env.PORT, function () {
  return console.log("Example app listening on port ".concat(process.env.PORT, "!"));
});