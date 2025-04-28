const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  shift: { type: String, required: true },
  date: { type: String, required: true },
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
