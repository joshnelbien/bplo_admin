const express = require("express");
const router = express.Router();
const db = require("../models");

// Test DB connection route
router.get("/test", async (req, res) => {
  try {
    await db.sequelize.authenticate();
    res.json({ success: true, message: "✅ Connected to Supabase DB!" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌ Failed to connect to DB",
      error: error.message,
    });
  }
});

module.exports = router;
