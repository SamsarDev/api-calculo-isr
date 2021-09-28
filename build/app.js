"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _empleados = _interopRequireDefault(require("./routes/empleados.routes"));

var _initialSetup = require("./utils/initialSetup");

var app = (0, _express["default"])();
(0, _initialSetup.createDefaultEmployees)();
app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev")); // Routes

app.use(_empleados["default"]);
app.get("/", function (req, res) {
  res.json({
    message: "Prueba práctica: Samuel Sarmientos",
    info: {
      author: _package["default"].author,
      description: _package["default"].description,
      version: _package["default"].version,
      license: _package["default"].license
    }
  });
});
var _default = app;
exports["default"] = _default;