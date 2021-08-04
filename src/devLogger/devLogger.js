const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] [${level}] [${message}]`;
});

const DevLogger = () => {
  return createLogger({
    level: 'info',
    format: combine(colorize(), timestamp({ format: 'MM/DD/YYYY HH:mm:ss' }), myFormat),
    transports: [new transports.Console()],
  });
};

module.exports = DevLogger;
