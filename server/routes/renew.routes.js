const express = require("express");
const router = express.Router();
const db = require("../models");
const Renew = db.renew; // ✅ Correct model

// Insert into local Renew table
router.post("/", async (req, res) => {
  try {
    const renew = await Renew.create(req.body);
    res.status(201).json({ message: "Form submitted successfully", renew });
  } catch (error) {
    console.error("Insert Error:", error);
    res.status(500).json({ error: "Failed to submit form" });
  }
});

// Fetch from local Renew table
router.get("/", async (req, res) => {
  try {
    const renews = await Renew.findAll(); // ✅
    res.json(renews);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch renews" });
  }
});

module.exports = router;
