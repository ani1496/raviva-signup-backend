const { ObjectID } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Client } = require('./models/client');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/client', (req, res) => {
  var client = new Client({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email
  });

  client.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
