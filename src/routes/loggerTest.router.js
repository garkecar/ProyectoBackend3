import { Router } from "express";
import logger from "../utils/logger.js";

const router = Router();

router.get("/loggerTest", (req, res) => {
  logger.debug("Este es un log de nivel DEBUG");
  logger.http("Este es un log de nivel HTTP");
  logger.info("Este es un log de nivel INFO");
  logger.warning("Este es un log de nivel WARNING");
  logger.error("Este es un log de nivel ERROR");
  logger.fatal("Este es un log de nivel FATAL");

  res.send("Logs generados. Revisa la consola y el archivo errors.log");
});

export default router;
