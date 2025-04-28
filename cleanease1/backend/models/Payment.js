const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  service: { type: String, required: true },
  price: { type: Number, required: true },
  unit: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Payment", paymentSchema);
