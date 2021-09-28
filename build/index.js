"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _config = require("./config");

var _app = _interopRequireDefault(require("./app"));

require("./database");

console.log("NODE_ENV = ".concat(_config.NODE_ENV));

_app["default"].listen(_config.PORT, _config.HOST, 0, function () {
  console.log("Server en https://".concat(_config.HOST, ":").concat(_config.PORT));
});