"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var empleadoSchema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  codigo: {
    type: String,
    required: true,
    unique: true
  },
  fecha_ingreso: {
    type: String
  },
  pagos: {
    frecuencia: {
      type: String
    },
    moneda: {
      type: String
    },
    sueldo: {
      ingresos: {
        type: Number
      },
      descuentos: {
        type: Number
      }
    },
    aguinaldo: {
      ingresos: {
        type: Number
      },
      descuentos: {
        type: Number
      }
    },
    salario_14: {
      ingresos: {
        type: Number
      },
      descuentos: {
        type: Number
      }
    },
    bonos: []
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Empleados", empleadoSchema);

exports["default"] = _default;