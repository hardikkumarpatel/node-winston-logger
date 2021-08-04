const DevLogger = require('./devLogger/devLogger');
const StageLogger = require('./stageLogger/stageLogger');
const ProdLogger = require('./prodLogger/prodLogger');

let logger = null;
if (process.env.NODE_ENV === 'dev') {
  logger = DevLogger();
}
if (process.env.NODE_ENV === 'stage') {
  logger = StageLogger();
}
if (process.env.NODE_ENV === 'prod') {
  logger = ProdLogger();
}

module.exports = logger;
