import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

import empleadosRoutes from "./routes/empleados.routes";
import { createDefaultEmployees } from "./utils/initialSetup";

const app = express();
createDefaultEmployees();

app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use(empleadosRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "Prueba práctica: Samuel Sarmientos",
    info: {
      author: pkg.author,
      description: pkg.description,
      version: pkg.version,
      license: pkg.license,
    },
  });
});

export default app;
