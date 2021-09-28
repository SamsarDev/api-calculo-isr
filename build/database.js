"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _config = require("./config");

var _mongoose = _interopRequireDefault(require("mongoose"));

require("dotenv").config();

_mongoose["default"].connect("mongodb://".concat(_config.HOST, "/").concat(_config.DB_NAME)).then(function () {
  return console.log("DB: ".concat(_config.DB_NAME, " conectada"));
})["catch"](function (error) {
  return console.error(error);
});