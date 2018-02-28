const DB = require('../database');
const { sendUserError } = require('./errors');
module.exports = {
  getMany: async (req, res, table, query) => {
    try {
      const results = await DB[table].find(query);
      res.json(results);
    } catch (error) {
      sendUserError(error, res);
    }
  },
  getOne: async (req, res, table) => {
    try {
      const query = req.params;
      const parsedQuery = JSON.parse(query);
      const results = await DB[table].findOne(query);
      res.json(results);
    } catch (error) {
      sendUserError(error, res);
    }
  }
};
