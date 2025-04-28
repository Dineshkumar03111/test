// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();

const app = express();

// === Middleware ===
app.use(cors());
app.use(express.json());

// === MongoDB Connection ===
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // Exit on DB connection failure
  });

// === Routes ===
const quoteRoutes = require("./routes/sRoutes"); // Assuming this handles service/quote logic
const paymentRoutes = require("./routes/paymentRoutes");

app.use("/api", quoteRoutes);
app.use("/api", paymentRoutes);

// === Health Check Route ===
app.get("/", (req, res) => {
  res.send("🧼 Welcome to the Cleaning Service API!");
});

// === Start Server ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at: http://localhost:${PORT}`);
});
