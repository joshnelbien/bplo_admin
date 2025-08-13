const express = require("express");
const router = express.Router();
const db = require("../models");
const User = db.User; // ✅ Correct model


// Insert into local User table
router.post("/", async (req, res) => {
  const last = await User.max("id") || 0;
  const newId = (last % 2 === 0) ? last + 2 : last + 1;
  const newUser = await User.create({ id: newId, ...req.body });
  res.status(201).json(newUser);
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
