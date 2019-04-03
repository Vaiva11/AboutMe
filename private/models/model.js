const mongoose = require('mongoose');

const clientShema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    required: true,
  },
  message: {
    require: true,
  },
});

const Client = mongoose.model('Clients', clientShema);

module.exports = {
  Client,
};
