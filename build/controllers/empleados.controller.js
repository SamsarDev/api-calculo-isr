"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.deleteEmployeeByCode = exports.updateEmployeeByCode = exports.createEmployee = exports.getDefaultEmployees = exports.getIsrByEmployeeCode = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Empleado = _interopRequireDefault(require("../models/Empleado"));

var _employeers = require("../utils/auxs/employeers");

var getIsrByEmployeeCode = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, codigo, fecha_ingreso, colaborador, frecuencia, fiv, isr;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, codigo = _req$body.colaborador, fecha_ingreso = _req$body.fecha_ingreso;
            _context.next = 3;
            return _Empleado["default"].findOne({
              codigo: codigo
            });

          case 3:
            colaborador = _context.sent;
            frecuencia = colaborador.pagos.frecuencia;
            _context.next = 7;
            return (0, _employeers.frecuenciaIsValid)(frecuencia);

          case 7:
            fiv = _context.sent;
            if (!fiv) res.status(400).json("La frecuencia de pago para este colaborador no es válida para este cálculo");
            _context.next = 11;
            return (0, _employeers.getEmployeeIsr)(colaborador.pagos, fecha_ingreso);

          case 11:
            isr = _context.sent;
            res.json({
              isr: isr
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getIsrByEmployeeCode(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getIsrByEmployeeCode = getIsrByEmployeeCode;

var getDefaultEmployees = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var count, defaultEmployeers;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Empleado["default"].estimatedDocumentCount();

          case 3:
            count = _context2.sent;

            if (!(count <= 0)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "No existen empleados actualmente."
            }));

          case 6:
            _context2.next = 8;
            return _Empleado["default"].find({});

          case 8:
            defaultEmployeers = _context2.sent;
            res.status(200).json(defaultEmployeers);
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            res.status(501).json({
              message: "Error",
              error: _context2.t0
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function getDefaultEmployees(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDefaultEmployees = getDefaultEmployees;

var createEmployee = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res.json("Crear Empleado");

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createEmployee(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createEmployee = createEmployee;

var updateEmployeeByCode = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res.json("Actualizar Empleado");

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateEmployeeByCode(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateEmployeeByCode = updateEmployeeByCode;

var deleteEmployeeByCode = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            res.json("Eliminar Empleado");

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteEmployeeByCode(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteEmployeeByCode = deleteEmployeeByCode;
var _default = {
  getIsrByEmployeeCode: getIsrByEmployeeCode,
  createEmployee: createEmployee,
  updateEmployeeByCode: updateEmployeeByCode,
  deleteEmployeeByCode: deleteEmployeeByCode
};
exports["default"] = _default;