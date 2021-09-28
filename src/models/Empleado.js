import { Schema, model } from "mongoose";

const empleadoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    codigo: {
      type: String,
      required: true,
      unique: true,
    },
    fecha_ingreso: {
      type: String,
    },
    pagos: {
      frecuencia: {
        type: String,
      },
      moneda: {
        type: String,
      },
      sueldo: {
        ingresos: {
          type: Number,
        },
        descuentos: {
          type: Number,
        },
      },
      aguinaldo: {
        ingresos: {
          type: Number,
        },
        descuentos: {
          type: Number,
        },
      },
      salario_14: {
        ingresos: {
          type: Number,
        },
        descuentos: {
          type: Number,
        },
      },
      bonos: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Empleados", empleadoSchema);
