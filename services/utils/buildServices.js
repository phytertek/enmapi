// pull out services config from object
module.exports = appConfig =>
  Object.keys(appConfig.Components).reduce((Services, key) => {
    if (appConfig.Components[key].Services) {
      const componentServices = require(appConfig.Components[key].Services);
      Services[key] = componentServices;
    }
    return Services;
  }, {});
