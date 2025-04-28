// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const twilio = require("twilio");

// // Load environment variables
// const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;

// // Twilio client setup
// let client;
// if (TWILIO_ACCOUNT_SID?.startsWith("AC") && TWILIO_AUTH_TOKEN) {
//   client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
// } else {
//   console.warn("⚠️ Twilio credentials not properly set. SMS will not work.");
// }

// // Schema + model
// const quoteSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   service: String,
//   shift: String,
//   date: String,
// });
// const Quote = mongoose.model("Quote", quoteSchema);

// // POST: Submit Quote
// router.post("/get-quote", async (req, res) => {
//   try {
//     const newQuote = new Quote(req.body);
//     await newQuote.save();

//     // Send SMS (optional if Twilio configured)
//     if (client && req.body.phone?.startsWith("+")) {
//       await client.messages.create({
//         body: `Hi ${req.body.name}, your quote request was received. We'll contact you shortly!`,
//         from: TWILIO_PHONE_NUMBER,
//         to: req.body.phone,
//       });
//     }

//     res.json({ message: "Quote request submitted successfully!" });
//   } catch (error) {
//     console.error("❌ Error handling /get-quote:", error.message);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const twilio = require("twilio");

// Load environment variables
const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER,
} = process.env;

// Twilio client setup
let client;
if (TWILIO_ACCOUNT_SID?.startsWith("AC") && TWILIO_AUTH_TOKEN) {
  client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
} else {
  console.warn("⚠️ Twilio credentials not set correctly. SMS will be skipped.");
}

// Mongoose model
const quoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  shift: String,
  date: String,
});
const Quote = mongoose.model("Quote", quoteSchema);

// Helper: Check if phone number is in international format
const isValidPhoneNumber = (number) => /^\+[1-9]\d{9,14}$/.test(number);

// POST /api/get-quote
router.post("/get-quote", async (req, res) => {
  try {
    const { name, phone } = req.body;

    const newQuote = new Quote(req.body);
    await newQuote.save();

    // Try sending SMS if valid phone and Twilio is configured
    if (client && isValidPhoneNumber(phone)) {
      try {
        await client.messages.create({
          body: `Hi ${name}, your quote request was received. We'll contact you shortly!`,
          from: TWILIO_PHONE_NUMBER,
          to: phone,
        });
        console.log("📲 SMS sent to:", phone);
      } catch (smsErr) {
        console.error("⚠️ SMS sending failed:", smsErr.message);
        // Don't block the user just because SMS failed
      }
    } else {
      console.log("📵 Skipping SMS: Invalid phone or no Twilio credentials.");
    }

    return res.status(200).json({ message: "Quote request submitted successfully!" });
  } catch (error) {
    console.error("❌ Error handling /get-quote:", error.message);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
