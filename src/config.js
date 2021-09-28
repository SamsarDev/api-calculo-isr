require("dotenv").config();

export const NODE_ENV = process.env.NODE_ENV || "development";
export const HOST = process.env.HOST || "localhost";
export const PORT = process.env.PORT || 3000;
export const DB_NAME = process.env.DB_NAME || "proyeccionIsr";
