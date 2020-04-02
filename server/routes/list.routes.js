module.exports = app => {
  const lists = require("../controllers/list.controller.js");

  // Retrieve all lists data
  app.get("/lists", lists.findAll);
};
