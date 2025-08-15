const express = require("express");
const router = express.Router();
const db = require("../models");

const Backroom = db.Backroom;
const User = db.User; // make sure this matches your model name

// ✅ Fetch all backroom records
router.get("/", async (req, res) => {
  try {
    const backrooms = await Backroom.findAll();
    res.json(backrooms);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch backrooms" });
  }
});

// ✅ Approve an applicant (move from NewRecord → Backroom)
router.post("/", async (req, res) => {
  const { id } = req.body;

  try {
    // 1. Find applicant in User table
    const applicant = await User.findByPk(id);

    if (!applicant) {
      return res.status(404).json({ error: "Applicant not found" });
    }

    // 2. Prepare new data for Backroom
    const applicantData = {
      ...applicant.toJSON(), // copy all fields
      status: "Approved",    // ✅ change status on transfer
      obo: "pending",
      zoning: "pending",
      cho: "pending",
      cenro: "pending",
      cmswo: "pending",
    };

    // 3. Insert into Backroom
    await Backroom.create(applicantData);

    // 4. Remove from User
    await applicant.destroy();

    res.status(200).json({ message: "Applicant approved and moved to backroom" });
  } catch (error) {
    console.error("Approve error:", error);
    res.status(500).json({ error: "Failed to approve applicant" });
  }
});


module.exports = router;
