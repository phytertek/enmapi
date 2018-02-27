const winston = require('winston');
const { Level = 'development', Name } = require('../index').appConfig();

if (Level !== 'test') console.log('Environment level', Level);
const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: Level === 'production' ? 'info' : 'debug',
      colorize: true,
      timestamp: true,
      prettyPrint: true,
      label: Name
    })
  ]
});

logger.stream = {
  write: message => logger.info(message)
};

module.exports = logger;
