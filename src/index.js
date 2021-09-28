import { NODE_ENV, HOST, PORT } from "./config";

import app from "./app";
import "./database";

console.log(`NODE_ENV = ${NODE_ENV}`);

app.listen(PORT, HOST, 0, () => {
  console.log(`Server en https://${HOST}:${PORT}`);
});
