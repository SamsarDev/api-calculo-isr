"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmployeeIsr = exports.getCalculateIsr = exports.calculateBono14 = exports.calculateAguinaldo = exports.calculateBonos = exports.getTotalSalarios = exports.ifHaveDateIsValid = exports.frecuenciaIsValid = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var frecuenciaIsValid = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(frecuencia) {
    var frecuenciasValidas;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            frecuenciasValidas = ["mensual", "quincenal", "semanal"];
            return _context.abrupt("return", frecuenciasValidas.includes(frecuencia.toLowerCase()));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function frecuenciaIsValid(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.frecuenciaIsValid = frecuenciaIsValid;

var ifHaveDateIsValid = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(fecha_ingreso) {
    var regex, fi, year, month, fa, ya;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            regex = /([0-3])?[0-9]{1}(\/|\-|\.){1}([0-2])?[0-9]{1}(\/|\-|\.){1}[0-9]{2,4}/;

            if (!(fecha_ingreso && regex.test(fecha_ingreso))) {
              _context2.next = 10;
              break;
            }

            fi = new Date(fecha_ingreso);
            year = fi.getFullYear();
            month = fi.getMonth();
            fecha_ingreso = {
              year: year,
              month: month
            };
            fa = new Date();
            ya = fa.getFullYear;
            if (year < ya || year > ya || month >= 11) fecha_ingreso = null;
            return _context2.abrupt("return", fecha_ingreso);

          case 10:
            fecha_ingreso = null;
            return _context2.abrupt("return", fecha_ingreso);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function ifHaveDateIsValid(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.ifHaveDateIsValid = ifHaveDateIsValid;

var getTotalSalarios = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(fecha_ingreso, frecuencia, sueldo) {
    var meses, cantSalarios, ingresosSueldoAnual, descuentosSueldoAnual;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            meses = fecha_ingreso ? fecha_ingreso.month + 1 - meses : 12;
            cantSalarios = 0;
            _context3.t0 = frecuencia.toLowerCase();
            _context3.next = _context3.t0 === "semanal" ? 5 : _context3.t0 === "quincenal" ? 7 : _context3.t0 === "mensual" ? 9 : 11;
            break;

          case 5:
            cantSalarios = meses * 4;
            return _context3.abrupt("break", 11);

          case 7:
            cantSalarios = meses * 2;
            return _context3.abrupt("break", 11);

          case 9:
            cantSalarios = meses;
            return _context3.abrupt("break", 11);

          case 11:
            ingresosSueldoAnual = Number((cantSalarios * (sueldo === null || sueldo === void 0 ? void 0 : sueldo.ingresos)).toFixed(2)) || 0;
            descuentosSueldoAnual = Number((cantSalarios * (sueldo === null || sueldo === void 0 ? void 0 : sueldo.descuentos)).toFixed(2)) || 0;
            return _context3.abrupt("return", {
              cantSalarios: cantSalarios,
              ingresosSueldoAnual: ingresosSueldoAnual,
              descuentosSueldoAnual: descuentosSueldoAnual
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getTotalSalarios(_x3, _x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getTotalSalarios = getTotalSalarios;

var calculateBonos = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(bonos) {
    var cantidadBonos, ingresosBonos, descuentosBonos;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            cantidadBonos = bonos.length || 0;
            ingresosBonos = 0, descuentosBonos = 0;

            if (cantidadBonos >= 1) {
              bonos.forEach(function (bono) {
                ingresosBonos += (bono === null || bono === void 0 ? void 0 : bono.ingresos) || 0;
                descuentosBonos += (bono === null || bono === void 0 ? void 0 : bono.descuentos) || 0;
              });
            }

            return _context4.abrupt("return", {
              cantidadBonos: cantidadBonos,
              ingresosBonos: ingresosBonos,
              descuentosBonos: descuentosBonos
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function calculateBonos(_x6) {
    return _ref4.apply(this, arguments);
  };
}();

exports.calculateBonos = calculateBonos;

var calculateAguinaldo = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(aguinaldo) {
    var ingresosAguinaldo, descuentosAguinaldo;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            ingresosAguinaldo = (aguinaldo === null || aguinaldo === void 0 ? void 0 : aguinaldo.ingresos) || 0;
            descuentosAguinaldo = (aguinaldo === null || aguinaldo === void 0 ? void 0 : aguinaldo.descuentos) || 0;
            return _context5.abrupt("return", {
              ingresosAguinaldo: ingresosAguinaldo,
              descuentosAguinaldo: descuentosAguinaldo
            });

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function calculateAguinaldo(_x7) {
    return _ref5.apply(this, arguments);
  };
}();

exports.calculateAguinaldo = calculateAguinaldo;

var calculateBono14 = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(bono14) {
    var ingresosBono14, descuentosBono14;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            ingresosBono14 = (bono14 === null || bono14 === void 0 ? void 0 : bono14.ingresos) || 0;
            descuentosBono14 = (bono14 === null || bono14 === void 0 ? void 0 : bono14.descuentos) || 0;
            return _context6.abrupt("return", {
              ingresosBono14: ingresosBono14,
              descuentosBono14: descuentosBono14
            });

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function calculateBono14(_x8) {
    return _ref6.apply(this, arguments);
  };
}();

exports.calculateBono14 = calculateBono14;

var getCalculateIsr = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(TRA, TDA, cantSalarios) {
    var RIA, MV, RN, ISRA, ISR;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            RIA = TRA - TDA;
            MV = 48000;
            RN = RIA - MV;

            if (!(RN < 0)) {
              _context7.next = 5;
              break;
            }

            return _context7.abrupt("return", 0);

          case 5:
            ISRA = Number((RN * 0.05).toFixed(2));
            ISR = Number((ISRA / cantSalarios).toFixed(2));
            return _context7.abrupt("return", ISR);

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getCalculateIsr(_x9, _x10, _x11) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getCalculateIsr = getCalculateIsr;

var getEmployeeIsr = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(colaborador, fi) {
    var frecuencia, sueldo, aguinaldo, salario_14, bonos, fecha_ingreso, _yield$getTotalSalari, cantSalarios, ingresosSueldoAnual, descuentosSueldoAnual, _yield$calculateBonos, ingresosBonos, descuentosBonos, _yield$calculateAguin, ingresosAguinaldo, descuentosAguinaldo, _yield$calculateBono, ingresosBono14, descuentosBono14, TRA, TDA;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            frecuencia = colaborador.frecuencia, sueldo = colaborador.sueldo, aguinaldo = colaborador.aguinaldo, salario_14 = colaborador.salario_14, bonos = colaborador.bonos;
            _context8.next = 3;
            return ifHaveDateIsValid(fi);

          case 3:
            fecha_ingreso = _context8.sent;
            _context8.next = 6;
            return getTotalSalarios(fecha_ingreso, frecuencia, sueldo);

          case 6:
            _yield$getTotalSalari = _context8.sent;
            cantSalarios = _yield$getTotalSalari.cantSalarios;
            ingresosSueldoAnual = _yield$getTotalSalari.ingresosSueldoAnual;
            descuentosSueldoAnual = _yield$getTotalSalari.descuentosSueldoAnual;
            _context8.next = 12;
            return calculateBonos(bonos);

          case 12:
            _yield$calculateBonos = _context8.sent;
            ingresosBonos = _yield$calculateBonos.ingresosBonos;
            descuentosBonos = _yield$calculateBonos.descuentosBonos;
            _context8.next = 17;
            return calculateAguinaldo(aguinaldo);

          case 17:
            _yield$calculateAguin = _context8.sent;
            ingresosAguinaldo = _yield$calculateAguin.ingresosAguinaldo;
            descuentosAguinaldo = _yield$calculateAguin.descuentosAguinaldo;
            _context8.next = 22;
            return calculateBono14(salario_14);

          case 22:
            _yield$calculateBono = _context8.sent;
            ingresosBono14 = _yield$calculateBono.ingresosBono14;
            descuentosBono14 = _yield$calculateBono.descuentosBono14;
            TRA = ingresosSueldoAnual + ingresosAguinaldo + ingresosBono14 + ingresosBonos;
            TDA = descuentosSueldoAnual - descuentosAguinaldo - descuentosBono14 - descuentosBonos;
            _context8.next = 29;
            return getCalculateIsr(TRA, TDA, cantSalarios);

          case 29:
            return _context8.abrupt("return", _context8.sent);

          case 30:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function getEmployeeIsr(_x12, _x13) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getEmployeeIsr = getEmployeeIsr;