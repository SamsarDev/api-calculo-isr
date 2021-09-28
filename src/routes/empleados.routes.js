import { Router } from "express";
import * as empleadosController from "../controllers/empleados.controller";
import * as verifyEmployee from "../middlewares/verifyEmployee";

const router = Router();

router.post(
  "/proyeccionisr",
  [
    verifyEmployee.hasCode,
    verifyEmployee.exists
  ],
  empleadosController.getIsrByEmployeeCode
);

export default router;
