// pull in configuration object
const appConfig = require('../index').appConfig();

// build Services
const Services = require('./utils/buildServices')(appConfig);

module.exports = Services;
