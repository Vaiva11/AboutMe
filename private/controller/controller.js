const { Client } = require('../models/model.js');

const createClient = (req, res) => {
  const data = req.body;
  const client = new Client();

  client.firstName = data.firstName;
  client.lastName = data.lastName;
  client.email = data.email;
  client.message = data.message;

  client
    .save()
    .then(() => {
      res.json(client);
    })
    .catch(error => {
      res.json(error);
    });
};

module.exports = { createClient };
