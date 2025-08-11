const express = require("express");
const router = express.Router();
const db = require("../models");
const User = db.User; // ✅ Correct model

// Insert into local User table
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ message: "Form submitted successfully", user: newUser });
  } catch (error) {
    console.error("Insert Error:", error);
    res.status(500).json({ error: "Failed to submit form" });
  }
});

// Fetch from local User table
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll(); // ✅ use the constant you already defined
    res.json(users);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

module.exports = router;
