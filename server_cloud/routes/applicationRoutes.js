const express = require("express");
const router = express.Router();
const db = require("../../server_cloud/models");
const NewApplication = db.NewApplication;

// Insert new application
router.post("/", async (req, res) => {
  try {
    const newApplication = await NewApplication.create(req.body);
    res.status(201).json({ 
      message: "Form submitted successfully", 
      application: newApplication 
    });
  } catch (error) {
    console.error("Insert Error:", error);
    res.status(500).json({ error: "Failed to submit form" });
  }
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
