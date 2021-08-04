const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] [${level}] [${message}]`;
});

const StageLogger = () => {
  return createLogger({
    level: 'info',
    format: combine(timestamp({ format: 'MM/DD/YYYY HH:mm:ss' }), myFormat),
    transports: [
      new transports.File({ filename: 'log/stage/combined.log' }),
    ],
  });
};

module.exports = StageLogger;
