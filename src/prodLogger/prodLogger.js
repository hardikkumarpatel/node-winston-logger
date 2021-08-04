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
      new transports.File({ filename: 'log/prod/error.log', level: 'error' }),
      new transports.File({ filename: 'log/prod/info.log', level: 'info' }),
    ],
    exceptionHandlers: [new transports.File({ filename: 'log/prod/exceptions.log' })],
  });
};

module.exports = StageLogger;
