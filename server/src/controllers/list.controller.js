const List = require("../models/list.model.js");

// Retrieve all Lists from the database.
exports.findAll = (req, res) => {
  List.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving lists."
      });
    else res.send(data);
  });
};