const appConfig = require('../index').appConfig();
const { Name, Host, Port, Level } = appConfig;
const server = require('./index');
// logger
const logger = require('../common/logger');

if (Level !== 'test') {
  server.listen(Port, error => {
    if (error) return logger.error(`Error starting server`, error);
    logger.info(`${Name} server running at ${Host}:${Port}`);
  });
}
