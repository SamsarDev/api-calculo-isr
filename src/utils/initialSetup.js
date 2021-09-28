import Empleado from "../models/Empleado";
import { PanfiloReyes, LucreciaArana, MarcellaFlores } from "./empleados_default";

export const createDefaultEmployees = async () => {
  try {
    const count = await Empleado.estimatedDocumentCount();

    if (count > 0) return;

    const defaultEmployees = await Promise.all([
      new Empleado(PanfiloReyes).save(),
      new Empleado(LucreciaArana).save(),
      new Empleado(MarcellaFlores).save()
    ]) 

    console.log("Default employee were created:");
    console.log(defaultEmployees);
  } catch (error) {
    console.error(error);
  }
};
