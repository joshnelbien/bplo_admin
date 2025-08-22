const express = require("express");
const router = express.Router();
const db = require("../models");
const User = db.User;
const multer = require("multer");
const path = require("path");

// ✅ configure multer to save files in /uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ✅ expose /uploads folder so React can access files directly
router.use("/uploads", express.static("uploads"));

router.post(
  "/",
  upload.fields([
    { name: "proofOfReg" },
    { name: "proofOfRightToUseLoc" },
    { name: "locationPlan" },
    { name: "brgyClearance" },
    { name: "marketClearance" },
    { name: "occupancyPermit" },
    { name: "cedula" },
    { name: "photoOfBusinessEstInt" },
    { name: "photoOfBusinessEstExt" },
  ]),
  async (req, res) => {
    try {
      const last = (await User.max("id")) || 0;
      const newId = last % 2 === 0 ? last + 2 : last + 1;

      const formData = req.body;
      const fileData = {};

      // ✅ save relative path so frontend can load files directly
      for (const key in req.files) {
        fileData[key] = `uploads/${req.files[key][0].filename}`;
      }

      const newUser = await User.create({
        id: newId,
        ...formData,
        ...fileData,
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error("Insert error:", error);
      res.status(500).json({ error: "Failed to create user" });
    }
  }
);

// ✅ fetch users (files come as paths now)
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

module.exports = router;
