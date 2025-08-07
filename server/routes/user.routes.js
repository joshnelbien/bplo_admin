const express = require("express");
const router = express.Router();
const db = require("../models");
const User = db.user;



//test insert bplo new forms
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ message: "Form submitted successfully", user: newUser });
  } catch (error) {
    console.error("Insert Error:", error);
    res.status(500).json({ error: "Failed to submit form" });
  }
});



//insert to table

router.get("/", async (req, res) => {
  try {
    const users = await db.user.findAll({
    });
    res.json(users);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});


// // CREATE
// router.post("/", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// READ
// router.get("/", async (req, res) => {
//   const users = await User.findAll();
//   res.json(users);
// });

// // UPDATE
// router.put("/:id", async (req, res) => {
//   try {
//     const updated = await User.update(req.body, {
//       where: { id: req.params.id }
//     });


//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // DELETE
// router.delete("/:id", async (req, res) => {
//   try {
//     const deleted = await User.destroy({
//       where: { id: req.params.id }
//     });

//     if (deleted === 0) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json({ message: "User deleted" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });



module.exports = router;
