import winston from "winston";

const customLevels = {
  levels: {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    http: 4,
    debug: 5,
  },
  colors: {
    fatal: "red bold",
    error: "red",
    warning: "yellow",
    info: "green",
    http: "magenta",
    debug: "blue",
  },
};

winston.addColors(customLevels.colors);

const consoleFormat = winston.format.combine(
  winston.format.colorize({ levels: true }),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.printf(
    ({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`,
  ),
);

const fileFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.printf(
    ({ level, message, timestamp }) =>
      `${timestamp} [${level.toUpperCase()}]: ${message}`,
  ),
);

const logger = winston.createLogger({
  levels: customLevels.levels,
  transports: [
    new winston.transports.Console({
      level: "debug",
      format: consoleFormat,
    }),

    new winston.transports.File({
      filename: "errors.log",
      level: "error",
      format: fileFormat,
    }),
  ],
});

export default logger;
