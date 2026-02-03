import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import mocksRouter from "./routes/mocks.router.js";
import loggerTestRouter from "./routes/loggerTest.router.js";

import logger from "./utils/logger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => logger.info("Conectado a MongoDB Atlas"))
  .catch((error) =>
    logger.error(`Error al conectar a MongoDB: ${error.message}`),
  );
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/mocks", mocksRouter);
app.use("/", loggerTestRouter);

app.listen(PORT, () => logger.info(`Servidor escuchando en puerto ${PORT}`));
