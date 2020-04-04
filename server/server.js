const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// static content => index.html
app.use(express.static('../client/build'));
// app.get('*', (req, res) =>
app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
);

require('./src/routes/customer.routes.js')(app);
require('./src/routes/list.routes.js')(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
