const express = require("express");
const router = express.Router();
const db = require("../models"); // merged index.js
const NewApplication = db.NewApplication; // ✅ Supabase model

// Insert into Supabase
router.post("/", async (req, res) => {
    const last = await NewApplication.max("id") || -1;
    const newId = (last % 2 === 1) ? last + 2 : last + 1;
    const newApplication = await NewApplication.create({ id: newId, ...req.body });
    res.status(201).json(newApplication);
});



// Fetch from Supabase
router.get("/", async (req, res) => {
  try {
    const applications = await NewApplication.findAll();
    res.json(applications);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch applications" });
  }
});

module.exports = router;
