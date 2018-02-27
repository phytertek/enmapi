const getComponentConfig = require('./buildComponentConfig');
let appConfig = {};

module.exports.server = {
  setConfig: configuration => {
    appConfig = configuration;
    appConfig['Components'] = getComponentConfig();
  },
  start: () => {
    appConfig.Components = getComponentConfig();
    require('./database');
    require('./services');
    require('./server/start');
  }
};

module.exports.appConfig = () => appConfig;
