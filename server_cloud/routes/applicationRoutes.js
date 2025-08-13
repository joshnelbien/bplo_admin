const express = require("express");
const router = express.Router();
const db = require("../../server_cloud/models");
const NewApplication = db.NewApplication;

// Insert new application



router.post("/", async (req, res) => {
  const last = (await NewApplication.max("id")) || 0;
  const newId = (last % 2 === 0) ? last + 1 : last + 2;
  const newApplication = await NewApplication.create({ id: newId, ...req.body });
  res.status(201).json(newApplication);
});



// Fetch all applications
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
