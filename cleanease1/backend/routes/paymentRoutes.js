const express = require('express');
const router = express.Router();

// POST /api/payment
router.post('/payment', (req, res) => {
  const { service, price, unit } = req.body;

  console.log("Incoming request body:", req.body); // ✅ Debug log

  // Improved validation
  if (!service || price === undefined || !unit) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Simulated payment logic
  return res.status(200).json({ message: 'Payment successful' });
});

module.exports = router;
