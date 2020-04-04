const sql = require('./db.js');

// constructor
const List = function(list) {
  this.theid = list.theid;
  this.thename = list.thename;
};

List.getAll = result => {
  sql.query('SELECT * FROM table2', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = List;
