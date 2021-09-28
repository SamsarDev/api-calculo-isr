import Empleado from "../models/Empleado";

export const hasCode = async (req, res, next) => {
  const { colaborador: codigo } = req.body;

  if (!codigo)
    return res
      .status(400)
      .json({
        message: "El código del colaborador es obligatorio para esta petición.",
      });

  next();
};

export const exists = async (req, res, next) => {
  const { colaborador: codigo } = req.body;
  const colaborador = await Empleado.findOne({ codigo: codigo });

  if (!colaborador)
    return res
      .status(400)
      .json({ message: "El código del colaborador no existe." });

  next();
};
