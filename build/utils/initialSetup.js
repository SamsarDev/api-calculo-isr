"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDefaultEmployees = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Empleado = _interopRequireDefault(require("../models/Empleado"));

var _empleados_default = require("./empleados_default");

var createDefaultEmployees = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var count, defaultEmployees;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Empleado["default"].estimatedDocumentCount();

          case 3:
            count = _context.sent;

            if (!(count > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return Promise.all([new _Empleado["default"](_empleados_default.PanfiloReyes).save(), new _Empleado["default"](_empleados_default.LucreciaArana).save(), new _Empleado["default"](_empleados_default.MarcellaFlores).save()]);

          case 8:
            defaultEmployees = _context.sent;
            console.log("Default employee were created:");
            console.log(defaultEmployees);
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function createDefaultEmployees() {
    return _ref.apply(this, arguments);
  };
}();

exports.createDefaultEmployees = createDefaultEmployees;