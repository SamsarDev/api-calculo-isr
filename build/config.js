"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DB_NAME = exports.PORT = exports.HOST = exports.NODE_ENV = void 0;

require("dotenv").config();

var NODE_ENV = process.env.NODE_ENV || "development";
exports.NODE_ENV = NODE_ENV;
var HOST = process.env.HOST || "localhost";
exports.HOST = HOST;
var PORT = process.env.PORT || 3000;
exports.PORT = PORT;
var DB_NAME = process.env.DB_NAME || "proyeccionIsr";
exports.DB_NAME = DB_NAME;