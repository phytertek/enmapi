module.exports = appConfig =>
  Object.keys(appConfig.Components).reduce((Model, key) => {
    if (appConfig.Components[key].Schema) {
      const componentSchema = require(appConfig.Components[key].Schema);
      if (componentSchema) {
        Object.keys(componentSchema).forEach(k => {
          if (!Model[k]) Model[k] = [componentSchema[k]];
          else Model[k] = [...Model[k], componentSchema[k]];
        });
      }
    }
    return Model;
  }, {});
