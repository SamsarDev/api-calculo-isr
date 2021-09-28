import Empleado from "../models/Empleado";
import { frecuenciaIsValid, getEmployeeIsr } from "../utils/auxs/employeers";

export const getIsrByEmployeeCode = async (req, res) => {
  const { colaborador: codigo, fecha_ingreso } = req.body;
  const colaborador = await Empleado.findOne({ codigo: codigo });

  const { frecuencia } = colaborador.pagos;

  const fiv = await frecuenciaIsValid(frecuencia);
  if (!fiv)
    res
      .status(400)
      .json(
        "La frecuencia de pago para este colaborador no es válida para este cálculo"
      );

  const isr = await getEmployeeIsr(colaborador.pagos, fecha_ingreso);

  res.json({ isr });
};

export const getDefaultEmployees = async (req, res) => {
  try {
    const count = await Empleado.estimatedDocumentCount();
    if (count <= 0) return res.status(400).json({ message: "No existen empleados actualmente."});

    const defaultEmployeers = await Empleado.find({})
    res.status(200).json(defaultEmployeers)
  } catch (error) {
    console.error(error)
    res.status(501).json({ message: "Error", error })
  }
}

export const createEmployee = async (req, res) => {
  res.json("Crear Empleado");
};

export const updateEmployeeByCode = async (req, res) => {
  res.json("Actualizar Empleado");
};

export const deleteEmployeeByCode = async (req, res) => {
  res.json("Eliminar Empleado");
};

export default {
  getIsrByEmployeeCode,
  createEmployee,
  updateEmployeeByCode,
  deleteEmployeeByCode,
};
