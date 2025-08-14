const express = require("express");
const router = express.Router();
const db = require("../models");
const RenewApplicationCloud = db.RenewApplicationCloud; // ✅ Correct model

// Insert into cloud RenewApplication table (odd ID only)
router.post("/", async (req, res) => {
  try {
    // Get the current highest ID
    const last = (await RenewApplicationCloud.max("id")) || 0;
    const newId = (last % 2 === 0) ? last + 1 : last + 2;
    const renew = await RenewApplicationCloud.create({
      id: newId,
      ...req.body
    });

    res.status(201).json({ message: "Form submitted successfully", renew });
  } catch (error) {
    console.error("Insert Error:", error);
    res.status(500).json({ error: "Failed to submit form" });
  }
});


// Fetch from local Renew table
router.get("/", async (req, res) => {
  try {
    const renews = await RenewApplicationCloud.findAll(); // ✅
    res.json(renews);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch renews" });
  }
});

module.exports = router;
