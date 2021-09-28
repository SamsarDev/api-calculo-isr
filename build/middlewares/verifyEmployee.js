"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exists = exports.hasCode = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Empleado = _interopRequireDefault(require("../models/Empleado"));

var hasCode = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var codigo;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            codigo = req.body.colaborador;

            if (codigo) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: "El código del colaborador es obligatorio para esta petición."
            }));

          case 3:
            next();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function hasCode(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.hasCode = hasCode;

var exists = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var codigo, colaborador;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            codigo = req.body.colaborador;
            _context2.next = 3;
            return _Empleado["default"].findOne({
              codigo: codigo
            });

          case 3:
            colaborador = _context2.sent;

            if (colaborador) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "El código del colaborador no existe."
            }));

          case 6:
            next();

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function exists(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.exists = exists;